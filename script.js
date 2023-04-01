

var lines= document.querySelector("#lines")
var cross = document.querySelector("#cross-click")
var l1 = document.querySelector("#l1")
var l2 = document.querySelector("#l2")
var l3 = document.querySelector("#l3")
var nav = document.querySelector("#nav")
var btn = document.querySelector("#button2")

var flag = 0
lines.addEventListener("click" , function() {
    if(flag==0){
     cross.style.top = 0
     cross.style.scale = 1.35
     l1.style.rotate = "34deg"
     l2.style.opacity = 0
     l3.style.rotate = "-35deg"
    nav.style.background ="black"
    nav.style.color ="white"
    l1.style.background ="white"
    l3.style.background ="white"
    btn.style.color = "black"
    btn.style.background = "white"


     
flag = 1
    }else{
        cross.style.top = "-100%"
        cross.style.scale = 0
        l1.style.rotate = "0deg"
        l2.style.opacity = 1
        l3.style.rotate = "0deg"
        nav.style.background ="white"
        nav.style.color ="black"
        l1.style.background ="black"
        l3.style.background ="black"
        btn.style.color = "white"
    btn.style.background = "black"
        flag = 0
    }
    })


const locoscroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });

//document.querySelector(".p5div2").addEventListener("mouseenter" ,function(){
    //document.querySelector(".p5div2 img").style.scale = 1
//})
//document.querySelector(".p5div2").addEventListener("mouseleave" ,function(){
    //document.querySelector(".p5div2 img").style.scale = 0
//})
//document.querySelector(".p5div2").addEventListener("mousemove" ,function(dets){
  //  document.querySelector(".p5div2 img").style.left = '${dets.100}px'
//})//

var golaimg = document.querySelector("#gola-img")
var lil2 = document.querySelector("#lil2")
var flag = 0
lil2.addEventListener("click",function(){
    if(flag == 0) {
        golaimg.style.scale = 1
        flag = 1
    }else{
        golaimg.style.scale = 0
        flag = 0
    }
})

                 
var bro = document.querySelectorAll("#page5-elems")
bro.forEach(function(elems){
  elems.addEventListener("mouseenter", function () {
    elems.childNodes[1].style.scale = 1
  })
  elems.addEventListener("mouseleave", function () {
    elems.childNodes[1].style.scale = 0
  })
  elems.addEventListener("mousemove", function (dets) {
    elems.childNodes[1].style.left = `${dets.x}px`
  })
})

























