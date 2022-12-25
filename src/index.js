//필수 리액트 구동 모듈
import React from 'react';
import ReactDOM from 'react-dom/client';

//초기 화면 구성 사용자 코드
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
