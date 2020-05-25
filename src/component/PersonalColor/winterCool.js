import React, { Component } from 'react'
import './css/PersonalColor.scss'
import KakaoShare from '../KakaoShare'
import Meta from '../Meta'
import queryString from 'query-string';


export default class WinterCool extends Component {
    componentDidMount(){
        var query = queryString.parse(this.props.location.search)
        if(query.redirect==="true"){
            window.location.href = "http://jaehoon-dayoff.ml.s3-website.ap-northeast-2.amazonaws.com/personalColor"
        }
        console.log(query.redirect);
    }
    render() {
        const metaData = {
            title: "봄 웜톤",
            description : "봄웜톤 페이지입니다",
            image : "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
            canonical : "springWorm",
            canonical2 : "springWorm?redirect=true",
            addUrl : "personalColor"
        }
        return (

            <div id="pcMainDiv">
                <Meta data={metaData}/>
                <KakaoShare  data={metaData}></KakaoShare>
                <img alt="wormTitle" className="w-100 h-10" src="/images/wormTitle.png"></img>
                <div>
                    <img alt="wormMain" className="float-left w-50" src="/images/wormMain.png"></img>
                    <div id="mainRight">
                        <div id="squareGroup">
                            <div className="d-flex mb-2">
                                <span></span>
                                <span className="ml-2" ></span>
                            </div>
                            <div className="d-flex mb-4">
                                <span></span>
                                <span className="ml-2"></span>
                            </div>
                        </div>
                        <p>#밝은</p>
                        <p>#생기넘치는</p>
                        <p>#발랄한</p>
                        <p>#부드러운</p>
                        <p>#귀여운</p>
                        <p>#로맨틱</p>
                        <p>#따뜻한</p>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "yellow", display: "inline" }}># 봄 웜톤의 특징</p>
                    <p className="mt-3">한국인의 많은 사람이 봄 웜톤의 피부색을 가지고 있습니다. 봄타입은 사랑스럽고 귀여운 이미지로 어려보이고 생동감이 있으며 활기가 넘칩니다. 로맨틱하면서 경쾌한 이미지가 많으며 사람들에게 인기가 많은 편입니다.</p>
                    <p className="mt-3">봄타입은 노란색을 지닌 따뜻한 유형으로 선명(vivid)하고 밝은(bright)톤과 옅은(pale)톤으로 화사하며 생동감과 에너지를 느끼게 합니다.</p>
                    <p className="mt-3">봄타입은 복숭아빛이 감도는 밝고 노란 빛의 피부를 가지고 있습니다. 눈동자는 반짝반짝 거리고 생기가 있는 밝은 갈색 빛을 띄고 있으면 찰랑찰랑 윤기가 나는 머릿결이 특징입니다. 피부는 밝으면서 매끄럽고 투명한 분들이 많고 피부가 얇아서 주근깨같이 잡티가 있는 경우도 있습니다.</p>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "yellow", display: "inline" }}># 봄 웜톤 컬러파레트</p>
                    <p className="mt-3">봄 컬러들은 전체적으로 노란색을 가지고 있는 그룹으로 밝고 선명하고 파스텔톤으로 이루어져있어 화사하면서 활기찬 느낌이 나는 탄력있는 파레트이다. 따라서 새싹과 꽃이 피어나는 봄의 맑은 이미지를 생각하며 스타일링 하는 것을 추천합니다.</p>
                    <p className="mt-3">봄타입에게 잘어울리는 컬러는 아이보리, 베이지와 같은 밝은톤과 알록달록 캔디처럼 선명한 컬러를 사용할 수 있는데, 대표적인 컬러는 복숭아 핑크, 오렌지 레드, 해바라기 노란색, 새싹의 초록, 팬지꽃의 퍼플 등 싱그러운 과일이나 햇살을 듬뿍 머금은 선명한 컬러입니다.</p>
                    <img alt="wormSpectrum" className="mt-3 w-100" src="/images/wormSpectrum.png"></img>
                </div>
                <div className="mt-4">
                    <p className="px-1 pt-1" style={{ background: "yellow", display: "inline" }}># 메이크업 / 스타일링 팁</p>
                    <p className="mt-3">[주얼리] 골드 / 브론즈 / 내츄럴진주</p>
                    <p>[블러셔] 코랄 / 오렌지 / 클리어피치 계열</p>
                    <p>[립스틱] 핑크베이지 / 코랄 / 누드베이지 / 오렌지 / 누드핑크 / 선홍빛레드 계열</p>
                    <img alt="wormLip" className="mt-3 w-100" src="/images/wormLip.png"></img>
                </div>
                
            </div>
        )
    }
}
