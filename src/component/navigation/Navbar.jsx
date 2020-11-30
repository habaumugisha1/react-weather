import React, { Component } from 'react';
import Header from './Header'
import Section from '../Section'
import './Navbar.css';
// import { Route, Switch, NavLink, Link } from 'react-router-dom'
class Navbar extends Component {
 render(){
     return(
         <div className="navs">
         <Header />
         < Section />
         <section>
         </section>
         </div>
     )
 }
}
export default Navbar;