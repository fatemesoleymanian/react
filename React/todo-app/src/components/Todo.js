import React from "react";

function Todo({ item , todos , setTodos}){

    const deleteHandler = () =>{
        setTodos(todos.filter((el)=> el.id !== item.id))
    };
    const compeleteHandler = ()=>{
    
        setTodos(todos.map((el)=> {
            if(el.id === item.id) return{
                ...el , compeleted : !el.compeleted
            }
            return el;
        }))
    };

    return(
        <div className="todo">
            <li className={`todo-item  ${item.compeleted ? 'completed' : ''}`}>
                {item.text}
            </li> 
             <button className="complete-btn" onClick={compeleteHandler}>
             <i className="fas fa-check"></i>
            </button>
         
           
            <button className="trash-btn" onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
            </button>
          
        </div>
    );
}

export default Todo;