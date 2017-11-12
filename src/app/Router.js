import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Cart from "./cart/components/Cart";
//import ProductList from "./ProductList";
import { App } from "./App"

export default function Router() {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cart" component={Cart} />
                    {/* <Route path="/productlist" component={ProductList} /> */}
                    <Route path="/about" component={About} />
                    <Redirect path="*" to ="/"/>
                </Switch>
            </App>
        </BrowserRouter>

    )
}