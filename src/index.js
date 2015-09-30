import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import App from './components/App';
import todoApp from './reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('mount');

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);







// import { createStore } from 'redux';

// function counter(state = 0 , action) {
// 	switch(action.type) {
// 		case 'INCREMENT' :
// 			return state + 1;
// 		case 'DECREMENT' :
// 			return state - 1;
// 		default :
// 			return state;	
// 	}
// }

// 	let store = createStore(counter);

// 	store.subscribe(() => { 
// 		document.getElementById('count').innerHTML = store.getState();
// 		console.log(store.getState());
// 	});

// 	store.dispatch({ type: 'INCREMENT' });
// 	store.dispatch({ type: 'INCREMENT' });
// 	store.dispatch({ type: 'DECREMENT' });
// 	store.dispatch({ type: 'INCREMENT' });
// 	store.dispatch({ type: 'INCREMENT' });
// 	store.dispatch({ type: 'INCREMENT' });
// 	store.dispatch({ type: 'INCREMENT' });
// 	store.dispatch({ type: 'INCREMENT' });
// 	store.dispatch({ type: 'DECREMENT' });
// 	store.dispatch({ type: 'DECREMENT' });

