import rgbToLab from './rgbToLab.js'
import dE00 from './dE00.js'

export default function colorAvg(colorSum, firstResult, labColor, colorList,stream,colorNum) {
    var checkSuccess = document.getElementById("checkSuccess");
    var checkFail = document.getElementById("checkFail");
    var checkResult = document.getElementById("checkResult")
    var loading = document.getElementById("loading");
    loading.style.display = "block"
    // var colorThief = new ColorThief();

    // var sourceImage = src
    try {



        // var colorArray = new rgbToLab(colorThief.getColor(sourceImage));
        console.log(colorSum)
        var colorArray = new rgbToLab(colorSum);

        labColor = { L: colorArray[0], A: colorArray[1], B: colorArray[2] };
        for (var i = 0; i < colorList.length; i++) {

            //절대값을 구할때는 Math.ads로 구하면된다..
            // var color = "color" + i;
            // var red = (imgRed - colorList[i][0]);
            // red = red < 0 ? -(red) : red;
            // var green = (imgGreen - colorList[i][1]);
            // green = green < 0 ? -(green) : green;
            // var blue = (imgBlue - colorList[i][2]);
            // blue = blue < 0 ? -(blue) : blue;
            var delta = new dE00(labColor,colorList[i])
            firstResult.push([delta.getDeltaE(), i]);
        }
        // firstResult.sort(function (a, b) { // 오름차순 
        //     return a[0] - b[0];
        // });
        var colorNum = firstResult[0][1];
        console.log(colorNum)
        setTimeout(function () {

            loading.style.display = "none"
            if (colorNum < 16) {
                checkSuccess.style.display = "block"
                checkFail.style.display = "none"

                checkResult.style.display = "block"

                return;
            }
            else {
                if (!stream) {
                    if (colorNum == 21 || colorNum == 19 || colorNum == 18)
                        checkFail.firstElementChild.nextElementSibling.innerHTML = "주변이 어둡거나, 그늘진 것 같아요! <br> 정확한 측정을 위해서 밝은 곳에서 찍은 사진을 올려주세요"
                    else
                        checkFail.firstElementChild.nextElementSibling.innerHTML = "피부가 화면에 꽉 차게 편집해주세요!"
                }
                else {
                    if (colorNum == 21 || colorNum == 19 || colorNum == 18)
                        checkFail.firstElementChild.nextElementSibling.innerHTML = "주변이 어둡거나, 그늘진 것 같아요! <br> 정확한 측정을 위해서 밝은 곳에서 측정해주세요!"
                    else
                        checkFail.firstElementChild.nextElementSibling.innerHTML = "피부가 화면에 꽉 찬 상태에서 시도해보세요!"
                }
                checkSuccess.style.display = "none"
                checkFail.style.display = "block"
                checkResult.style.display = "block"
            }
        }, 1500);

    } catch (error) {
        console.log(error)
        checkFail.firstElementChild.nextElementSibling.innerHTML = "사진을 잘못 올리신 것 같아요! <br>다시 시도해주세요"
        checkSuccess.style.display = "none"
        checkFail.style.display = "block"
        checkResult.style.display = "block"
        loading.style.display = "none"
    }
}
