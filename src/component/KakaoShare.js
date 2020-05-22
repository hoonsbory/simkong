import React, { Component } from 'react'


export default class KakaoShare extends Component {
    componentDidMount(){
        // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
        window.Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: '봄 웜톤 컬러',
                description: '#퍼스널컬러 #봄웜톤 #웜톤',
                imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                link: {
                    mobileWebUrl: 'http://jaehoon-dayoff.ml.s3-website.ap-northeast-2.amazonaws.com/personalColor',
                    webUrl: 'http://jaehoon-dayoff.ml.s3-website.ap-northeast-2.amazonaws.com/personalColor'
                }
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845
            },
            buttons: [
                {
                    title: '테스트 하러가기',
                    link: {
                        mobileWebUrl: 'http://jaehoon-dayoff.ml.s3-website.ap-northeast-2.amazonaws.com/personalColor',
                        webUrl: 'http://jaehoon-dayoff.ml.s3-website.ap-northeast-2.amazonaws.com/personalColor'
                    }
                }
            ]
        });
    }
    render() {
        return (
            <div>
                <span id="kakao-link-btn" >
                    <img alt="kakaoShare" src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
                </span>
                
            </div>
        )
    }
}
