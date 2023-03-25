import { useEffect, useState } from "react";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Wrapper , Card , Gradiant} from '../style/styles'
import { Link } from "react-router-dom";

function Popular(){

    const [popular , setPopular] = useState([]);
    useEffect(() => {
        populars();

    },[]) 
    const populars = async () =>{
        const check = localStorage.getItem('popular');
        if(check){
            return setPopular(JSON.parse(check));
        }
        else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const response = await api.json();
        setPopular(response.recipes);
        localStorage.setItem('popular',JSON.stringify(response.recipes));
        }
    }
    return(
        <div>
                <Wrapper >
                    <h3>Popular Picks</h3>
                    <Splide options={{perPage:4,drag:'free', arrows: false ,
                     pagination:false, gap:'2rem'}}>
                    {popular.map((recipe) =>{
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card >
                                <Link to={'/details/'+recipe.id}>
                                <p>{recipe.title}</p>
                                <img alt={recipe.title} src={recipe.image} />
                                <Gradiant />
                                </Link>
                            </Card>
                            </SplideSlide> 
                        );
                    })}
                    </Splide>
                </Wrapper>
        </div>
    );
}


export default Popular;