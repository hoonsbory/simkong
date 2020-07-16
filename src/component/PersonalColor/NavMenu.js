import React from 'react'
const NavMenu = () => {
    return (
        <div>
            <ul id="navBar">
                <a href="/springWarm/" style={{background : "rgb(230,187,163)"}}>봄 웜톤</a>
                <a href="/fallWarm/" style={{background : "rgb(226,186,139)"}}>가을 웜톤</a>
                <a href="/summerCool/" style={{background : "rgb(168,189,247)"}}>여름 웜톤</a>
                <a href="/winterCool/" style={{background : "rgb(168,233,239)"}}>겨울 웜톤</a>
            </ul>
        </div>
    )
}

export default NavMenu
