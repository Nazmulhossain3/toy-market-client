import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [fuzzies,setFuzzies] = useState([])
    const [snugglekins,setSnugglekins] = useState([])
    const [honeyBears, setHoneyBears ] = useState([])

  
    useEffect(()=>{
        fetch('http://localhost:5000/newTeddy/Fuzzy')
        .then(res => res.json())
        .then(data => {
            setFuzzies(data)
        })
    },[fuzzies])

   
    useEffect(()=>{
        fetch('http://localhost:5000/newTeddy/Snugglekins')
        .then(res => res.json())
        .then(data => {
            setSnugglekins(data)
        })
    
    },[snugglekins])

   useEffect(()=>{
    fetch('http://localhost:5000/newTeddy/Honey%20Bear')
    .then(res => res.json())
    .then(data => {
        setHoneyBears(data)
    })

   },[honeyBears])
   
   
    return (
       <div className='bg-orange-50'>

        <h2 className=' font-bold text-center text-2xl text-orange-500'>Choose more Teddy Bear by Category</h2>

    <Tabs className='mb-6 p-12 text-center'>
       
       <TabList className='text-green-500'>
         <Tab>Honey Bear</Tab>
         <Tab>Snugglekins</Tab>
         <Tab>Fuzzy</Tab>
       </TabList>
   
       <TabPanel>
        
       <div className='grid md:grid-cols-3 gap-4 mt-6'>
         {
            honeyBears.map(honeyBear => <div className=''>
 
 
    <div className='tab-card'>
   
    <div className="card card-compact w-64 bg-base-100 shadow-xl">
  <figure><img className='object-cover h-64' src={honeyBear.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">name :{honeyBear.name}</h2>
    <h2 className="card-title">price :{honeyBear.price}</h2>
    <p className="card-title">Rating :{honeyBear.Rating}</p>
   
    <div className="card-actions flex mx-auto w-full">
      <button className="border-2 text-white  bg-green-500 px-6 w-64 py-2 rounded-xl">View Details</button>
    </div>
  </div>
    </div>
    
    </div>
           



           </div>)
         }
        
         </div>
     
     
       </TabPanel>
       
    
       <TabPanel>
       <div className='grid md:grid-cols-3 gap-4 mt-6'>
         {
            snugglekins.map(snugglekin => <div className=''>
 
 
    <div className='tab-card'>
   
    <div className="card card-compact w-64 bg-base-100 shadow-xl">
  <figure><img className='object-cover h-64' src={snugglekin.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">name :{snugglekin.name}</h2>
    <h2 className="card-title">price :{snugglekin.price}</h2>
    <p className="card-title">Rating :{snugglekin.Rating}</p>
   
    <div className="card-actions flex mx-auto w-full">
      <button className="border-2 text-white  bg-green-500 px-6 w-64 py-2 rounded-xl">View Details</button>
    </div>
  </div>
    </div>
    
    </div>
           



           </div>)
         }
        
         </div>
       
     
     
       </TabPanel>
     
         <TabPanel>
         <div className='grid md:grid-cols-3 gap-4 mt-6'>
         {
            fuzzies.map(fuzzy => <div className=''>
 
 
    <div className='tab-card'>
   
    <div className="card card-compact w-64 bg-base-100 shadow-xl">
  <figure><img className='object-cover h-64' src={fuzzy.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">name :{fuzzy.name}</h2>
    <h2 className="card-title">price :{fuzzy.price}</h2>
    <p className="card-title">Rating :{fuzzy.Rating}</p>
   
    <div className="card-actions flex mx-auto w-full">
      <button className="border-2 text-white  bg-green-500 px-6 w-64 py-2 rounded-xl">View Details</button>
    </div>
  </div>
    </div>
    
    </div>
           



           </div>)
         }
        
         </div>
       
       </TabPanel>
     
     
     </Tabs>


       </div>
    );
};

export default Category;