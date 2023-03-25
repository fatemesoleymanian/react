// import { motion } from "framer-motion";
import { Link , useParams } from "react-router-dom";
import { useState  , useEffect} from "react";
import { Cart } from "../style/styles";
import { motion } from "framer-motion";
import styled from "styled-components";

function Cuisine(){
    const params = useParams();

    useEffect (() => {
        getCuisine(params.type);
    }, [params.type]);

    const [cuisine , setCuisine] = useState([]);
    
    const getCuisine = async (name) => {

        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const response = await data.json();
        setCuisine(response.results);
        
    }
        return(
            <div>
                <h3>{params.type}</h3>
        <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity:0 }}
        exit={{ opacity:0 }}
        transition={{ duration: 0.5 }}
        >
            {
            cuisine.map((item) => {
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
const Grid = styled(motion.div)`
display: grid;
  grid-template-columns: repeat(auto-fit ,minmax(20rem , 1fr));
  grid-gap: 3rem;
`;

export default Cuisine;