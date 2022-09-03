import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/global.css';

const $root = document.getElementById('root');
const root = ReactDOM.createRoot($root);

root.render(<App />);
