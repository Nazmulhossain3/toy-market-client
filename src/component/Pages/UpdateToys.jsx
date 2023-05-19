import React from 'react';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useParams } from 'react-router-dom';


const UpdateToys = () => {
    const {user} = useContext(AuthContext)
    const {id} = useParams()
    console.log(id)

const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data)

        fetch(`http://localhost:5000/myTeddy/${id}`,{

        method : 'PUT',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(data)


        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
               Swal.fire({
                  title: 'Success!',
                  text: 'Wow you Update a Toy',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
            }
        })
   
   
   
    }


    return (
        <form className='border-2 w-1/2 p-12 mx-auto mt-6 mb-6 rounded-xl bg-base-200 shadow-xl' onSubmit={handleSubmit(onSubmit)}>
    
        <div className=' flex gap-3 justify-center items-center mt-6'>
           {/* register your input into the hook by invoking the "register" function */}
      
      <input  placeholder="Toy name" className="input input-bordered input-accent w-full max-w-xs" defaultValue='' {...register("name")} />
      
     
      <input  placeholder="seller email" className="input input-bordered input-accent w-full max-w-xs" defaultValue={user?.email} {...register("email")} />
  
      </div>
     
        <div className=' flex gap-3 justify-center items-center mt-4'>
           {/* register your input into the hook by invoking the "register" function */}
      
      <input  placeholder="seller name" className="input input-bordered input-accent w-full max-w-xs" defaultValue="" {...register("seller_name")} />
      
     
      <input  placeholder=" Toy photo" className="input input-bordered input-accent w-full max-w-xs" defaultValue="" {...register("photo")} />
  
         </div>
      
      
        <div className=' flex gap-3 justify-center items-center mt-4'>
           {/* register your input into the hook by invoking the "register" function */}
      
      
          <select className="select w-full max-w-xs input input-bordered input-accent" {...register("Sub_Category")}>
         
          <option value="Cuddles">Cuddles</option>
          <option value="Honey Bear">Honey Bear</option>
          <option value="Snugglekins">Snugglekins</option>
          <option value="Fuzzy">Fuzzy</option>
        </select>
      
     
      <input  placeholder="Price" className="input input-bordered input-accent w-full max-w-xs" defaultValue="" {...register("price")} />
  
         </div>
  
      <div className=' flex gap-3 justify-center items-center mt-4'>
           {/* register your input into the hook by invoking the "register" function */}
      
      <input  placeholder="Rating" className="input input-bordered input-accent w-full max-w-xs" defaultValue="" {...register("Rating")} />
      
     
      <input  placeholder="Available quantity" className="input input-bordered input-accent w-full max-w-xs" defaultValue="" {...register("Available_quantity")} />
  
         </div>
       
      <div className='  gap-3 justify-center items-center mt-4'>
           {/* register your input into the hook by invoking the "register" function */}
      
      <input  placeholder="Detail description" className=" input input-bordered input-accent w-full max-w-xs" defaultValue="" {...register("Detail_description")} />
      
     
      <input className='border-2 btn-wide btn  btn-accent mt-2' type="submit" />
  
         </div>
       
     
     
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
       
    </form>
    );
};

export default UpdateToys;