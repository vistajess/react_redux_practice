import React, { Component } from 'react';
import App from './components/App'

React.render(
  <App/>,
  document.getElementById('mount')
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

