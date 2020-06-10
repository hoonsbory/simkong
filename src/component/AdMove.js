import React from 'react'

export default function AdMove() {
    var body = document.querySelector("body");
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (navigator.userAgent.indexOf("msie") != -1)) { // IE 일 경우
        body.style.opacity = 1;
    }
    body.onload = function () {
        body.firstElementChild.remove()
          var dd = body.firstElementChild;
          if(dd.firstElementChild.height=="120"){
                  
                  document.getElementsByClassName("pcTopDiv")[0].parentNode.insertBefore(dd, document.getElementsByClassName("pcTopDiv")[0].nextSibling)
                  var daumAd1 = document.getElementById("root").nextElementSibling;
                  var daumAd2 = daumAd1.nextElementSibling;
                //   var daumAd3 = daumAd2.nextElementSibling;
                  daumAd1.setAttribute("class",daumAd1.getAttribute("class")+" ads")
                  daumAd2.setAttribute("class",daumAd2.getAttribute("class")+" ads")
                //   document.getElementsByClassName("specLip")[0].parentNode.insertBefore(daumAd1, document.getElementsByClassName("specLip")[0].previousSibling)
                //   document.getElementById("root").firstChild.insertBefore(daumAd2, document.getElementById("disqus_thread"))
                  document.getElementById("root").firstChild.insertBefore(daumAd1, document.getElementById("disqus_thread"))
                  document.getElementById("root").firstChild.insertBefore(daumAd2, document.getElementById("footer"))
                  body.style.opacity = 1;
                }
                
        }
    return (
        <div>
            
        </div>
    )
}
