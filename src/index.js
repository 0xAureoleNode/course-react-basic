import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 在 New Root API 中，createRoot 创建一个 root，然后调用 render 方法完成渲染：
// create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
