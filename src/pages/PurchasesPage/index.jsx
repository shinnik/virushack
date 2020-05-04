import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { purchasesMocks } from './__mocks__/purchasesMocks';
import Purchases from '../../components/Purchases/index.jsx';
import './PurchasesPage.scss';

const PurchasesPage = () => {
  const history = useHistory();

  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'Enter') {
        history.push('/dialog');
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, []);

  return (
    <div className="purchases-page">
      <div className="purchases-page__container">
        <h2 className="purchases-page__header">Текущий список продуктов</h2>
        <p className="final-page__header">Сумма: {purchasesMocks.reduce((sum, item) => item.price + sum, 0)} ₽</p>
        <Purchases purchases={purchasesMocks} />
      </div>
      <h2 className="purchases-page__header">Скажите "далее", чтобы добавить весовые продукты</h2>
    </div>
  );
};

export default PurchasesPage;
