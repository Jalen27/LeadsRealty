# script.js

```javascript
// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// SIMPLE CONTACT ALERT
const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your inquiry has been submitted.");

});
<script>
window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.opacity = "0";

        setTimeout(function(){
            document.getElementById("loader").style.display = "none";
        }, 600);

    }, 2000);

});
</script>
