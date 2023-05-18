import React from 'react';

const Banner = () => {
    return (
        <div className="hero mx-auto p-6 bg-orange-50">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://cdn.zeebiz.com/sites/default/files/2023/02/09/226456-teddy-day.jpg" className=" lg:w-96 rounded-lg shadow-2xl" />
          <div className='p-6'>
            <h1 className="text-3xl font-bold text-teal-500">The Teddy Bear Emporium!!</h1>
            <p className="text-justify mt-3">Welcome to Cuddly Companions: The Teddy haven, your one-stop online destination for all things teddy bears! Discover a world of fluffy, huggable goodness as you explore our extensive collection of adorable teddy bears from renowned brands and talented artisans.</p>
            <button className="btn btn-outline btn-success btn-sm mt-3">Buy Now</button>

          </div>
        </div>
      </div>
    );
};

export default Banner;