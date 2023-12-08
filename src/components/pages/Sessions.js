import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import CardContainer from '../CardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { GetSessions } from '../features/session/sessionSlice';
import Loading from './Loading';
import Meta from '../Meta';

const Sessions = () => {

  const dispatch = useDispatch()
  const {AllSessions} = useSelector(state=>state.admin)

  const [sessionsData,setSessionsData] = useState([])
  
  useEffect(()=>{
    dispatch(GetSessions())    
  },[])

  useEffect(()=>{
    setSessionsData(AllSessions)
  },[AllSessions])



  const completeSessionDescription = (currentData)=>{
      return <>
      <div className="row">
        <div className="col-12">
          <div className="imgdiv">
            <Image
              width={200}
              src="https://ychef.files.bbci.co.uk/976x549/p0dmqnyd.jpg"
              className='img-f'
          />
          </div>
        </div>
      </div>
      <div className='row'>
          <div className="col-12">
            <ul>
              <li>
            <label htmlFor="" className='fs-4'>Date : </label> 
            <span className='fs-6 mx-3'>{currentData?.date}</span>
              </li>
              <li>
                <label htmlFor="" className='fs-4'>Timings :</label>
                <span className='fs-6 mx-3'>{`${currentData?.startAt} - ${currentData?.ends}`}</span>
              </li>
              <li>
                <label htmlFor="" className='fs-4'>Venu :</label>
                <span className='fs-6 mx-3'>{currentData?.venue}</span>
              </li>
            </ul>
          </div>
      </div>
    </>
  }

  const completeOutComeDescription = (currentData)=>{
    return  <>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis doloribus corporis tempora possimus, non voluptates quibusdam dolore eaque, similique obcaecati inventore, laborum corrupti odit labore. Porro suscipit doloremque laborum quod odio vitae sint consequatur?
  </>
  }

  return (
    <div className='container-xxl'>
      <Meta title={'Sessions'}/>
      <div className="row">
        <div className="col-12">
          <h4 className='fs-2 fw-bold my-4'>Ongoing Sessions</h4>
        </div>
      </div>

      {
         Array.isArray(sessionsData) ? Array.isArray(sessionsData) && sessionsData?.map((element,i)=>{
          const sessionDescription = completeSessionDescription(element);
          const outcomeDescription = completeOutComeDescription(element);
          return <CardContainer sessionDescription={sessionDescription} outcomeDescription={outcomeDescription} sessionId = {element?._id} sessiontitle = {element?.sessiontitle}/> 
        }): <Loading/>
      } 
    </div>
  );
}

export default Sessions;

