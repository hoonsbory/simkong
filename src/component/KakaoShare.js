import React, { Component } from 'react'


export default class KakaoShare extends Component {
    state = {
        mainUrl: "http://jaehoon-dayoff.ml.s3-website.ap-northeast-2.amazonaws.com/"
    }
    componentDidMount() {
        // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
        this.setState({
            mainUrl: this.state.mainUrl + this.props.url
        })
        const data = this.props.data

        window.Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: data.title,
                description: data.description,
                imageUrl: data.image,
                link: {
                    mobileWebUrl: this.state.mainUrl,
                    webUrl: this.state.mainUrl
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
                        mobileWebUrl: this.state.mainUrl,
                        webUrl: this.state.mainUrl
                    }
                }
            ]
        });
    }
    render() {
        const url = this.state.mainUrl
        var popupWidth = 500;
        var popupHeight = 500;

        var popupX = (window.screen.width / 2) - (popupWidth / 2);

        var popupY = (window.screen.height / 2) - (popupHeight / 2);
        function facebook() {
            window.open('http://www.facebook.com/sharer/sharer.php?u=' + url, "name", 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY)
        }
        function twitter() {
            window.open('http://twitter.com/intent/tweet?text=' + url, "name", 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY)
        }
        return (
            <div>
                <span id="kakao-link-btn" >
                    <img alt="kakaoShare" src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
                </span>
                <button onClick={() => facebook()}>페북 공유하기</button>
                <button onClick={() => twitter()}>트위터 공유하기</button>
            </div>
        )
    }
}
