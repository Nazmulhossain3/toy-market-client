import React from 'react';

const Discount = () => {
    return (
        <div className='font-serif'>
        <h2 className=" bg-base-100 shadow-xl text-2xl text-center font-semibold">Biggest Discount On This Month</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-12 gap-4 shadow-2xl ">
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img src="https://media.istockphoto.com/id/609810832/photo/cute-teddy-bear-on-brown-wooden-background.jpg?s=612x612&w=is&k=20&c=j1R5M8TnfvDjr243q1gY3gPRaa0k4rATKp238aemJfo=" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Discount : 40%</h2>
            <div className="flex justify-start">
              <div className="rating rating-sm mt-1">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />

                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className=" text-white btn-outline border-2 mx-auto w-full bg-green-500 p-2 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/499813862/photo/fluffy-teddy-bear-lying-on-the-floor.jpg?s=1024x1024&w=is&k=20&c=UATuXcOD5SD3NRkKEvDcVhq6r7xhHrpFzYwYi4WHZBU="
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Discount : 30%</h2>
            <div className="flex justify-start">
              <div className="rating rating-sm mt-1">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />

                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className=" text-white btn-outline border-2 mx-auto w-full bg-green-500 p-2 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img src="https://media.istockphoto.com/id/1067003308/photo/white-teddy-bear-in-wood-sled-among-christmas-decorations-rustic-style.jpg?s=612x612&w=is&k=20&c=nfjynxevMdU6ul3u4Rknmy334nSitIFcmvPmcvTihLo=" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Discount : 60%</h2>
            <div className="flex justify-start">
              <div className="rating rating-sm mt-1">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />

                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className=" text-white btn-outline border-2 mx-auto w-full bg-green-500 p-2 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Discount;