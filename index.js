

const getStartedBtn = document.getElementById("get-started-btn");
const section3 = document.getElementById("section-3");

// smooth scrolling effect
getStartedBtn.addEventListener("click", function(){
    section3.scrollIntoView({behavior: "smooth"});
});


// Event delegation

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav-bar").addEventListener("click", function(e){

    e.preventDefault();

    // Matching strategy
    if(e.target.classList.contains("nav-link")){
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({behavior: "smooth"});
    }

});



// Tabbed component

const tabs = document.querySelector(".tabs");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    
    if(id){
        tabButton.forEach(btn => {
            btn.classList.remove("tab-button-active");
        });
        e.target.classList.add("tab-button-active");

        contents.forEach(content => {
            content.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});


// Hover over nav links - fade out

//event delegation

const nav = document.querySelector(".nav");

const handleHover = function(e, opacity){

    if(e.target.classList.contains("nav-link")){
        const link = e.target;
        const sibilings = link.closest(".nav").querySelectorAll(".nav-link");
        const logo = link.closest(".nav").querySelector("img");

        sibilings.forEach(el => {
            if(el !== link) el.style.opacity = this;
        });
        logo.style.style.opacity = this;
    }
}

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));


// Sticky nav

const section1 = document.querySelector(".section-1");

const header = document.querySelector(".container");

const stickyNav = function(entries){
    const [entry] = entries;

    if(!entry.isIntersecting) header.classList.add("sticky")
    else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0
});

headerObserver.observe(section1);




// Reveal content on scroll

const allSections = document.querySelectorAll(".section");

const revealSection = function(entries, observer) {
    const [entry] = entries;
    
    if(!entry.isIntersecting) return;

    entry.target.classList.remove("section-hidden");

    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
})

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add("section-hidden");
});





