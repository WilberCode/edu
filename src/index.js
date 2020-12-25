import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import App from './components/App'; 
import { getAllPosts } from './redux/store/actionCreators';
import store from './redux/store/store';
import './styles/styles.scss'   

store.dispatch(getAllPosts())

ReactDOM.render(
  <React.StrictMode>
      <Provider store = {store} >
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 
