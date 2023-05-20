import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../component/Provider/AuthProvider";
import useTitle from "../../Hook/useTitle";

const Category = () => {

  const {user} = useContext(AuthContext)
  useTitle('category')


  const [fuzzies, setFuzzies] = useState([]);
  const [snugglekins, setSnugglekins] = useState([]);
  const [honeyBears, setHoneyBears] = useState([]);

  useEffect(() => {
    fetch("https://toy-market-server-rho.vercel.app/newTeddy/Fuzzy")
      .then((res) => res.json())
      .then((data) => {
        setFuzzies(data);
      });
  }, [fuzzies]);

  useEffect(() => {
    fetch("https://toy-market-server-rho.vercel.app/newTeddy/Snugglekins")
      .then((res) => res.json())
      .then((data) => {
        setSnugglekins(data);
      });
  }, [snugglekins]);

  useEffect(() => {
    fetch("https://toy-market-server-rho.vercel.app/newTeddy/Honey%20Bear")
      .then((res) => res.json())
      .then((data) => {
        setHoneyBears(data);
      });
  }, [honeyBears]);

  const handleShowToast1 = () => {
   if(!user?.email){
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: ' you have to log in first to view details',
      footer: '<a href="">Please Login First</a>'
    })
   }
    
  }
  const handleShowToast2 = () => {
    if(!user?.email){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: ' you have to log in first to view details',
        footer: '<a href="">Please Login First</a>'
      })
     }

  }
  const handleShowToast3 = () => {
    if(!user?.email){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: ' you have to log in first to view details',
        footer: '<a href="">Please Login First</a>'
      })
     }

  }





  return (
    <div className="bg-orange-50 font-serif">
      <h2 className=" font-bold text-center text-2xl text-green-500">
        Choose more Teddy Bear by Category
      </h2>

      <Tabs className="mb-6 p-12 text-center">
        <TabList className="text-green-500">
          <Tab>Honey Bear</Tab>
          <Tab>Snugglekins</Tab>
          <Tab>Fuzzy</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {honeyBears.map((honeyBear) => (
              <div className="">
                <div className="tab-card">
                  <div className="card card-compact w-72 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        className="object-cover h-48 rounded-lg"
                        src={honeyBear.photo}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="">name :{honeyBear.name}</h2>
                      <h2 className="">price :{honeyBear.price}</h2>
                      <p className="">Rating :{honeyBear.Rating}</p>

                      <div className="card-actions flex mx-auto w-full">
                      
                      <Link to={`/allTeddy/${honeyBear._id}`}>
                      <button onClick={handleShowToast1} className="border-2 text-white  bg-green-500 px-6 w-64 py-2 rounded-xl">
                          View Details
                        </button>
                      </Link>
                      
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {snugglekins.map((snugglekin) => (
              <div className="">
                <div className="tab-card">
                  <div className="card card-compact w-72 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        className="object-cover h-48 rounded-lg"
                        src={snugglekin.photo}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="">name :{snugglekin.name}</h2>
                      <h2 className="">price :{snugglekin.price}</h2>
                      <p className="">Rating :{snugglekin.Rating}</p>

                      <div className="card-actions flex mx-auto w-full">
                      <Link to={`/allTeddy/${snugglekin._id}`}>
                      <button onClick={handleShowToast2} className="border-2 text-white  bg-green-500 px-6 w-64 py-2 rounded-xl">
                          View Details
                        </button>
                      </Link>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {fuzzies.map((fuzzy) => (
              <div className="">
                <div className="tab-card">
                  <div className="card card-compact w-72 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        className="object-cover h-48 rounded-lg"
                        src={fuzzy.photo}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="">name :{fuzzy.name}</h2>
                      <h2 className="">price :{fuzzy.price}</h2>
                      <p className="">Rating :{fuzzy.Rating}</p>

                      <div className="card-actions flex mx-auto w-full">
                      <Link to={`/allTeddy/${fuzzy._id}`}>
                      <button onClick={handleShowToast3} className="border-2 text-white  bg-green-500 px-6 w-64 py-2 rounded-xl">
                          View Details
                        </button>
                      </Link>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
