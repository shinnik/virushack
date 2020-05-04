import React from 'react';
import Purchase from './Purchase/index.jsx';
import './Purchases.scss';

const Purchases = ({ purchases }) => {
  return (
    <ul className="purchases">
      {purchases.map((purchase) => {
        return (
          <li key={purchase.id}>
            <Purchase purchase={purchase} />
          </li>
        );
      })}
    </ul>
  );
};

export default Purchases;
