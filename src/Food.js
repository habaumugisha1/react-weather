import React, { Component } from 'react'
import Foodform from './component/Foodform'
import Home from './component/sections/Home'

export default class Food extends Component {
    state={
        recipe:[]
    }
    getRecipe = async (e) =>{
        e.preventDefault();
        const recipeName = e.target.recipeName.value;
const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
// https://api.edamam.com/search?q=pizza&app_id=4e9f05eb&app_key=9b904d703fa0d46a88ce1ac63f29f498
  const url = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const food = await fetch(url)
  const res = await food.json()
  this.setState({
      recipe : res.hits
  })

        console.log(res.hits)
    };

   async componentDidMount(){
        // setTimeout( async() => {
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
// https://api.edamam.com/search?q=pizza&app_id=4e9f05eb&app_key=9b904d703fa0d46a88ce1ac63f29f498
  const url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const food = await fetch(url)
  const res = await food.json()
  
  this.setState({
      recipe : res.hits
  })
        console.log(res.hits)
        console.log(this.state.recipe + "this is for testing data.")
        // }, 1000);
    }

    render() {
        return (
            <div>
                <Foodform getRecipe={this.getRecipe} />
                <Home data={this.state.recipe} />    
            </div>
        )
    }
}
