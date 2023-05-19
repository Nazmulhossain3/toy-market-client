import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEdit, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Mytoys = () => {

    const {user} = useContext(AuthContext)
    const [toys,setToys] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:5000/myTeddy/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })


    },[user])



    return (
        <div>
         
         <div className="overflow-x-auto rounded-2xl">
     <table className="table w-full border-2 ">
    {/* head */}
    <thead className=''>
      <tr>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Details</th>

      </tr>
    </thead>
    <tbody>
      
     
    {
            toys.map(toy => <tr
            key={toy._id}>

         
        
        <td>{toy.name}</td>
        <td>{toy.seller_name}</td>
        <td>{toy.Sub_Category}</td>
        <td>{toy.price}</td>
        <td> quantity : {toy.Available_quantity}</td>
       
        <td>
            <div className='flex gap-4'>
                <FaTrashAlt className='text-xl'></FaTrashAlt>
             <Link to={`/myTeddy/${toy._id}`}><FaEdit className='text-xl'></FaEdit></Link>
            </div>
        </td>
        
      </tr>)
        }
    
     
    </tbody>
  </table>
    </div>

        </div>
    );
};

export default Mytoys;