const Slide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".links");
    const links = document.querySelectorAll(".links li");


    burger.addEventListener("click", () => {
        //Toggle
        nav.classList.toggle("links-a");
        //Animation
        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });

        burger.classList.toggle("toggle")

    });



}


const Slide2 = () =>{
    const burger2 = document.querySelector(".burger20");
    const footer = document.querySelector(".footer");
    const bottomSec = document.querySelector(".bottomSection");

    const links = document.querySelectorAll(".bottomList li")

    burger2.addEventListener("click", ()=>{
        footer.classList.toggle("footer-a");
        if(footer.classList.contains("footer-a")){
            bottomSec.style.animation = `bottomNavFade ease forwards 1s`;
        }else{
            bottomSec.style.animation = `bottomNavFade2 ease backwards 1s`;
        }


        links.forEach((link, index )=> {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `linksFade2 1s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger2.classList.toggle("toggle");

    })
}


const compute = () => {
    Slide();
    Slide2();
}

compute();