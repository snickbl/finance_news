import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import {setupStore} from "./toolkitRedux/index";
import { GetData } from './Components/GetData';


let store = setupStore()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <GetData/>
      <App/>
        {/* <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/news/:id' element={<News/>}/>
        </Routes> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
