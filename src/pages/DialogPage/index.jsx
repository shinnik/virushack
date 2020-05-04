import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './DialogPage.scss';

const DialogPage = () => {
  const history = useHistory();

  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'Enter') {
        history.push('/final');
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, []);

  return (
    <div className="dialog-page">
      <div>
        <h2 className="dialog-page__header">Добавьте весовые товары</h2>
        <div className="dialog-page__dialog">
          <iframe
            allow="microphone;"
            width="1000"
            height="600"
            src="https://console.dialogflow.com/api-client/demo/embedded/1a8bbf1c-6191-4838-881b-331b7b24829c"
          ></iframe>
        </div>
      </div>
      <h2 className="dialog-page__header">Скажите "далее", чтобы посмотреть Ваши покупки и перейти к оплате</h2>
    </div>
  );
};

export default DialogPage;
