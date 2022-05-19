import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import foods from './foods'
import { choice, remove } from './helper'


console.log('all items', foods);
const random_food = choice(foods);
console.log("Heres your random fruit", random_food);
remove(foods, random_food);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
