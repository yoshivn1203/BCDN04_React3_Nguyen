import React from 'react';

const Modal = ({ modalData, setIsModalOpen }) => {
  const { id, name, alias, price, description, image, quantity } = modalData;
  return (
    <>
      <div className='backdrop' onClick={() => setIsModalOpen(false)} />
      <section className='modal'>
        <div className='card'>
          <p className='header'>Shoe infomation</p>
          <div className='card-body'>
            <img src={image} alt='shoe' />
            <article className='long-info'>
              <h3>{name}</h3>
              <ol>
                <li>
                  <strong>Id</strong>: {id}
                </li>
                <li>
                  <strong>Alias</strong>: {alias}
                </li>
                <li>
                  <strong>Price</strong>: ${price}
                </li>
                <li>
                  <strong>Quantity</strong>: {quantity}
                </li>
                <li>
                  <strong>Description</strong>: {description}
                </li>
              </ol>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
