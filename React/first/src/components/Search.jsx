import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FormStyle } from "../style/styles";

function Search (){

    const [input , setInput] = useState('');
    const navigate = useNavigate(); 

    const submitHandler = (e)=>{
        e.preventDefault();
        navigate(`/results/${input}`);
    }
    return(
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input type="text" onChange={(e) => {
                setInput(e.target.value)
            }}  value={input}/>
        </FormStyle>
    );
}

export default Search;