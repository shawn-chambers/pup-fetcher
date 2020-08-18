import React from 'react';

const Picture = ({ picture }) => {
  return (
    <>
    {
      picture ?
      <div className='picture-container'>
        <img alt='dog' src={picture}></img>
      </div>
      :
      <div className='error'>That's a rare breed! We can't fetch one of those</div>
    }
    </>
  );
};

export default Picture;