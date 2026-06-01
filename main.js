//Reveal

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold:0.1
});

document.querySelectorAll(".reveal").forEach(el=>{
    observer.observe(el);
});

//Triller

let triller = document.getElementById('triller')
let body = document.getElementById('body')

triller.addEventListener('click', ()=>{
    triller.classList.toggle('white')
    body.classList.toggle('white')
})
//

// NAVIBAR
const navbar = document.querySelector(".nave");

window.addEventListener("scroll", () => {

if(window.scrollY > 40){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-links");

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section =>{

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach(link =>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});
//

