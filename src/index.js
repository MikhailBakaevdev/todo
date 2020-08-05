import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer,{
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  activeNotes: null
})
let lastNotes = store.notes

store.subscribe(() => {
  const state = store.getState()
  if( lastNotes === state.notes ) {
    return 
  } 
  lastNotes = state.notes
  localStorage.setItem('notes', JSON.stringify(state.notes))
})






ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
