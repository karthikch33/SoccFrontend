import React, { useState } from 'react';
import { Image, Watermark } from 'antd';
import TeamData from '../static/TeamData';
import Meta from '../Meta';

const previewName =(props)=>{
  const {name} = props
  return <div>
  <label htmlFor="">{name}</label>
</div>
} 


const Team = () => {
  const [name,setName] = useState(false)

  const antImageMaskInfo = document.querySelector('.container');

  if (antImageMaskInfo) {
    antImageMaskInfo.addEventListener('click', () => {
      console.log("clicked");
    });
  }

  return (
    <Watermark content="SOCC TEAM">
      <Meta title={'Team'}/>
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h3 className='text-center m-4 fst-italic fw-bolder'>Team</h3>
        </div>
      </div>
      <div className='row'>
        {TeamData.map((index) => (
          <div key={index} className='col-lg-4 col-md-6 col-sm-12 mb-4'>
            <div className='gallery-img d-flex flex-column align-items-center'>
              <Image
                width={200}
                src={index?.img}
                alt={`Team Member ${index}`}
                className='img-fluid'
                preview="fasf"
              />
              <span className='fs-4 fst-italic'>{index?.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Watermark>
  );
};

export default Team;
