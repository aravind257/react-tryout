import React, { Component } from "react";
import { NavLink}  from "react-router-dom";


export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">{this.props.title}</a>
                </div>
                    
                <NavLink to="/" exact activeClassName ="error" className="button"> Home </NavLink>

                <NavLink to="/cart"activeClassName ="error"   className="button"> Cart </NavLink>

                {/* <NavLink to="/productlist" activeClassName ="error"  className="button"> Products </NavLink> */}

                <NavLink to="/about" activeClassName ="error"  className="button"> About </NavLink>
                
                </div>
            </nav>
        )
    }
}