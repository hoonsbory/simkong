import React from 'react'
import { Link } from 'react-router-dom'
const NavMenu = () => {
    return (
        <div>
            <ul id="navBar">
                <Link to="/springWarm/" style={{background : "rgb(230,187,163)"}}>봄 웜톤</Link>
                <Link to="/fallWarm/" style={{background : "rgb(226,186,139)"}}>가을 웜톤</Link>
                <Link to="/summerCool/" style={{background : "rgb(168,189,247)"}}>여름 웜톤</Link>
                <Link to="/winterCool/" style={{background : "rgb(168,233,239)"}}>겨울 웜톤</Link>
            </ul>
        </div>
    )
}

export default NavMenu
