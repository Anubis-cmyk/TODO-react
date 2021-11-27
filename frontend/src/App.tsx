import React,{FC} from 'react'
import logo from './logo.svg';
import './App.css';
import { TodoListInput } from './components/TodoListinput';
import {todo} from './types'


const todos:Array<todo> =[
  {title:"walk",active:'asdasd',state:true,endDate:'2020/2/2'},
  {title:"walk",active:'asdasd',state:false,endDate:'2020/2/2'},
  {title:"walk",active:'asdasd',state:true,endDate:'2020/2/2'},
]

const App:FC =()=> {
  return (
    <div className="App">
       <TodoListInput Todo={todos[0]}/>
       <TodoListInput Todo={todos[1]}/>
       <TodoListInput Todo={todos[2]}/>
    </div>
  );
}

export default App;
