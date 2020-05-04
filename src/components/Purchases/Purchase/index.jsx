import React from 'react';
import classNames from 'classnames';
import './Purchase.scss';

const Purchase = ({ purchase }) => {
  const purchaseClasses = classNames({
    purchase: true,
    'purchase--restricted': purchase.restricted
  });

  return (
    <>
      <div className={purchaseClasses}>
        <p className="purchase__name">{purchase.name}</p>
        <p className="purchase__price">{purchase.price} ₽</p>
      </div>
      {purchase.restricted && <p className="purchase__warning">Товар невозможно пробить на кассе самообслуживания</p>}
    </>
  );
};

export default Purchase;
