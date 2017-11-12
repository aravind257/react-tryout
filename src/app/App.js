import React, { Component } from "react";
import Cart from "./cart/components/Cart";
import Home from "./Home";
import About from "./About";
import Header from "./Header";

export class App extends Component {
    contact() {
        console.log("Called by child");
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                <Header title="React App">
                </Header>
                </div>
                <div className="row">
                    {this.props.children}
                </div>

            </div>
        )
    }
}