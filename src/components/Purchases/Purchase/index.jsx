import React from 'react';
import './Purchase.scss';

const Purchase = ({ purchase }) => {
  return (
    <div className="purchase">
      <p className="purchase__name">{purchase.name}</p>
      <p className="purchase__price">{purchase.price} ₽</p>
    </div>
  );
};

export default Purchase;
