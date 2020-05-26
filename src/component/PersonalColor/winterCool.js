import React, { Component } from 'react'
import './css/PersonalColor.scss'
import KakaoShare from '../KakaoShare'
import Meta from '../Meta'


export default class WinterCool extends Component {
    render() {
        const metaData = {
            title: "겨울 쿨톤",
            description : "겨울 쿨톤 페이지입니다",
            image : "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
            canonical : "winterCool",
            canonical2 : "winterCoolMeta",
            addUrl : "personalColor"
        }
        return (

            <div className="pcMainDiv">
                <Meta data={metaData}/>
                <KakaoShare  data={metaData}></KakaoShare>
                <img alt="wormTitle" className="w-100 h-10" src="/images/personalColor/winterTitle.png"></img>
                <div>
                    <img alt="wormMain" className="float-left w-50" src="/images/personalColor/winterMain.png"></img>
                    <div className="mainRight">
                        <div className="squareGroup">
                            <div className="d-flex mb-2">
                                <span></span>
                                <span className="ml-2" ></span>
                            </div>
                            <div className="d-flex mb-4">
                                <span></span>
                                <span className="ml-2"></span>
                            </div>
                        </div>
                        <p>#도도한</p>
                        <p>#차가운</p>
                        <p>#카리스마</p>
                        <p>#섹시한</p>
                        <p>#개성있는</p>
                        <p>#시크한</p>
                        <p>#화려한</p>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "yellow", display: "inline" }}># 겨울 쿨톤의 특징</p>
                    <p className="mt-3">겨울 쿨톤인 사람은 차갑고 강렬하며 이지적인 느낌을 지니고 있으며 깔끔하고 세련된 이미지를 지니는 사람이 많습니다. 전형적인 모던한 스타일로 선명하고 액티브한 이미지를 지니고 있어 존재감이 있으며 도시적인 감각을 지닌 유형입니다. </p>
                    <p className="mt-3">겨울타입은 파랑과 흰색, 검정을 지닌 차가운 유형으로 선명(vivid)하고 엷은(pale)톤, 어두운(dark)톤의 모던하며 도시적인 강렬함을 느끼게 합니다.</p>
                    <p className="mt-3">겨울타입은 핏기가 없어 보일 정도의 창백하고 투명한 피부톤을 가집니다. 눈동자는 푸른빛, 갈색빛으로 강렬하고 개성있으며 카리스마가 있다. 푸른빛이 감도는 갈색 머리, 혹은 아주 까만 머리를 가지고 있습니다.</p>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "yellow", display: "inline" }}># 겨울 쿨톤 컬러파레트</p>
                    <p className="mt-3">겨울 컬러들은 파란색, 흰색, 검정을 내포하고 있는 차갑고 강렬한 컬러들의 그룹입니다. 선명하고 강하거나, 혹은 아주 여린 아이시한 컬러들이 이 그룹에 속합니다. 모던하고 도회적인 이미지를 가지고 있는 파레트 입니다.</p>
                    <p className="mt-3">겨울타입에게 잘 어울리는 컬러는 화이트, 블랙과 같은 모노톤과 시리도록 차갑고 선명한 색과 아이스 컬러를 사용할 수 있는데, 대표적인 컬러는 아이스블루, 아이스핑크, 쇼킹핑크, 와인레드, 레몬옐로우, 크리스마스트리 그린, 사파이어 등 인공적이면서 얼음처럼 차갑고 강한 컬러들입니다. 겨울의 컬러는 차가움과 모던함, 카리스마 있는 이미지를 줍니다.</p>
                    <img alt="wormSpectrum" className="mt-3 w-100" src="/images/personalColor/winterSpectrum.png"></img>
                </div>
                <div className="mt-4">
                    <p className="px-1 pt-1" style={{ background: "yellow", display: "inline" }}># 메이크업 / 스타일링 팁</p>
                    <p className="mt-3">[주얼리] 실버 / 화이트골드 / 다이아몬드 / 백진주</p>
                    <p>[블러셔] 푸른빛이 강한 핑크 계열</p>
                    <p>[립스틱] 버건디 / 퍼플 / 딥로즈 / 플럼 / 체리 계열</p>
                    <img alt="wormLip" className="mt-3 w-100" src="/images/personalColor/winterLip.png"></img>
                </div>
                
            </div>
        )
    }
}
