import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
const [inputText , setInputText] = useState("");
const [todos , setTodos] = useState([]);
const [backup , setBackup] = useState([]);
const [filter , setFilter] = useState("all");



useEffect(()=>{

  switch (filter){
      case 'compeleted':
          setBackup(todos.filter((el) => el.compeleted === true));
          break;
        case 'uncompeleted':
          setBackup(todos.filter((el) => el.compeleted === false));
          break;
         default:
            setBackup(todos);
            break;
  }
saveToLocal();
  
},[filter, todos]);

useEffect(()=>{
  getLocal();
  },[]);
  
const getLocal = ()=>{
  if(localStorage.getItem('todos')){
    let list = JSON.parse(localStorage.getItem('todos'))
    setTodos(list);
  }
}
const saveToLocal = ()=>{
  if(todos.length > 0) localStorage.setItem('todos',JSON.stringify(todos));
}


  return (
    <div className="App">
      <header>
        <h1>Hanie's todo list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} 
      setInputText={setInputText} inputText={inputText}
      setFilter={setFilter}/>
      <TodoList todos={todos} setTodos={setTodos} backup={backup}/>
    </div>
  );
}

export default App;
