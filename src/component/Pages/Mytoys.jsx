import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Mytoys = () => {

    const {user} = useContext(AuthContext)
    const [toys,setToys] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:5000/myTeddy/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })


    },[user])



    return (
        <div>
         
         
         
          {
            toys.map(toy => <div>



            </div>)
          }
        </div>
    );
};

export default Mytoys;