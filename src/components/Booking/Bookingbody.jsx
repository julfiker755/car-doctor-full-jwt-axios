import React from 'react';

const Bookingbody = ({info,handleconfrom,handledelete}) => {
    const {_id,date,price,fastname,email,stadus}=info || {}
    return (
        <tr>
        <th>
          <label onClick={()=>handledelete(_id)} htmlFor="my-modal-3" className="btn btn-sm btn-circle">✕</label>
        </th>
        <td>
            <img className='w-[70px] h-[70px] rounded-md' src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg" alt="" />
        </td>
        <td>{email}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{fastname}</div>
            </div>
          </div>
        </td>
        <td>
          <span>${price}</span>
        </td>
        <td>{date}</td>
        <th>
          <button onClick={()=>handleconfrom(_id)} className={`btn-sm rounded-md btn-primary ${stadus === 'confirm' ? 'text-[red]':'text-[white]'}`}>{stadus ==='confirm' ? 'confirmed':'confirm'}</button>
        </th>
      </tr>
    );
};

export default Bookingbody;