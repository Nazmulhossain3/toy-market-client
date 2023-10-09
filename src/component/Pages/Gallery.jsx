import React from 'react';

const Gallery = () => {
    return (
        <div className=' py-4 font-serif'>
            <h2 className='text-center text-2xl font-bold  '>Choose your Little Angel</h2>
          
            <div className=' text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10'>
           <div>
           <img className=' sm:mr-12 lg:w-96 h-64 rounded-xl' src="https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg" alt="" />
            <p className='font-serif'>name : Lily</p>
           </div>
        
           <div>
           <img className=' sm:mr-12 lg:w-full h-64 rounded-xl' src="https://cdn.pixabay.com/photo/2016/04/19/15/23/teddy-1338895_1280.jpg" alt="" />
            <p className='font-serif'>Name : Oliver</p>
           </div>
        
           <div>
           <img className=' sm:mr-12 lg:w-full h-64 rounded-xl' src="https://cdn.pixabay.com/photo/2016/11/18/16/16/teddy-bear-1835598_1280.jpg" alt="" />
            <p >Name : Bella</p>
           </div>
         
           <div>
           <img className=' sm:mr-12 lg:w-full h-64 rounded-xl' src="https://cdn.pixabay.com/photo/2017/07/31/14/42/green-2558204_1280.jpg" alt="" />
            <p>Name : Max </p>
           </div>
         
           <div>
           <img className=' sm:mr-12 lg:w-full h-64 rounded-xl' src="https://cdn.pixabay.com/photo/2018/10/10/23/31/teddy-3738656_1280.jpg" alt="" />
            <p>Name : Ava</p>
           </div>
         
           <div>
           <img className=' sm:mr-12 lg:w-full lg:h-64 rounded-xl' src="https://cdn.pixabay.com/photo/2015/06/04/16/22/teddy-bear-797577_1280.jpg" alt="" />
            <p>Name : Charlie</p>
           </div>
            </div>
        </div>
    );
};

export default Gallery;