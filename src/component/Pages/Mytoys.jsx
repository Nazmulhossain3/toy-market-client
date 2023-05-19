import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEdit, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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

    

        const handleDeleteToy = (_id) => {
           
            console.log(_id);
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
               
                fetch(`http://localhost:5000/myTeddy/${_id}`,{
                    method : 'DELETE'
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                      Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        
                      const remaining = toys.filter(toy => toy._id !== _id)
                      setToys(remaining)
                   
                    }
                  });
              }
            });
          };




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
                <FaTrashAlt onClick={()=> handleDeleteToy(toy._id)} className='text-xl text-red-400'></FaTrashAlt>
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