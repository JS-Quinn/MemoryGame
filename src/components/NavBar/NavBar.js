import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li class="message">{props.message}</li>
            <li class="score">Score: <span>{props.currentScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default NavBar;