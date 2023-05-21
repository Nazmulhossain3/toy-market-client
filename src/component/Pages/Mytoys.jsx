import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEdit, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../Hook/useTitle';


const Mytoys = () => {

    const {user} = useContext(AuthContext)
    const [toys,setToys] = useState([])
    const [sortValue, setSortValue] = useState('');
    console.log(sortValue)

    useTitle('myToys')
   
   

    useEffect(()=> {
        fetch(`https://toy-market-server-rho.vercel.app/myTeddy/${user?.email}?sort=${sortValue}`)
        .then(res => res.json())
        .then(data => setToys(data))


    },[user?.email,sortValue])

    

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
               
                fetch(`https://toy-market-server-rho.vercel.app/myTeddy/${_id}`,{
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


       

  //  const { register, handleSubmit } = useForm();
  // const onSubmit = data => {
  //   setSortOrder()
   
  // };

  // const handleSortChange = (event) => {

  //   setSortValue(event.target.value);
  
  // };


    return (
        <div>
         
       
<select  onChange={(e)=> setSortValue(e.target.value)}>
  <option  value="ascending">Ascending</option>
  <option value="descending">Descending</option>
</select>
    
    
     <div className="overflow-x-auto rounded-2xl font-serif mt-4 mb-4 bg-base-200 shadow-2xl">
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