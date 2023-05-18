import React from 'react';

const Toy = ({toy}) => {
    const {name,seller_name,Sub_Category,price,Available_quantity,_id} = toy
    return (
        <tr>
        
        <td>{name}</td>
        <td>{seller_name}</td>
        <td>{Sub_Category}</td>
        <td>{price}</td>
        <td> quantity : {Available_quantity}</td>
        <button className='mt-2 "btn btn-success p-2 rounded text-white'>View Details</button>
        </tr>
    );
};

export default Toy;

