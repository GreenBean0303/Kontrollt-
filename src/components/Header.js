import logo from '../assets/logo.jpg'
import React from "react"
import "../index.css"
import Button from "./UI/Button"

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly onClick={() => console.log("Header-button")}>Cart</Button>
            </nav>
        </header>
    )
}

export default Header;