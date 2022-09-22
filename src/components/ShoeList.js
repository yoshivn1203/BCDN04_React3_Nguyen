import React from 'react';
import data from '../data/shoesData.json';
import ShoeItem from './ShoeItem';

const ShoeList = (props) => {
  return (
    <section className='shoe-container'>
      {data.map((shoe) => (
        <ShoeItem key={shoe.id} showDetail={props.showDetail} shoe={shoe} />
      ))}
    </section>
  );
};

export default ShoeList;
