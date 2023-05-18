import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData()
    return (
        <div>
            <h2>here is all toys : {toys.length} </h2>
        </div>
    );
};

export default AllToys;