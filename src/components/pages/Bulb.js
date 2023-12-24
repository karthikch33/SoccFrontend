import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TbHandFinger } from "react-icons/tb";
import { serverOnOrOff } from '../features/server/serverSlice';

const Bulb = () => {
  const dispatch =useDispatch()
  useEffect(() => {
    yourFunction()
    const intervalId = setInterval(yourFunction, 50000); 
    return () => clearInterval(intervalId);
  }, []); 

  
  const yourFunction = () => {
    dispatch(serverOnOrOff());
  };

  const {serverCondition} = useSelector(state=>state.server)

  
  return (
    <>
    </>
  );
};

export default Bulb;
