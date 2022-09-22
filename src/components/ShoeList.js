import React from 'react';
import data from '../data/shoesData.json';

const ShoeList = (props) => {
  return (
    <div className='shoe-container'>
      {data.map((shoe) => {
        const { id, image, name, price } = shoe;
        return (
          <div key={id} className='card'>
            <img src={image} alt='shoe-img' />
            <div className='short-info'>
              <h4>{name}</h4>
              <h4>${price}</h4>
            </div>
            <button onClick={() => props.showDetail(shoe)}>More Detail</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShoeList;
