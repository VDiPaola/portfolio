import React from 'react';
import ReactDOM from 'react-dom/client';
import './StyleSheets/index.css';
import reportWebVitals from './reportWebVitals';

import Router from './Routes';


//redux
import { Provider } from 'react-redux';
import store from './State/Store';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from './State/Store';

const App = () => {
  
  return(
    <React.StrictMode>
      <Provider store={store} children={
        <PersistGate persistor={persistor}>
        <Router />
        </PersistGate>
      } />
    </React.StrictMode>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

reportWebVitals(null);
