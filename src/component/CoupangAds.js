import React from 'react'

export default function CoupangAds({ data }) {
    return (
        <div style={{width : "100%", textAlign : "center"}}>
            <p style={{fontSize : "1.3rem"}}>▼ {data.season} 추천제품 ▼</p>
                <iframe src={data.url} width="120" height="240" style={{marginRight : '10px'}} frameborder="0" scrolling="no"></iframe>
                <iframe src={data.url2} width="120" height="240" frameborder="0" scrolling="no"></iframe>
        </div>
    )
}
