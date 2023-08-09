import React, { useState } from 'react';
import '../src/App.css'
import Input from './components/Input';
import { Todos } from './types/Types';
import Message from './components/Message';

const App:React.FC = () => {

  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todos[]>([])

  const addMessage = () => {
    if(todo) setTodos([...todos,{message:todo,id:todos.length+1}])
    setTodo('');
  }

  const deleteMessage = (id:number) => {
    setTodos(todos.filter(todo=>todo.id !== id ))
  }



  // const [todo,setTodo] = useState<string[]>([])
  // const [todo,setTodo] = useState<number[]>([])

  // let age:number = 26
  // let name:string = "Ismail"
  // let trial: string | boolean = "Hotini"

  // interface Object {
  //   name:string,
  //   age:number,
  //   done?:boolean
  // }

  // interface ObjectTwo extends Object{
  //   accept?:boolean
  // }

  // let obj:Object={
  //   name:"Ismail",
  //   age:27,
  //   done:true
  // }

  // let objTwo = {
  //   name:"Ismail",
  //   age:27,
  //   done:true,
  //   home:"Abilov"
  // }



  return (
    <div className="App">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo}/>
      <Message deleteMessage={deleteMessage} todos={todos}/>
    </div>
  );
}

export default App;
