import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Cart, Grid } from "../style/styles";


function Searched(){
    let params = useParams();

    useEffect(()=>{
        getResults(params.search);
        
    },[params.search]);


    const [results , setResults] = useState([]);

    const getResults = async (query)=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`);
        const response = await api.json();
        setResults(response.results);
        console.log(response)
    }

    return(
        <div>
                <h3>Results for {params.search}</h3>
        <Grid>
            {
            results.map((item) => {
           return(
            <Cart key={item.id}> 
            <Link to={'/details/'+item.id}>
            <img alt={item.title} src={item.image} />
            <h4>{item.title }</h4>
            </Link>
            </Cart>
           )
        })}
        </Grid>
        </div>
    );
}

export default Searched;