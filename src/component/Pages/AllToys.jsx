import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toy from './Toy';
import useTitle from '../../Hook/useTitle';

const AllToys = () => {
   
    const [toys,setToys] = useState([])
    const [searchText,setSearchText] = useState('')
    useTitle('Alltoy')
    
  useEffect(()=>{
    fetch('https://toy-market-server-rho.vercel.app/allTeddy')
    .then(res => res.json())
    .then(data => {
      setToys(data)
    })
  },[])
  

  const handleSearch = () => {
  fetch(`https://toy-market-server-rho.vercel.app/toySearch/${searchText}`)
  .then(res => res.json())
  .then(data => {
    setToys(data)
  })

}
    
    return (
       <div className='px-12 font-serif'>
       
    <div className="form-control p-6">
  <div className="input-group">
    <input type="text" onChange={(e)=> setSearchText(e.target.value)} placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
    
    
    
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