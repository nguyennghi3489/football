import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store.js'
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-snapshot';
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
