import React from 'react'
import './home.css'
const Home = props => {
  return (
    <div className="container">
        <div className="row">
            {props.data.map(food => (
            <div className="col-md-4 item" >
                <div className="recipe__box">
                    <img className="img-fluid" src={food.recipe.image} alt="name" />
                    <h5>{food.recipe.label}</h5>
                </div>
            </div>
            ))}
        </div>    
    </div>
  );
};

export default Home;