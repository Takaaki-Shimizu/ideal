import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import GlobalNav from "./components/GlobalNav";
import ToDo from "./components/todo/ToDo";
import Top from "./components/Top";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalNav />
            <Switch>
                <Route exact path="/">
                    <Top />
                </Route>
                <Route exact path="/todo">
                    <ToDo />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
