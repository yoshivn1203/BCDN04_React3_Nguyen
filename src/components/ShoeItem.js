import React from 'react';

const ShoeItem = ({ shoe, showDetail }) => {
  const { image, name, price } = shoe;
  return (
    <div className='card'>
      <img src={image} alt='shoe-img' />
      <div className='short-info'>
        <h4>{name}</h4>
        <h4>${price}</h4>
      </div>
      <button onClick={() => showDetail(shoe)}>More Detail</button>
    </div>
  );
};

export default ShoeItem;
