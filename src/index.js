import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Data from './feture/user';
import createSagaMedleware from 'redux-saga'
import userSaga from './feture/saga';

const sa = createSagaMedleware();
const store = configureStore({
  reducer : {users : Data},
  middleware:[sa],
})

sa.run(userSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

