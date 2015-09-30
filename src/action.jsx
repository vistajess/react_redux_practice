export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};


//Actions are payloads of information that send data from your application to your store. 
//They are the only source of information for the store. 
//You send them to the store using store.dispatch().

//  These are the action creators
// to make it easier to test , then initiate a dispatch

// pass the result to the `dispatch()` function:
// dispatch(addTodo(text));
export function addTodo(text) {
  return {
    type: ADD_TODO, 
    text
  };
}

export function completeTodo(index) {
  return { 
    type: COMPLETE_TODO,
    index
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}