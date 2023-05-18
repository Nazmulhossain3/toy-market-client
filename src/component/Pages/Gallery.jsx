import React from 'react';

const Gallery = () => {
    return (
        <div className='bg-orange-50 py-4'>
            <h2 className='text-center text-2xl font-bold'>Choose your Little Angel</h2>
          
            <div className=' text-center grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
           <span>
           <img className=' sm:mr-12 w-96 h-64 rounded-xl' src="https://c8.alamy.com/zooms/9/9d4b6c98c14f4b52b52e388084119c52/kg28m0.jpg" alt="" />
            <p>name : Lily</p>
           </span>
           <span>
           <img className=' sm:mr-12 w-96 h-64 rounded-xl' src="https://media.istockphoto.com/id/1300713458/photo/two-teddy-bears-on-sea-rock.jpg?s=612x612&w=0&k=20&c=gPe2DCHAmaL9s8_CKruJFaGvYw7f0z4iTwrRsT6mNtI=" alt="" />
            <p>Name : Oliver</p>
           </span>
           <span>
           <img className=' sm:mr-12 w-96 h-64 rounded-xl' src="https://m.media-amazon.com/images/I/415MmbwvXSL.jpg" alt="" />
            <p>Name : Bella</p>
           </span>
           <span>
           <img className=' sm:mr-12 w-96 h-64 rounded-xl' src="https://m.media-amazon.com/images/I/511NIniSp+S._SX466_.jpg" alt="" />
            <p>Name : Max </p>
           </span>
           <span>
           <img className=' sm:mr-12 w-96 h-64 rounded-xl' src="https://m.media-amazon.com/images/I/615YVshMeKL._SX466_.jpg" alt="" />
            <p>Name : Ava</p>
           </span>
           <span>
           <img className=' sm:mr-12 w-96 h-64 rounded-xl' src="https://m.media-amazon.com/images/I/61tNEKnBdbL._SX569_.jpg" alt="" />
            <p>Name : Charlie</p>
           </span>
            </div>
        </div>
    );
};

export default Gallery;