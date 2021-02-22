import React, {FC} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import "./app.scss";

// Stub data for a menu
const menuItems = [
    {
        id: 1,
        url: "/",
        text: "Home"
    },
    {
        id: "2",
        url: "/hello",
        text: "Hello"
    }
];

const App: FC = () => (
    <Router>
        <nav className="nav">
            <ul className="nav__menu">
                {menuItems.map(({id, url, text}) => (
                    <li key={id} className="nav__item">
                        <NavLink
                            to={url}
                            exact
                            className="nav__link"
                            activeClassName="nav__link--active"
                        >
                            {text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <Switch>
            <Route path="/hello">
                <HelloWorld />
            </Route>
            <Route path="/">Home</Route>
        </Switch>
    </Router>
);

export default App;
