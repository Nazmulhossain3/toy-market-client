import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation,} from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
        visible={true}
      />
    }

   
    if(user){
    
        return  children

    }
    else{
    return  <Navigate to='/login' state={{from : location}} replace ></Navigate>
    }
   
};

export default PrivateRoute;