import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [fuzzies,setFuzzies] = useState([])

  
    useEffect(()=>{
        fetch('http://localhost:5000/newTeddy/Fuzzy')
        .then(res => res.json())
        .then(data => {
            setFuzzies(data)
        })
    },[])

   
   
   
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
         <h2>Any content 1</h2>
       </TabPanel>
      
       <TabPanel>
         <h2>Any content 2</h2>
       </TabPanel>
     
      
       <TabPanel>
         {
            fuzzies.map(fuzzy => <div className=''>
 
 
    <div className='tab-card'>
   
    <div className="card card-compact w-64 bg-base-100 shadow-xl">
  <figure><img className='object-cover h-64' src={fuzzy.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
    </div>
    
    </div>
           



 </div>)
         }
       
       </TabPanel>
     
     
     </Tabs>


       </div>
    );
};

export default Category;