import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink
                exact={true}
                className="mr-3"
                activeClassName="is-active"
                to="/"
            >
                Dashboard
            </NavLink>
            <NavLink
                exact={true}
                className="mr-3"
                activeClassName="is-active"
                to="/create"
            >
                Create Expense
            </NavLink>
            <NavLink
                exact={true}
                className="mr-3"
                activeClassName="is-active"
                to="/help"
            >
                Help
            </NavLink>
        </nav>
    </header>
);

export default Header;
