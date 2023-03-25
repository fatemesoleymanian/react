import { useEffect, useState } from "react";
import {Wrapper , Card , Gradiant} from '../style/styles'
import { Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Veggie(){
    const [veggie , setVeggie] = useState([]);
    useEffect(() => {
        veggies();

    },[]) 
    const veggies = async () =>{
        const check = localStorage.getItem('veggie');
        if(check){
            return setVeggie(JSON.parse(check));
        }
        else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
        const response = await api.json();
        setVeggie(response.recipes);
        localStorage.setItem('veggie',JSON.stringify(response.recipes));
        }
    }
    return(
        <div>
                <Wrapper >
                    <h3>Vegetarain Picks</h3>
                    <Splide options={{perPage:3,drag:'free', arrows: false ,
                     pagination:false, gap:'2rem'}}>
                    {veggie.map((recipe) =>{
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

export default Veggie;