import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
               <nav className="NabarItems">
                <div className="log">ami</div> 
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/weather">weather</Link></li>
                        <li><Link to="/todo">todo</Link></li>
                        <li><Link to="/signup">sign up</Link></li>
                        <li><Link to="/signin">login</Link></li>
                        <li className="close">X</li>
                    </ul>
                <div className="menu">menu</div>
                </nav> 
            </header>
        )
    }
}
