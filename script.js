// ======================
// NAVBAR SCROLL
// ======================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// ======================
// CONTACT FORM
// ======================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your inquiry has been submitted.");

});

}


// ======================
// LOADER
// ======================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});


/* ===========================
   CSR SLIDER
=========================== */

const slides = document.querySelectorAll(".csr-slide");
const title = document.getElementById("csrTitle");
const desc = document.getElementById("csrDescription");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    current = index;

    if(current < 0) current = slides.length-1;

    if(current >= slides.length) current = 0;

    slides[current].classList.add("active");

    title.textContent = slides[current].dataset.title;

    desc.textContent = slides[current].dataset.desc;

}

showSlide(current);

setInterval(()=>{

    showSlide(current+1);

},5000);


/* NEXT BUTTON */

document.querySelector(".next").addEventListener("click",()=>{

    showSlide(current+1);

});


/* PREVIOUS BUTTON */

document.querySelector(".prev").addEventListener("click",()=>{

    showSlide(current-1);

});


/* ===========================
   MODAL
=========================== */

const modal=document.querySelector(".csr-modal");

const modalImg=document.getElementById("modalImage");

const modalHeading=document.getElementById("modalHeading");

const modalText=document.getElementById("modalText");

slides.forEach(slide=>{

    slide.addEventListener("click",()=>{

        modal.style.display="flex";

        modalImg.src=slide.querySelector("img").src;

        modalHeading.textContent=slide.dataset.title;

        modalText.textContent=slide.dataset.desc;

    });

});

document.querySelector(".close").onclick=function(){

    modal.style.display="none";

};

window.onclick=function(e){

    if(e.target===modal){

        modal.style.display="none";

    }

};