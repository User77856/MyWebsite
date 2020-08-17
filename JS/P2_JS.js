"use strict";

const main = document.querySelector(".main-body");
const info = document.querySelector(".furtherInfo");

window.onscroll = function () {
    scrollSwitch();
}



const scrollSwitch = ()=> {
    console.log("heeeellloo")
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if(winScroll >= (height/2)){
        console.log("heeeellloo")
        main.style.height = "8vh";
        info.style.height = "90vh";
    }else if(winScroll < (height/2)){
        main.style.height = "90vh";
        info.style.height = "8vh";
    }
}