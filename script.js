const words = [
    "Software Developer",
    "AI Enthusiast",
    "Cyber Security Expert",
    "Data Analyst"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});

const hiddenElements = document.querySelectorAll(

".about, .skills, .projects, .experience, .growth, .contact"

);

hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

document.querySelectorAll(".learning-card").forEach(card => {

    const bar = card.querySelector(".progress-bar");

    const badge = card.querySelector(".badge");

    const percent = card.querySelector(".percent");

    const value = parseInt(bar.dataset.progress);

    // Fill the progress bar
    bar.style.width = value + "%";

    // Display percentage
    percent.textContent = value + "%";

    // Decide badge based on percentage

    if (value >= 80) {

        badge.textContent = "Advanced";
        badge.className = "badge advanced";

    }

    else if (value >= 65) {

        badge.textContent = "Intermediate";
        badge.className = "badge intermediate";

    }

    else {

        badge.textContent = "Beginner";
        badge.className = "badge beginner";

    }

});

window.onscroll=function(){

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

};

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

/* ===========================
   Animated Statistics Counter
=========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            const suffix = counter.dataset.suffix || "";

            let current = 0;
            const increment = Math.max(1, target / 100);

            function updateCounter() {

                if (current < target) {

                    current += increment;

                    if (current > target) current = target;

                    counter.innerText = Math.ceil(current) + suffix;

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + suffix;

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {

    counterObserver.observe(counter);

});

if (target === 10) {

    counter.innerText = target + "+";

}

else if (target === 15) {

    counter.innerText = target + "+";

}

else if (target === 100) {

    counter.innerText = target + "%";

}

else if (target === 24) {

    counter.innerText = target + "×7";

}

else {

    counter.innerText = target;

}

const suffix = counter.dataset.suffix || "";

counter.innerText = target + suffix;

const modal=document.getElementById("resumeModal");

const resumeBtn=document.querySelector(".btn-secondary");

const closeBtn=document.querySelector(".close");

resumeBtn.onclick=(e)=>{

e.preventDefault();

modal.style.display="block";

};

closeBtn.onclick=()=>{

modal.style.display="none";

};

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

};