import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const footer = {
            background: "aliceblue",
            width : "100%",
            display : "inline-block",
            textAlign : "center",
            paddingTop : "2rem",
            paddingBottom : "2rem",
            fontSize : "12px"
        }
        return (
            <div id="footer" style={footer}>
                <div id="footerLeft">
                    <img style={{width : "8rem", marginBottom : ".5rem"}} src="/images/personalColor/footerImg.png" />
                    <p>mycolor.kr</p>
                </div>
                <div>제작 도움 - <a href="https://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg" style={{color : "rgb(10, 59, 112)"}}>Jocoding</a></div>
                <div id="footerCenter"><a href="https://mycolor.kr/privacy" style={{color : "rgb(10, 59, 112)"}}>개인정보 처리방침</a></div>
                <div id="footerRight">Contact : tonymkcv93@gmail.com</div>
            </div>
        )
    }
}
