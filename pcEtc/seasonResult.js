//색상과 질문 총 결과값을 종합하여 결과 도출
//아래 주석처리된 부분이 원래로직. 단순하게 rgb값들의 오차를 절대값으로 더해서 가장 숫자가 적은, 즉 오차가 가장 적은 컬러가 가까운 컬러로 뽑히게 짰다.
//그러나 rgb값으로는 색의 오차를 수치로 판단하기가 힘들다. 예를들어 50,50,50을 비교하면, 100,100,100과는 총 150의 차이, 50,50,199와는 총 149의 차이로 후자가 더 비슷한 컬러로 결과가 나오지만,
//실제 인간이 봤을 때 비슷한 색은 100,100,100이다. 후자는 blue값이 149의 차이가 나기때문에 색이 완전히 다른 색이 되어버린다. 이처럼 세 영역의 벨런스를 잡아줄 수가 없어서 구글링을 해봤는데,
//CIE(국제조명위원회)가 LAB값을 활용한 공식을 발표했고(delta-e), 그걸 js로 만들어놓은 사람이 있어서 가져와서 모듈화해서 사용했다.
export default function season(firstResult,faceBoardResult) {
    document.getElementById("loading").style.display = "block"
    console.log(firstResult)
    
    softmax(firstResult.map(i=> i[0]))

    function softmax(arr) {
        const C = Math.max(...arr);
        const d = arr.map((y) => Math.exp(y - C)).reduce((a, b) => a + b);
        return arr.map((value, index) => { 
            firstResult[index][0] = Math.exp(value - C) / d;
        })
    }

    function softmax2(arr) {
        const C = Math.max(...arr);
        const d = arr.map((y) => Math.exp(y - C)).reduce((a, b) => a + b);
        return arr.map((value, index) => { 
             return Math.exp(value - C) / d;
        })
    }
    console.log(firstResult)
    if(faceBoardResult==='warm'){
        firstResult.map((i,idx)=>{
            if(idx>=0&&idx<4) i[0]+= 0.4
        })
    }
    else if(faceBoardResult==='fall'){
        firstResult.map((i,idx)=>{
            if(idx>=4&&idx<8) i[0]+= 0.4
        })
    }
    else if(faceBoardResult==='summer'){
        firstResult.map((i,idx)=>{
            if(idx>=8&&idx<12) i[0]+= 0.4
        })
    }
    else{
        firstResult.map((i,idx)=>{
            if(idx>11) i[0]+= 0.4
        })
    }
    firstResult.sort(function (a, b) { // 오름차순 
        return b[0] - a[0];
    });
    var colorNum = firstResult[0][1]
    // var length = firstResult.length
    
    // var season1 = [];
    // var season2 = [];
    // var toneColor
    // console.log(firstResult)

    // for (var i = 0; i < length; i++) {
    //     if (firstResult[i][1] < 8 && !season1[0]) {
    //         season1.push(firstResult[i][0])
    //         season1.push(firstResult[i][1])
    //     }
    //     if ((firstResult[i][1] >= 8 && firstResult[i][1] < 16) && !season2[0]) {
    //         season2.push(firstResult[i][0])
    //         season2.push(firstResult[i][1])
    //     }
    //     if (season1[0] && season2[0]) break;
    // }
    // //delta-e에서 리턴받은 값을 점수화해서 질문결과와 합침.
    // //대부분 필터 같은 것들이 껴있어서 밝은 부분이 많아 쿨톤이 점수가 높게 나오기 때문에 웜톤을 상향 조정했다.
    // if (stream) {
    //     season1[0] = 50 - (49 / (100 / season1[0]));
    //     season2[0] = 50 - (50 / (100 / season2[0]));
    // }
    // else {
    //     season1[0] = 50 - (42 / (100 / season1[0]));
    //     season2[0] = 50 - (50 / (100 / season2[0]));
    // }
    // season1[0] += (warm / 2.5)
    // season2[0] += (cool / 2.5)

    // if (season1[0] > season2[0]) {
    //     toneColor = "warm"
    // } else {
    //     toneColor = "cool"
    // }

    // //스트림 방식은 아무래도 카메라로 바로 측정하기 때문에 그늘지기도 하고 크롭으로 특정 부위를 자를수도 없어 좀 더 어둡기 때문에 인위적으로 벨런스를 조절해줌.
    // season1 = [];
    // season2 = [];
    // if (toneColor == "warm") {
    //     for (var i = 0; i < length; i++) {
    //         if (firstResult[i][1] <= 3 && !season1[0]) {
    //             season1.push(firstResult[i][0])
    //             season1.push(firstResult[i][1])
    //         }
    //         if ((firstResult[i][1] >= 4 && firstResult[i][1] <= 7) && !season2[0]) {
    //             season2.push(firstResult[i][0])
    //             season2.push(firstResult[i][1])
    //         }
    //         if (season2[0] && season1[0]) {
    //             break;
    //         }
    //     }
    //     //웜톤은 가뜩이나 필터때문에 잘나오지 못하는데, 그나마 웜톤이 나왔을때는 사진이 다소 어두울 때라, 가을 웜톤에 결과가 치우친다.
    //     //그래서 봄웜톤 살짝 상향 조정.
    //     if (!stream) {
    //         if (season2[0] <= 12) season1[0] -= season2[0] * 0.2
    //         else if (season2[0] <= 24) season1[0] -= season2[0] * 0.15
    //     }
    //     else {
    //         if (season2[0] <= 12) season1[0] -= season2[0] * 0.14
    //         else if (season2[0] <= 24) season1[0] -= season2[0] * 0.125
    //     }
    // } else {
    //     for (var i = 0; i < length; i++) {
    //         if ((firstResult[i][1] >= 8 && firstResult[i][1] <= 11) && !season1[0]) {
    //             season1.push(firstResult[i][0])
    //             season1.push(firstResult[i][1])
    //         }
    //         if ((firstResult[i][1] >= 12 && firstResult[i][1] <= 15) && !season2[0]) {
    //             season2.push(firstResult[i][0])
    //             season2.push(firstResult[i][1])
    //         }
    //         if (season2[0] && season1[0]) {
    //             break;
    //         }
    //     }
    //     if (stream) {
    //         if (season2[0] <= 12) season1[0] -= season2[0] * 0.135
    //         else if (season2[0] <= 24) season1[0] -= season2[0] * 0.12
    //     }
    // }
    
    // colorNum = season1[0] == season2[0] ? firstResult[0][1] : season1[0] < season2[0] ? season1[1] : season2[1];
    // //100점 기준으로 점수 변환
    // if (season1[0] > season2[0]) {
    //     //겨울쿨톤에 가까울 때
    //     var percentage = (season1[0] - season2[0]) * 12;
    //     if (percentage > 50) percentage = 50;
    //     season2[0] = Math.round(50 + percentage);
    //     season1[0] = Math.round(50 - percentage);
    // } else {
    //     //여름쿨톤에 가까울 때
    //     var percentage = (season2[0] - season1[0]) * 23;
    //     if (percentage > 50) percentage = 50;
    //     season1[0] = Math.round(50 + percentage);
    //     season2[0] = Math.round(50 - percentage);
    // }

    setTimeout(function () {
        if (colorNum <= 3) {
            var anotherSeason;
            for(var i=0; i<firstResult.length; i++){
                if(firstResult[i][1]>=4&&firstResult[i][1]<8) {
                    anotherSeason = firstResult[i][0]
                    break
                }
            }
            var seasonData = softmax2([firstResult[0][0],anotherSeason])
            window.location.href = "https://mycolor.kr/springWarm/?spring=" + Math.round(seasonData[0]*100) + "&fall=" + Math.round(seasonData[1]*100)
        } else if (colorNum <= 7) {
            var anotherSeason;
            for(var i=0; i<firstResult.length; i++){
                if(firstResult[i][1]>=0&&firstResult[i][1]<4) {
                    anotherSeason = firstResult[i][0]
                    break
                }
            }
            var seasonData = softmax2([anotherSeason,firstResult[0][0]])
            window.location.href = "https://mycolor.kr/fallWarm/?spring=" + Math.round(seasonData[0]*100) + "&fall=" + Math.round(seasonData[1]*100)
        } else if (colorNum <= 11) {
            var anotherSeason;
            for(var i=0; i<firstResult.length; i++){
                if(firstResult[i][1]>=12) {
                    anotherSeason = firstResult[i][0]
                    break
                }
            }
            var seasonData = softmax2([firstResult[0][0],anotherSeason])
            // window.location.href = "https://mycolor.kr/summerCool/?summer=" + Math.round(seasonData[0]*100) + "&winter=" + Math.round(seasonData[1]*100)
        } else if (colorNum <= 15) {
            var anotherSeason;
            for(var i=0; i<firstResult.length; i++){
                if(firstResult[i][1]>=8&&firstResult[i][1]<12) {
                    anotherSeason = firstResult[i][0]
                    break
                }
            }
            var seasonData = softmax2([anotherSeason,firstResult[0][0]])
            window.location.href = "https://mycolor.kr/winterCool/?summer=" + Math.round(seasonData[0]*100) + "&winter=" + Math.round(seasonData[1]*100)
        }
    }, 1500);

}