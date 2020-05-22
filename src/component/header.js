import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class header extends Component {
    render() {
        return (
            <div>
                <Link to="/"><h1>메뉴</h1></Link>
            </div>
        )
    }
}
