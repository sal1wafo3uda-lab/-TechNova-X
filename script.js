/*=========================================
        Page Loaded
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*=========================================
        Smooth Reveal Animation
=========================================*/

const sections = document.querySelectorAll("section");

const revealSection = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 120){

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealSection);

revealSection();

/*=========================================
            Counter Animation
=========================================*/

const counters = document.querySelectorAll(".card h3");

let started = false;

window.addEventListener("scroll", () => {

    const discover = document.querySelector(".discover");

    if(!discover) return;

    const top = discover.offsetTop;

    if(window.scrollY > top - 400 && !started){

        counters.forEach(counter=>{

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 80;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            }

            update();

        });

        started = true;

    }

});
/*=========================================
            FAQ Accordion
=========================================*/

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach(item => {

            if(item !== answer){

                item.style.maxHeight = null;

            }

        });

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

        }else{

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});

/*=========================================
            Back To Top
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.opacity = "1";

        topBtn.style.pointerEvents = "auto";

    }else{

        topBtn.style.opacity = "0";

        topBtn.style.pointerEvents = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
            Ripple Effect
=========================================*/

const buttons = document.querySelectorAll("a, button");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.classList.add("ripple");

        const rect=this.getBoundingClientRect();

        ripple.style.left=e.clientX-rect.left+"px";

        ripple.style.top=e.clientY-rect.top+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});
/*=========================================
            Scroll Progress
=========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================
            Custom Cursor
=========================================*/

const cursor = document.querySelector(".cursor");

const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

    cursor2.style.left=e.clientX+"px";

    cursor2.style.top=e.clientY+"px";

});


document.querySelectorAll("a,button,.project,.member,.card,.exp-card").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(2)";

        cursor2.style.transform="translate(-50%,-50%) scale(.5)";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1)";

        cursor2.style.transform="translate(-50%,-50%) scale(1)";

    });

});


/*=========================================
            Dark / Light Mode
=========================================*/

const themeBtn=document.getElementById("theme-toggle");

themeBtn.onclick=()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML="☀️";

    }

    else{

        themeBtn.innerHTML="🌙";

    }

}


/*=========================================
            3D Cards
=========================================*/

document.querySelectorAll(".card,.project,.member,.exp-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


/*=========================================
        Testimonials Slider
=========================================*/

const testimonials=document.querySelectorAll(".testimonial");

let current=0;

setInterval(()=>{

testimonials.forEach(item=>{

item.style.display="none";

});

current++;

if(current>=testimonials.length){

current=0;

}

testimonials[current].style.display="block";

},4000);

testimonials[0].style.display="block";
/*=========================================
            Typing Effect
=========================================*/

const text = "BUILDING THE FUTURE OF THE WEB";

const typing = document.getElementById("typing");

let index = 0;

function typeText(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText,70);

    }

}

typeText();
/*=========================================
            Parallax
=========================================*/

const circles=document.querySelectorAll(".circle");

window.addEventListener("mousemove",(e)=>{

let x=e.clientX/40;

let y=e.clientY/40;

circles.forEach((circle,i)=>{

circle.style.transform=`translate(${x*(i+1)}px,${y*(i+1)}px)`;

});

});