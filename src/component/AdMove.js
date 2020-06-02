import React from 'react'

export default function AdMove() {
    var cou = document.querySelector("body");
        cou.onload = function () {
          cou.firstElementChild.remove()
          var dd = cou.firstElementChild;
          if(dd.firstElementChild.height=="120"){
              document.getElementsByClassName("pcTopDiv")[0].parentNode.insertBefore(dd, document.getElementsByClassName("pcTopDiv")[0].nextSibling)
              var daumAd1 = document.getElementById("root").nextElementSibling;
              var daumAd2 = daumAd1.nextElementSibling;
              daumAd2.setAttribute("class",daumAd2.getAttribute("class")+" ads")
              document.getElementsByClassName("specLip")[0].parentNode.insertBefore(daumAd1, document.getElementsByClassName("specLip")[0].previousSibling)
              document.getElementById("root").firstChild.insertBefore(daumAd2, document.getElementById("disqus_thread"))
              document.querySelector("body").style.opacity = 1;
          }
        }
    return (
        <div>
            
        </div>
    )
}
