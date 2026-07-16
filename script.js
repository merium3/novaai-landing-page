const faq=document.querySelectorAll(".faq-item");

faq.forEach(item=>{

const btn=item.querySelector(".faq-question");

btn.addEventListener("click",()=>{

item.classList.toggle("active");

const answer=item.querySelector(".faq-answer");

if(item.classList.contains("active")){

answer.style.maxHeight=answer.scrollHeight+"px";

}

else{

answer.style.maxHeight=null;

}

});

});
const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progressWidth=(scrollTop/scrollHeight)*100;

progress.style.width=progressWidth+"%";

});
AOS.init({

    duration:10,

    once:true,

    offset:120,

});
const glow=document.querySelector(".glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}
window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    loader.style.opacity="0";

    loader.style.visibility="hidden";

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 200;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,10);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

}); 
const openVideo = document.getElementById("openVideo");

const videoPopup = document.getElementById("videoPopup");

const closeVideo = document.querySelector(".close-video");

const demoVideo = document.getElementById("demoVideo");


openVideo.addEventListener("click",(e)=>{

    e.preventDefault();

    videoPopup.classList.add("show");

    demoVideo.play();

});


closeVideo.addEventListener("click",()=>{

    videoPopup.classList.remove("show");

    demoVideo.pause();

    demoVideo.currentTime=0;

});


videoPopup.addEventListener("click",(e)=>{

    if(e.target===videoPopup){

        videoPopup.classList.remove("show");

        demoVideo.pause();

        demoVideo.currentTime=0;

    }

});