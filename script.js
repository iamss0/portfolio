let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');
let moonIcon = dayNight.querySelector('.fas.fa-moon');

dayNight.addEventListener('click', () => {
    banner.classList.toggle("night");
    // Toggle between moon and sun icons based on .night class
    if (banner.classList.contains("night")) {
        // Night mode: Change moon icon to sun icon
        moonIcon.className = "fas fa-sun";
    } else {
        // Day mode: Change sun icon back to moon icon
        moonIcon.className = "fas fa-moon";
    }
});
let typingEffect = new Typed("#text", {
    strings: ["Shubham Sachdeva", "a Software Developer", "a Fullstack Web Developer", "a MERN Stack Developer"],
    loop: true,
    typeSpeed: 70,
    backSpeed: 30
});

