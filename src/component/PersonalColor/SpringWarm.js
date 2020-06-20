import React, { Component } from 'react'
import './css/PersonalColor.scss'
import KakaoShare from '../KakaoShare'
import Meta from '../Meta'
import ReTry from '../ReTry';
import AdMove from '../AdMove';
import CoupangAds from '../CoupangAds';
import AdSense from 'react-adsense'

export default class SpringWarm extends Component {
    // componentDidMount() {
    //     AdMove()
    //   }
    render() {
        const metaData = {
            title: "퍼스널 컬러 진단하기!",
            description: "나의 퍼스널 컬러는 뭘까??",
            image: "https://mycolor.kr/images/personalColor/springMeta.png",
            canonical: "springWarm",
            canonical2: "springWarmMeta"
        }
        const coupangAds = {
            season: "봄 웜톤",
            url: "https://coupa.ng/bDxZEi",
            url2: "https://coupa.ng/bDCzdT"
        }
        return (

            <div className="pcMainDiv">
                <Meta data={metaData} />
                <img alt="WarmTitle" className="pcTitle" src="/images/personalColor/springTitle.png"></img>
                <div className="pcTopDiv">
                    <img alt="WarmMain" className="pcMainImg" src="/images/personalColor/springMain.png"></img>
                    <div className="mainRight">
                        <div className="squareGroup">
                            <div className="d-flex mb-2">
                                <span style={{ background: "rgb(255,233,196)" }}></span>
                                <span className="ml-2" style={{ background: "rgb(255,224,174)" }} ></span>
                            </div>
                            <div className="d-flex mb-4">
                                <span style={{ background: "rgb(253,215,153)" }}></span>
                                <span className="ml-2" style={{ background: "rgb(244,203,149)" }}></span>
                            </div>
                        </div>
                        <div className="pcTopText">
                            <p>#밝은</p>
                            <p>#생기넘치는</p>
                            <p>#발랄한</p>
                            <p>#부드러운</p>
                            <p>#귀여운</p>
                            <p>#로맨틱</p>
                            <p>#따뜻한</p>
                        </div>
                    </div>
                </div>
                {/* <AdSense.Google
                        client="ca-pub-9106671749645972"
                        slot="7753265380"
                        style={{ display: 'block', textAlign: "center", width : "100%", height : "100px"}}
                        format="horizontal"
                    /> */}
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(230,187,163)", display: "inline", color: "white" }}># 봄 웜톤의 특징</p>
                    <p className="mt-3">한국인의 많은 사람이 봄 웜톤의 피부색을 가지고 있습니다. 봄 웜톤인 사람은 사랑스럽고 귀여운 이미지로 어려 보이고 생동감이 있으며 활기가 넘칩니다. 로맨틱하면서 경쾌한 이미지가 많으며 사람들에게 인기가 많은 편입니다.  </p>
                <ins class="kakao_ad_area ads" style={{ display: "none" }} data-ad-unit="DAN-1h7rg7uqgmjw2" data-ad-width="250"
                    data-ad-height="250"></ins>
                    <p className="mt-3">봄 타입은 노란색을 지닌 따듯한 유형으로 선명(vivid) 하고 밝은(bright) 톤과 엷은(pale) 톤으로 화사하며 생동감과 에너지를 느끼게 합니다.</p>
                    <img src="/images/personalColor/springColor.png" alt="colorTable" style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}></img>
                    <p className="mt-3">봄 타입은 복숭앗빛 이 감도는 밝고 노란빛의 피부를 가지고 있습니다. 눈동자는 반짝반짝하고 생기가 있는 밝은 갈색빛을 띄고 있으며 찰랑찰랑 윤기가 나는 머릿결이 특징입니다. 피부는 밝으면서 매끄럽고 투명한 분들이 많고 피부가 얇아서 주근깨같이 잡티가 있는 경우도 있습니다.</p>
                </div>

                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(230,187,163)", display: "inline", color: "white" }}># 봄 웜톤 컬러 팔레트</p>
                    <p className="mt-3">봄 컬러들은 전체적으로 노란색을 가지고 있는 그룹으로 밝고 선명하고 파스텔톤으로 이루어져 있어 화사하면서 활기찬 느낌이 나는 탄력 있는 팔레트입니다. 따라서 새싹과 꽃이 피어나는 봄의 맑은 이미지를 생각하며 스타일링 하는 것을 추천합니다.</p>
                    {/* <AdSense.Google
                        client="ca-pub-9106671749645972"
                        slot="4086317268"
                        style={{ display: 'block', textAlign: "center" }}
                        format="auto"
                        responsive='true'
                    /> */}
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <ins class="kakao_ad_area" style={{ display: "none" }} data-ad-unit="DAN-t842nwjwbg34" data-ad-width="250"
                            data-ad-height="250"></ins></div>
                    <p className="mt-3">봄 타입에게 잘 어울리는 컬러는 아이보리, 베이지와 같은 밝은 톤과 알록달록 캔디처럼 선명한 컬러를 사용할 수 있는데, 대표적인 컬러는 복숭아 핑크, 오렌지 레드, 해바라기 노란색, 새싹의 초록, 팬지꽃의 퍼플 등 싱그러운 과일이나 햇살을 듬뿍 머금은 선명한 컬러입니다.</p>
                    <img alt="WarmSpectrum" className="specLip" src="/images/personalColor/springSpectrum.png"></img>
                </div>
                <div className="mt-4">
                    <p className="px-1 pt-1" style={{ background: "rgb(230,187,163)", display: "inline", color: "white" }}># 메이크업 / 스타일링 팁</p>
                    <p className="mt-3">[주얼리] 골드 / 브론즈 / 내츄럴진주</p>
                    <p>[블러셔] 코랄 / 오렌지 / 클리어피치 계열</p>
                    <p>[립스틱] 핑크베이지 / 코랄 / 누드베이지 / 오렌지 / 살몬핑크 / 선홍빛레드 계열</p>
                    <img alt="WarmLip" className="specLip" src="/images/personalColor/springLip.png"></img>
                </div>
                <div></div>
                <CoupangAds data={coupangAds}></CoupangAds>
                <ReTry></ReTry>
                <KakaoShare data={metaData}></KakaoShare>
                {/* <AdSense.Google
                    client="ca-pub-9106671749645972"
                    slot="8539007090"
                    style={{ display: 'block', textAlign: "center" }}
                    format="auto"
                    responsive='true'
                /> */}
            </div>
        )
    }
}
