import React from "react";

const Favourite = () => {
  return (
    <div className="font-serif">
        <h2 className=" bg-base-100 shadow-xl text-2xl text-center font-semibold">Most Favorite Teddy here</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-12 gap-4 shadow-2xl ">
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/swcQSzg/teddy.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Price : $200</h2>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOAH-9I6Oi2v8_G2-houPxrlBDttu6V2Nmw&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Price : $250</h2>
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
            <img src="https://i.ibb.co/LtC3J7p/tedd3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Price : $300</h2>
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

export default Favourite;
