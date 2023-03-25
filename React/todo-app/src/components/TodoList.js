
import Todo from "./Todo";

function TodoList ({todos , setTodos ,backup}){
    
    return(
        <div className="todo-container">
      <ul className="todo-list">
        {
        backup.map((todo)=>{
            return(
                <Todo key={todo.id} item={todo} todos={todos} setTodos={setTodos}/>
            )
        })
      }
    
      </ul>
    </div>
    )
};

export default TodoList;