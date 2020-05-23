import React, { Component } from 'react'


export default class KakaoShare extends Component {
    state = {
        mainUrl: "http://jaehoon-dayoff.ml.s3-website.ap-northeast-2.amazonaws.com/",
        subUrl: ""
    }
    componentDidMount() {
        // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
        const data = this.props.data
        this.setState({
            subUrl: this.state.mainUrl + data.canonical2,
            mainUrl: data.addUrl ? this.state.mainUrl + data.addUrl : this.state.mainUrl
        })

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
        const url = this.state.subUrl
        const app_id = "2473764549612950"
        var popupWidth = 500;
        var popupHeight = 500;

        var popupX = (window.screen.width / 2) - (popupWidth / 2);

        var popupY = (window.screen.height / 2) - (popupHeight / 2);
        function facebook() {
            window.open('http://www.facebook.com/sharer/sharer.php?u=' + url, "name", 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY)
        }
        function kakaoStory() {
            window.open('https://story.kakao.com/share?url=' + url, "name", 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY)
        }
        function twitter() {
            window.open('http://twitter.com/intent/tweet?text=' + url, "name", 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY)
        }
        function naver() {
            window.open('http://share.naver.com/web/shareView.nhn?url=' + url + "&title=심콩", "name", 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY)
        }
        function line() {
            window.open('https://social-plugins.line.me/lineit/share?url=' + url, "name", 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY)
        }
        function band() {
            window.open('https://band.us/plugin/share?body=' + url, "name", 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY)
        }
        function fbmessage() {
            //모바일기기
            if (navigator.userAgent.indexOf('Mobile') !== -1) {
                window.open('fb-messenger://share?link=' + encodeURIComponent(url) + '&app_id=' + encodeURIComponent(app_id));
            }else{
            window.open('http://www.facebook.com/dialog/send?app_id=' + app_id + '&link=' + url + '&redirect_uri=' + url, "name", 'status=no, height=' + 600 + ', width=' + 900 + ', left=' + popupX + ', top=' + popupY)
            }
        }
        const btn = {
            width: "50px",
            height: "50px",
            display: "inline"
        }
        return (
            <div id="shareButton" style={btn}>
                <span id="kakao-link-btn" >
                    <img alt="Share" src="/images/kakaoTalk.png" />
                </span>
                <img onClick={() => facebook()} alt="Share" src="/images/facebook.png" />
                <img onClick={() => kakaoStory()} alt="Share" src="/images/kakaoStory.png" />
                <img onClick={() => twitter()} alt="Share" src="/images/twitter.png" />
                <img onClick={() => naver()} alt="Share" src="/images/naver.png" />
                <img onClick={() => line()} alt="Share" src="/images/line.png" />
                <img onClick={() => band()} alt="Share" src="/images/band.png" />
                <button onClick={() => fbmessage()}>메신저</button>
            </div>
        )
    }
}
