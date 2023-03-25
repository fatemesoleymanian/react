
function Form({setInputText , todos , setTodos , inputText ,setFilter}){
const inputTextHandler = (e) =>{

    setInputText(e.target.value)
}

const submitTodoHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos ,
            { text : inputText , compeleted : false , id : Math.random() *1000}
        ]);
        setInputText('');
}

const filterHandler = (e)=>{
    setFilter(e.target.value);
}

    return(
        <form>
        <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText}/>
        <button className="todo-button" type="submit" onClick={submitTodoHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={filterHandler}>
            <option value="all">All</option>
            <option value="compeleted">Completed</option>
            <option value="uncompeleted">Uncompleted</option>
          </select>
        </div>
      </form>
     
    );
}

export default Form;