import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './WelcomePage.scss';

const WelcomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'Enter') {
        history.push('/purchases');
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, []);

  return (
    <div className="welcome-page__container">
      <p className="welcome-page__header">Отсканируйте QR-код</p>
      <div className="welcome-page__icon" />
    </div>
  );
};

export default WelcomePage;
