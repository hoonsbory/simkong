import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class header extends Component {
    render() {
        return (
            <div>
                <a href="https://mycolor.kr"><h1>피부진단</h1></a>
                <Link to="/springWarm">봄 웜톤</Link>
                <Link to="/summerCool">여름 쿨톤</Link>
                <Link to="/fallWarm">가을 웜톤</Link>
                <Link to="/winterCool">겨울 쿨톤</Link>
            </div>
        )
    }
}
