const nav=document.querySelector("nav"),menu=document.querySelector(".menu");menu.addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");o.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>o.observe(e));window.addEventListener("scroll",()=>document.querySelector("#header").style.background=scrollY>30?"#080606f2":"linear-gradient(#080606e8,#08060622)");
const courseModal=document.querySelector("#course-modal");
const courseOpen=document.querySelector(".course-open");
const courseClose=document.querySelector(".course-close");
const courseBackdrop=document.querySelector(".course-modal-backdrop");
function openCourse(){courseModal.classList.add("open");courseModal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open")}
function closeCourse(){courseModal.classList.remove("open");courseModal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")}
courseOpen?.addEventListener("click",openCourse);
courseClose?.addEventListener("click",closeCourse);
courseBackdrop?.addEventListener("click",closeCourse);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCourse()});
