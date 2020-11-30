import React from 'react';
import './form.style.css'
const Form = props => {
    return(
    <div className="App">
        
        <form onSubmit={props.getRecipe} className="foodForm">
            <input className="form__input" type="text" name="recipeName" />
            <button className="form__button">Search</button>
        </form>
    </div>

    )}
export default Form;