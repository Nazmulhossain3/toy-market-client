import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toy from './Toy';

const AllToys = () => {
    const toys = useLoaderData()
    return (
       <div className='p-12'>
       

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
            toys.map(toy => <Toy
                toy ={toy}
                key={toy._id}
            
            >



            </Toy>)
        }
    
     
    </tbody>
  </table>
    </div>

        

       </div>
    );
};

export default AllToys;