import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";
import * as serviceWorker from './serviceWorker';

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} showModule={store.showModule.bind(store)} addBusiness={store.addBusiness.bind(store)} makeImportant={store.makeImportant.bind(store)} makeDone={store.makeDone.bind(store)} removeBusiness={store.removeBusiness.bind(store)} changeFilter={store.changeFilter.bind(store)}/>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
