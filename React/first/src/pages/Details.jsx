import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {DetailWrapper , Button , Info} from '../style/styles'

function Details(){
    let params = useParams();

    useEffect(()=>{
        getRecipe(params.item);
        
    },[params.item]);


    const [recipe , setRecipre] = useState({});
    const [activeTab , setActiveTab] = useState('instructions');


    const getRecipe = async (item)=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/${item}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const response = await api.json();
        setRecipre(response);
        console.log(response)
    }

    return(
        <DetailWrapper>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
            </div>
            <Info >
                <Button className={activeTab === 'instructions' ? 'active' : ''}
                onClick={()=>{setActiveTab('instructions')}}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''}
                onClick={()=>{setActiveTab('ingredients')}}>Ingredients</Button>

                {activeTab === 'instructions' && (
                    <div>
                    <p dangerouslySetInnerHTML={{ __html : recipe.summary}}></p>
                    <p dangerouslySetInnerHTML={{ __html : recipe.instructions }}></p>
                </div>
                )}
                  {activeTab === 'ingredients' && (
                     <ul>    
                     { recipe.extendedIngredients.map((ingredient)=>(
                         <li key={ingredient.id}>{ingredient.original}</li>
                     )) }
                 </ul>
                )}
                
              
            </Info>

        </DetailWrapper>
    );
}

export default Details;