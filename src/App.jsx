import "./reset.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";


export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/order" component={Order} />
            </Switch>
        </Router>
    );
}
