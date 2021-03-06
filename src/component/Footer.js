import React from 'react'

const Footer = () => {
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
        <footer id="footer" style={footer}>
                <div id="footerLeft">
                    <img alt="마이퍼스널컬러 로고" style={{width : "8rem", marginBottom : ".5rem"}} src="/images/personalColor/footerImg.png" />
                    <p>mycolor.kr</p>
                </div>
                <div id="footerCenter"><a href="https://mycolor.kr/privacy" style={{color : "rgb(10, 59, 112)"}}>개인정보 처리방침</a></div>
                {/* <a href="https://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg" style={{color : "rgb(10, 59, 112)"}}>제작 도움 - 조코딩 유튜브</a> */}
                <div id="footerRight">Contact : 신재훈 - <a href="mailto:tonymkcv93@gmail.com">tonymkcv93@gmail.com</a></div>
            </footer>
    )
}

export default Footer
