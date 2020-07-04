import React, { useEffect } from 'react'
import 'component/PersonalColor/css/PersonalColor.scss'
import KakaoShare from 'component/KakaoShare'
import Meta from 'component/Meta'
import ReTry from 'component/ReTry';
import CoupangAds from 'component/CoupangAds';
import queryString from 'query-string'



const FallWarm = ({ location }) => {
    const query = queryString.parse(location.search);
    useEffect(() => {
        if (Object.keys(query).length != 2) {
            document.getElementsByClassName("resultBar")[0].style.display = "none";
        }
    })
    const metaData = {
        title: "퍼스널 컬러 자가진단 테스트하기!",
        description: "인공지능을 통해 퍼스널컬러를 진단받아보세요!",
        image: "https://mycolor.kr/images/personalColor/fallMeta.png",
        canonical: "fallWarm",
        canonical2: "fallWarmMeta"
    }
    //쿠팡 광고
    const coupangAds = {
        season: "가을 웜톤",
        url: "https://coupa.ng/bDxZTH",
        url2: "https://coupa.ng/bDCzjb"
    }
    const span1 = {
        width: (query.spring < 10 ? 10 : query.spring >90 ? 90 : query.spring) + "%",
        background: "rgb(230,187,163)",
        borderTopRightRadius: "unset",
        borderBottomRightRadius: "unset"
    }
    const span2 = {
        width: (query.fall < 10 ? 10 :query.fall >90 ? 90 : query.fall) + "%",
        background: "rgb(226,186,139)",
        borderTopLeftRadius: "unset",
        borderBottomLeftRadius: "unset"
    }
    return (
        <section className="pcMainDiv">
            <Meta data={metaData} />
            <header>
                <img alt="당신은 가을 웜톤입니다" className="pcTitle" src="/images/personalColor/fallTitle.png"></img>
                <div className="pcTopDiv">
                    <img alt="가을 웜톤 이미지" className="pcMainImg" src="/images/personalColor/fallMain.png"></img>
                    <div className="mainRight">
                        <div className="squareGroup">
                            <div className="d-flex mb-2">
                                <span style={{ background: "rgb(238,219,179)" }}></span>
                                <span className="ml-2" style={{ background: "rgb(238,210,160)" }}></span>
                            </div>
                            <div className="d-flex mb-4">
                                <span style={{ background: "rgb(232,197,139)" }}></span>
                                <span className="ml-2" style={{ background: "rgb(223,180,112)" }}></span>
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
            </header>
            {/* <AdSense.Google
                        client="ca-pub-9106671749645972"
                        slot="7753265380"
                        style={{ display: 'block', textAlign: "center", width : "100%", height : "100px"}}
                        format="horizontal"
                    /> */}
            <article>
                <div className="resultBar">
                    <span style={{ color: "rgb(230,187,163)" }}>봄
                        <div>
                            <span className="barSpan" style={span1}>{query.spring}%</span>
                            <span className="barSpan" style={span2}>{query.fall}%</span>
                        </div>
                    </span>
                    <span style={{ color: "rgb(226,186,139)" }}>가을</span>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(226,186,139)", display: "inline", color: "white" }}># 가을 웜톤의 특징</p>
                    <p className="mt-3">가을 웜톤인 사람은 클래식하고 글램 한 느낌을 가집니다. 또한 포근하고 부드러우며 차분하고 원숙한 이미지를 지니고 있습니다. 상대방에게 친근함과 편안함을 느끼게 하는 이미지입니다.</p>
                    <ins className="kakao_ad_area ads" style={{ display: "none", position: "relative", left: "-10px" }} data-ad-unit="DAN-1h7rg7uqgmjw2" data-ad-width="250"
                        data-ad-height="250"></ins>
                    <p className="mt-3">가을 타입은 황색을 지닌 따듯한 유형으로 강한(strong) 톤과 깊은(deep) 톤, 중후한(dull) 톤으로 편안함과 고급스러운 이미지를 느끼게 합니다.</p>
                    <img src="/images/personalColor/fallColor.png" alt="가을 웜톤의 색상 특징" style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}></img>
                    <p className="mt-3">가을 타입은 누르스름한 피부 톤에 혈색이 있으며 매끈매끈하며 탄력이 있는 피부를 가지고 있습니다. 눈동자 색은 짙고 깊이감이 있어 차분하고 믿음직스럽고 그윽함이 특징입니다. 황갈색 피부, 혹은 짙은 갈색빛을 지닌 굵고 윤기 없고 볼륨 있는 머리카락을 가지고 있습니다.</p>
                </div>

                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(226,186,139)", display: "inline", color: "white" }}># 가을 웜톤 컬러 팔레트</p>
                    <p className="mt-3">가을 컬러들은 노란색보다 짙은 황색을 지니고 있는 색의 그룹으로 깊고 강하면서 고급스럽고 편안한 컬러들이 주를 이루며, 어른스럽고 차분한 이미지를 가지고 있는 팔레트입니다.</p>
                    {/* <AdSense.Google
                        client="ca-pub-9106671749645972"
                        slot="4086317268"
                        style={{ display: 'block', textAlign: "center" }}
                        format="auto"
                        responsive='true'
                    /> */}
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <ins className="kakao_ad_area" style={{ display: "none" }} data-ad-unit="DAN-t842nwjwbg34" data-ad-width="250"
                            data-ad-height="250"></ins></div>
                    <p className="mt-3">가을 타입에게 잘 어울리는 컬러는 아이보리, 베이지와 같은 밝은 톤과 골드와 브라운과 같은 진한 톤에서 어두운 톤까지 많은 영역의 컬러를 사용할 수 있습니다. 대표적인 컬러는 잘 익은 토마토, 연어 살색, 가을의 단풍, 가을의 황금벌판, 황토색 등 가을의 자연에서 흔히 볼 수 있는 컬러입니다. 가을의 컬러는 따듯함과 안정감, 편안한 이미지를 줍니다. </p>
                    <img alt="가을 웜톤이 어울리는 색상" className="specLip" src="/images/personalColor/fallSpectrum.png"></img>
                </div>
                <div className="mt-4">
                    <p className="px-1 pt-1" style={{ background: "rgb(226,186,139)", display: "inline", color: "white" }}># 메이크업 / 스타일링 팁</p>
                    <p className="mt-3">[주얼리] 골드 / 브론즈 / 내추럴진주</p>
                    <p>[블러셔] 인디핑크 / 테라코타 / 오렌지 계열</p>
                    <p>[립스틱] MLBB / 말린장미 / 토마토 / 오렌지레드 / 브라운레드 계열</p>
                    <img alt="가을 웜톤이 어울리는 립, 틴트색" className="specLip" src="/images/personalColor/fallLip.png"></img>
                </div>
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

            </article>
        </section>
    )
}

export default FallWarm

