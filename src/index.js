import React from 'react';
import { render, hydrate } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
const rootElement = document.getElementById('root');

// if (rootElement.hasChildNodes()) {
//   hydrate(
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>,
//     rootElement
//   );
// } else{
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
