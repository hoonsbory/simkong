import React from 'react';
import { render } from 'react-dom';
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
//

serviceWorker.unregister();
