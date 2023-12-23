import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

  const callme = ()=>{
    const itemString = localStorage.getItem('server');
    if (!itemString) {
      return false;
    }
    const item = JSON.parse(itemString);
    const currentTime = new Date().getTime();
    if (currentTime > item.expiration) {
      localStorage.removeItem('server');
      return false;
    }
    return true;
  }
  
  return (
    <>
    </>
  );
};

export default Bulb;
