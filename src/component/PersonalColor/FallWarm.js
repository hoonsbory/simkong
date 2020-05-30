import React, { Component } from 'react'
import './css/PersonalColor.scss'
import KakaoShare from '../KakaoShare'
import Meta from '../Meta'


export default class FallWarm extends Component {
    render() {
        const metaData = {
            title: "가을 웜톤",
            description : "가을웜톤 페이지입니다",
            image : "/images/personalColor/fallMeta.png",
            canonical : "fallWarm",
            canonical2 : "fallWarmMeta"
        }
        return (

            <div className="pcMainDiv">
                <Meta data={metaData}/>
                <KakaoShare  data={metaData}></KakaoShare>
                <img alt="WarmTitle" className="pcTitle" src="/images/personalColor/fallTitle.png"></img>
                <div className="pcTopDiv">
                    <img alt="WarmMain" className="pcMainImg" src="/images/personalColor/fallMain.png"></img>
                    <div className="mainRight">
                        <div className="squareGroup">
                            <div className="d-flex mb-2">
                                <span style={{background : "rgb(238,219,179)"}}></span>
                                <span className="ml-2" style={{background : "rgb(238,210,160)"}}></span>
                            </div>
                            <div className="d-flex mb-4">
                                <span style={{background : "rgb(232,197,139)"}}></span>
                                <span className="ml-2" style={{background : "rgb(223,180,112)"}}></span>
                            </div>
                        </div>
                        <div className="pcTopText">
                        <p>#깊은</p>
                        <p>#내추럴</p>
                        <p>#클래식</p>
                        <p>#섹시한</p>
                        <p>#그윽한</p>
                        <p>#편안한</p>
                        <p>#차분한</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(226,186,139)", display: "inline", color : "white" }}># 가을 웜톤의 특징</p>
                    <p className="mt-3">가을 웜톤인 사람은 클래식하고 글램한 느낌을 가집니다. 또한 포근하고 부드러우며 차분하고 원숙한 이미지를 지니고 있습니다. 상대방에게 친근함가 편안함을 느끼게하는 이미지 입니다.</p>
                    <p className="mt-3">가을타입은 황색을 지닌 따드산 유형으로 강한(strong)톤과 깊은(deep)톤, 중후한(dull)톤으로 편안함과 고급스러운 이미지를 느끼게 합니다.</p>
                    <p className="mt-3">가을타입은 누르스름한 피부톤에 혈색이 있으며 매끈매끈하며 탄력이 있는 피부를 가지고 있습니다. 눈동자색은 짙고 깊이감이 있어 차분하고 믿음직스럽고 그윽함이 특징입니다. 황갈색 피부, 혹은 짙은 갈색빛을 지닌 굵고 윤기없고 볼륨있는 머리카락을 가지고 있습니다. </p>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(226,186,139)", display: "inline", color : "white" }}># 가을 웜톤 컬러파레트</p>
                    <p className="mt-3">가을 컬러들은 노란색보다 짙은 황색을 지니고 있는 색의 그룹으로 깊고 강하면서 고급스럽고 편안한 컬러들이 주를 이루며, 어른스럽고 차분한 이미지를 가지고 있는 파레트 입니다.</p>
                    <p className="mt-3">가을타입에게 잘어울리는 컬러는 아이보리, 베이지와 같은  밝은톤과 골드와 브라운과 같은 진한톤에서 어두운 톤까지 많은 영역의 컬러를 사용할 수 있습니다.  대표적인 컬러는 잘익은 토마토, 연어살색, 가을의 단풍, 가을의 황금벌판, 황토색 등 가을의 자연에서 흔히 볼 수 있는 컬러입니다. 가을의 컬러는 따듯함과 안정감, 편안한  이미지를 줍니다. </p>
                    <img alt="WarmSpectrum" className="specLip" src="/images/personalColor/fallSpectrum.png"></img>
                </div>
                <div className="mt-4">
                    <p className="px-1 pt-1" style={{ background: "rgb(226,186,139)", display: "inline", color : "white" }}># 메이크업 / 스타일링 팁</p>
                    <p className="mt-3">[주얼리] 골드 / 브론즈 / 내추럴진주</p>
                    <p>[블러셔] 인디핑크 / 테라코타 / 오렌지 계열</p>
                    <p>[립스틱] MLBB / 말린장미 / 토마토 / 오렌지레드 / 브라운레드 계열</p>
                    <img alt="WarmLip" className="specLip" src="/images/personalColor/fallLip.png"></img>
                </div>
                <KakaoShare  data={metaData}></KakaoShare>
            </div>
        )
    }
}
