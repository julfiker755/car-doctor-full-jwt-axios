const express = require('express')
var jwt = require('jsonwebtoken');
require('dotenv').config()
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5050
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// middleware
app.use(cors())
app.use(bodyParser.json())


const uri = `mongodb+srv://${process.env.S1_USER}:${process.env.S2_PASS}@cluster0.azyqnnz.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true, } });

const varifyjwt=(req,res,next)=>{
  const headerdata=req.headers.authorization
  if(!headerdata){
      return res.status(401).send({Message:'unauthorize access'})
  }
  const token=headerdata.split(' ')[1]
  console.log(token)
  jwt.verify(token,process.env.ASSENTOKEN, function(err, decoded) {
     if(err){
      return res.status(403).send({message:'sry,unauthorisze access'})
     }
     req.decoded=decoded
     next()
    });
}

async function run() {
  try {
    const database = client.db("cardoctor").collection("service");
    const databaseorder = client.db("cardoctor").collection("order");
    // how to get data
    app.get("/service", async (req, res) => {
      const query = {}
      const user = database.find(query)
      const result = await user.toArray()
      res.send(result)
    })
    // routing get data
 app.get("/service/:id",async(req,res)=>{
    const id=req.params.id
    const query={_id:new ObjectId(id)}
    const result=await database.findOne(query)
    res.send(result)
})
// Jwt token
app.post('/jwt',async(req,res)=>{
  const user=req.body
  var token = jwt.sign(user,process.env.ASSENTOKEN, { expiresIn: '1h' });
  res.send({token})
})
// order get data
app.get("/order", varifyjwt,async (req, res) => {
  const decoded= req.decoded
  console.log(decoded.user)
  if(decoded.user !== req.query?.email){
    res.status(403).send({error:1,message:'Your decoded email !== query email not fond'})
  }
   let query={}
  if(req.query?.email){
    query={email:req.query.email}
  }
  const result = await databaseorder.find(query).toArray()
  res.send(result)
})

// order routing
app.get("/order/:id", async (req, res) => {
  const id=req.params.id
    const query={_id:new ObjectId(id)}
    const result=await databaseorder.findOne(query)
    res.send(result)
})
// order delete
app.delete("/order/:id", async (req, res) => {
        const id = req.params.id
        const query = { _id: new ObjectId(id) }
        const result =await databaseorder.deleteOne(query)
        res.send(result)
      })

// order post data
    app.post("/order", async (req, res) => {
      const bodydata = req.body
      const result = await databaseorder.insertOne(bodydata)
      res.send(result)
    })
    //order patch
    app.patch("/order/:id",async(req,res)=>{
          const bodydata=req.body
          const id=req.params.id
          const query={_id:new ObjectId(id)}
          const options = { upsert: true };
          const updateDoc = {
              $set: {
                stadus:bodydata.stadus
              },
            };
          const result=await databaseorder.updateOne(query,updateDoc,options)
          res.send(result)
      })

//     // how to post data
//     app.post("/chocalate", async (req, res) => {
//       const bodydata = req.body
//       const result = await database.insertOne(bodydata)
//       res.send(result)
//     })
//     // delete
//     app.delete("/chocalate/:id", async (req, res) => {
//       const id = req.params.id
//       const query = { _id: new ObjectId(id) }
//       const result = await database.deleteOne(query)
//       res.send(result)
//     })
// // routing
// app.get("/chocalate/:id",async(req,res)=>{
//     const id=req.params.id
//     const query={_id:new ObjectId(id)}
//     const result=await database.findOne(query)
//     res.send(result)
// })
// data update
// app.put("/chocalate/:id",async(req,res)=>{
//     const bodydata=req.body
//     const id=req.params.id
//     const query={_id:new ObjectId(id)}
//     const options = { upsert: true };
//     const updateDoc = {
//         $set: {
//           name:bodydata.name,
//           quantity:bodydata.country,
//           category:bodydata.category,
//         },
//       };
//     const result=await database.updateOne(query,updateDoc,options)
//     res.send(result)
// })

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello data")
})

app.listen(port, () => {
  console.log(`Server run successfull ${port}`)
})
