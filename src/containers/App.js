import React, { Component } from 'react';

import Stylesheet from './App.css';

import TodoList from '../components/TodoList/TodoList';
import NewTodo from '../components/NewTodo/NewTodo';


class App extends Component {
  render() {
    return (
      <div className={Stylesheet.App}>
        <h2>Organizalo Ya!</h2>
        <TodoList />
        <NewTodo />
      </div>
    );
  }
}

export default App;
