import React from "react";
import { Link } from "react-router-dom";

const GlobalNav: React.FC = () => {
    return (
        <ul>
            <li>
                <Link to="/">
                    <span>Top</span>
                </Link>
            </li>
            <li>
                <Link to="/todo">
                    <span className="nav-title">ToDo</span>
                </Link>
            </li>
        </ul>
    );
};

export default GlobalNav;
