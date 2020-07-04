import React from 'react'

const ReTry = () => {
    const retry = {
        background: "rgb(206,222,247)",
        borderRadius: "100px",
        color: "white",
        fontSize: "1.2rem",
        display: "inline",
        cursor: "pointer"
    }
    const main = {
        width: "100%",
        textAlign: "center",
        position: "relative",
        top: "27px"
    }
    return (
        <div style={main}>
            <p id="reTryP"> ※ 카메라의 특성상 실제 피부색을 100% 담을 수 없으므로 진단결과가 다소 부정확할 수 있습니다.</p>
            <div onClick={() => window.location.href = "https://mycolor.kr"} className="px-5 pt-2" style={retry}>
                다시 테스트하기

        </div>
        </div>
    )
}

export default ReTry
