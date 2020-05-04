import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { purchasesMocksWeighted, purchasesMocks } from '../../pages/PurchasesPage/__mocks__/purchasesMocks';
import Purchases from '../../components/Purchases/index.jsx';
import './FinalPage.scss';

const FinalPage = () => {
  const history = useHistory();

  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'Enter') {
        history.push('/');
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, []);

  return (
    <div className="final-page">
      <div className="final-page__container">
        <h2 className="final-page__header">Текущий список продуктов</h2>
        <p className="final-page__header">
          Сумма:{' '}
          {[...purchasesMocks, ...purchasesMocksWeighted].reduce(
            (sum, item) => (item.restricted ? sum : item.price + sum),
            0
          )}{' '}
          ₽
        </p>
        <Purchases purchases={purchasesMocks} />
        <br />
        <h3 className="final-page__header">Весовые товары</h3>
        <Purchases purchases={purchasesMocksWeighted} />
      </div>
    </div>
  );
};

export default FinalPage;
