import React, { Component } from 'react';

import Stylesheet from './App.css';

import TodoList from '../components/TodoList/TodoList';
import NewTodo from '../components/NewTodo/NewTodo';
import Overlay from '../components/UI/Overlay/Overlay';
import Modal from '../components/UI/Modal/Modal';


class App extends Component {
  state = {
    tasks: [],
    showOverlay: false,
    modalMessage: ''
  }

  AddedTodoHandler = (e) => {
    console.log('[AddedTodoHandler] invoked')

    e.preventDefault()
    const input = e.target.elements.taskName
    const taskName = input.value.trim()
    if (taskName === '') {
      this.setState({
        showOverlay: true,
        modalMessage: 'No has proporcionado el nombre de la tarea que quieres guardar'
      })
      return;
    }

    const updateTasks = [...this.state.tasks]
    if (updateTasks.length > 0) {
      updateTasks.push({id: updateTasks.length + 1, name: taskName})
    } else {
      updateTasks.push({id: 1, name: taskName})
    }
    input.value = ''
    this.setState({tasks: updateTasks})
  }

  RemovedTodoHandler = (id) => {
    console.log('[RemovedTodoHandler] invoked')

    const updateTasks = [...this.state.tasks]
    const idTask = updateTasks.findIndex(v => v.id === id)

    if (window.confirm(`¿Deseas eliminar la tarea seleccionada?\n${updateTasks[idTask].name}`)) {
      updateTasks.splice(idTask, 1)
      this.setState({tasks: updateTasks})
    }

  }

  overlayClickedHandler = () => {
    this.setState({
      showOverlay: false,
      modalMessage: ''
    })
  }

  closedModalHandler = () => {
    this.setState({showOverlay: false})
  }


  render() {
    return (
      <div className={Stylesheet.App}>
        <Modal open={this.state.showOverlay} closed={this.closedModalHandler}>{this.state.modalMessage}</Modal>
        <Overlay show={this.state.showOverlay} clicked={this.overlayClickedHandler} />
        <TodoList taskList={this.state.tasks} clicked={this.RemovedTodoHandler} />
        <NewTodo submitted={this.AddedTodoHandler} />
      </div>
    );
  }
}

export default App;
