import React, { Component } from 'react';
import TodoItems from './todoItems';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // add items to todoapp
  addItem(e){
   if(this.inputElement.value !== '') {
     let newItem = {
       text: this.inputElement.value,
       key: Date.now()
     };

     this.setState((prevState) => {
       return {
        items: prevState.items.concat(newItem) 
       }
       
     })
   }

   this.inputElement.value = '';
   //console.log(this.state.items);
   //to stop the browser from reloading when form is submitted
   e.preventDefault();
  }

  //delete items from todoapp
  deleteItem(key) {
    let filteredItem = this.state.items.filter((item) => {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItem
    })
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref= {(a) => this.inputElement = a} placeholder="Task" />
            <button type="submit"> Add Task </button>
          </form>
        </div>
        <TodoItems entries= {this.state.items} delete = {this.deleteItem} />
      </div>
    )
  }
}

export default TodoList