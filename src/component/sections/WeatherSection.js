import React from 'react'
// import './form.style.css'
import '../form.style.css'
const Weather = (props) => {
    return(
        <div className="container">
            <div className="cards pt-4">
            <h1>{props.city}</h1>
            {icons(props.icon)}
            {props.temp_celsius?(<h1 className="py2">{props.temp_celsius}&deg;</h1>):null}
            
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-4">{props.description}</h4>
            </div>
        </div>
    );
};
function icons(icon){
    if(icon){
        return(
            <h5 className="py-4">
        <img className="img-fluid" src={`https://openweathermap.org/img/w/${icon}.png`} alt="icon" />
           {/* <i className={`${this.props.weatherIcon}`}></i> */}
        </h5>
        )
    }
}
function minmaxTemp(min, max){
    if(min && max) {
        return(
            <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}
export default Weather