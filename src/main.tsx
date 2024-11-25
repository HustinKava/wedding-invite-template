import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalContextProvider from '@utils/GlobalContext';
import App from './App';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
