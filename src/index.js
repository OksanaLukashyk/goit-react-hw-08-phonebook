import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       {/* <BrowserRouter basename="/goit-react-hw-08-phonebook"> */}
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <App />
//         </PersistGate>
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
