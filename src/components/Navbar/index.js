import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav class="navbar navbar-light bg-light">
            <ul class="nav">
                <a class="navbar-brand" href="/">
                    <img src="https://vignette.wikia.nocookie.net/friends/images/9/94/FriendsLogo.png/revision/latest/scale-to-width-down/256?cb=20180501094924" alt="logo"></img>
                </a>
            </ul>

            <ul class="nav justify-content-center">
                <li class="nav-item">
                   Click an image to begin!
                </li>
            </ul>

            <ul class="nav justify-content-end">
                <li class="nav-item">
                    Score: {props.score} | Top Score:
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
