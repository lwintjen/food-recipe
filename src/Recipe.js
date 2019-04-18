import React from "react";
import Style from "./recipe.module.css";
const Recipe = ({title,image,calories,ingredients,diet,healthLabels}) => {
    return (
        
        <div className={Style.recipe}>
            <h1>{title}</h1>
            <p>Ingredients</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories : {calories}</p>
            <p>Diet : {diet}</p>
            <p>Healthlabel</p>
            <ul>
                {healthLabels.map(healthLabel => (
                    <li>{healthLabel}</li>
                ))}
            </ul>
            <img src={image} alt="" className={Style.image}></img>
        </div>
    );
}
export default Recipe