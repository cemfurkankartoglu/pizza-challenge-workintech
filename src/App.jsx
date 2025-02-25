import "./reset.css";
import "./index.css"
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav"
import Home from "./components/Home";
import Order from "./components/Order";
import Success from "./components/Success"
import Options from "./components/Options"


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/order">
                    <Nav />
                    <Order />
                </Route>
                <Route path="/success">
                    <Success />
                </Route>
                <Route path="/options">
                    <Options />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
