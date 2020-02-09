import React,{ Component } from 'react';
import FlipMove from 'react-flip-move';


class TodoItems extends Component{
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this);
  }
 delete(key){
   this.props.delete(key)
 }
 render(){
  var todoEntries = this.props.entries;
 var listItems = todoEntries.map((item) =>
  {return <li key={item.key} onClick = {() => this.delete(item.key)}>{item.text}</li>});

   return(
     <ul className='theList'>
       <FlipMove>
         {listItems}
      </FlipMove>
     </ul>
   )
 }
}

export default TodoItems;