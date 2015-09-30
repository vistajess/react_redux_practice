import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../action';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

export default class App extends Component {
  //  Injected by connect() call;
  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
		return(
			<div>
        <AddTodo
          onAddClick={text => 
            dispatch(addTodo(text))
          }/>
          <TodoList
            todos={visibleTodos}
            onTodoClick={index =>
              dispatch(completeTodo(index))
            }/>
            <Footer
              filter={visibilityFilter}
              onFilterChange={nextFilter =>
                dispatch(setVisibilityFilter(nextFilter))
              }/>
      </div>
		);
	}
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};


function selectTodos(todos, filter) {
    switch(filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
    }
}
//Which props do we want to inject, given the global state?

// Note: use the https://github.com/faassen/reselect for better performance.

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos,state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

// Wrap the component to inject dispatch and state into it

export default connect(select)(App);