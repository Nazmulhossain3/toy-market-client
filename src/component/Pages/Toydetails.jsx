import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Toydetails = () => {

    const toys = useLoaderData()
    console.log(toys)
    // const {name,email,photo,price,Rating,Available_quantity,Detail_description,seller_name} = toy

    return (

        <div>
            
            {
                toys.map(toy => <div className='p-10'>
                       
    <div className="card card-side bg-gray-100 shadow-xl mt-4 mx-auto">
  <figure><img src={toy.photo} alt="Movie"/></figure>
  <div className="card-body py-6">
    <h2 className="card-title">Name : {toy.name}</h2>
    <p>seller Name : {toy.seller_name}</p>
    <p>seller email : {toy.email}</p>
    <p>Price : {toy.price}</p>
    <div>
     Rating : {toy.Rating}
   <div class="rating rating-sm">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
    
</div>
    <p>Quantity : {toy.Available_quantity}</p>
    <p>description : {toy.Detail_description}</p>
    
  </div>
</div>


                </div>)
            }
        </div>
    );
};

export default Toydetails;