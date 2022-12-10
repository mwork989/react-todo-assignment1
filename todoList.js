import React, { Component } from 'react';
import TodoItemComponent from './todoItem';
import './index.css';

export default class TodoListComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      title: 'Todo List App',
      newTodo: '',
      todos: []
    };

    this.onChange = this.onChange.bind(this);
    this.checkboxHandle = this.checkboxHandle.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  onChange(e) {
    const todo = e.target.value;
    this.setState({
      newTodo: todo
    });
  }

  addNewTodo(e) {
    e.preventDefault();
    const newTodo = {
      text: this.state.newTodo,
      isComplete: false
    };
    const updatedTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: updatedTodos,
      newTodo: ''
    });

  }

  checkboxHandle(todo_index) {
    const updatedTodos = this.state.todos.map((todo, index) => {
      if (index === todo_index) {
        return {
          ...todo,
          isComplete: !todo.isComplete
        };
      }

      return todo;
    });
    this.setState(prevState => ({
      todos: updatedTodos
    }));
  }

  renderTodos() {
    return this.state.todos.map((todo, index) => (
      <TodoItemComponent
      key={index}
      index={index}
      text={todo.text}
      checked={todo.isComplete}
      handleCheckboxClick={this.checkboxHandle}/>
    )).reverse();
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
          <input
      type="text"
      placeholder="Enter a todo"
      value={this.state.newTodo}
      onChange={this.onChange}/>
         <button onClick={this.addNewTodo}> Add New Task</button>
        {this.renderTodos()}
      </div>
      );
  }
}

