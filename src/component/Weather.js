import React from 'react'
// import {BrowserRouter as Router} from 'react-router-dom'
import WeatherSection from './sections/WeatherSection'
// import './App.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './form.component';
// import Food from './Food'
// import Navbar from './component/navigation/Navbar'

const API_key = 'ef476b209998f6874e729c4400b0e08b'

class Weather extends React.Component {
  constructor(){
    super();
    this.state = {
      city:undefined,
      country:undefined,
      main: undefined,
      celcius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description:"",
      icon: undefined,
      error: false
    };
  }
  calCelsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
  getWeather = async (event) => {
    event.preventDefault()
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    if(city && country){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);

    const response = await api_call.json();
    console.log(response);
    this.setState({
      city: `${response.name}, ${response.sys.country}`,
      celcius:response.main.celcius,
      celsius:this.calCelsius(response.main.temp),
      temp_min:this.calCelsius(response.main.temp_min),
      temp_max:this.calCelsius(response.main.temp_max),
      description:response.weather[0].description,
      icon:response.weather[0].icon
    });
    } else{
      this.setState({error:true});
    }

  }

  render(){
    return (
    //   <Router>
        <div className="App">
          {/* <Navbar /> */}
          {/* <Food /> */}
          <Form loadweather={this.getWeather} error={this.state.error}/>
          < WeatherSection city={this.state.city} country={this.state.country} temp_celsius={this.state.celsius} temp_max={this.state.temp_max} temp_min={this.state.temp_min} description={this.state.description}
          icon={this.state.icon}
          />
        </div>
    // </Router>
  );
  }
}

export default Weather;
