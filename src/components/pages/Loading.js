import React, { useState, useEffect } from 'react';

const Loading = () => {
  return (
    <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
    <div className={`loading-container'}`}>
      <div className="loading-spinner"></div>
      <p className='my-3'>Loading...</p>
    </div>
        </div>
    </div>
  );
};

export default Loading;
