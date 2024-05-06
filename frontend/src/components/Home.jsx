import React from 'react';
import Forms from './Forms';

function Home() {
  return (
    <>
      <br />
      <div className='card' style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className='card-body'>
          <h5 className='card-title'>Predict Type of Glass</h5>
          <Forms submits={false} />
        </div>
      </div>
    </>
  );
}

export default Home;
