// Snowfall Animation
const snowflakeCount = 100;
const homeSection = document.getElementById('home');

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
    snowflake.style.animationDelay = '-' + (Math.random() * 5) + 's';
    homeSection.appendChild(snowflake);
}

// Typed.js Initialization with Color Change
document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A8'];
    let colorIndex = 0;

    const typed = new Typed('#typed-text', {
        strings: ['Palcae'],
        typeSpeed: 100,
        backSpeed: 350,
        showCursor: true,
        onStringTyped: (arrayPos, self) => {
            // Change color after typing each string
            document.getElementById('typed-text').style.color = colors[colorIndex % colors.length];
            colorIndex++;
        }
    });
});

// Services Slider
let sliderIndex = 0;
const cardDeck = document.querySelector('.card-deck');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const cardsToShow = 4; // Adjust based on screen size if needed

// Function to update the slider based on current index
function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20; // Including margin
    cardDeck.style.transform = `translateX(-${sliderIndex * cardWidth}px)`;
}

// Automatic slider movement every 1 second
setInterval(() => {
    sliderIndex++;
    if (sliderIndex + cardsToShow > totalCards) {
        sliderIndex = 0;
    }
    updateSlider();
}, 1000);

// Handle window resize to adjust cardsToShow if necessary
window.addEventListener('resize', () => {
    // You can implement dynamic cardsToShow based on window width if needed
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap Carousel
    const servicesCarousel = new bootstrap.Carousel('#servicesCarousel', {
        interval: 5000, // Slide every 5 seconds
        ride: 'carousel',
        pause: 'hover', // Pause on hover
        wrap: true, // Carousel loops continuously
        touch: true // Enable touch/swipe
    });

    // Navbar Link Active State Management
    const navbarLinks = document.querySelectorAll('.fade-link');
    const carousel = document.querySelector('#servicesCarousel');

    // Function to remove 'active' class from all links
    function removeActiveClasses() {
        navbarLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Add click event listeners to navbar links
    navbarLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            removeActiveClasses();
            link.classList.add('active');
            // Navigate to the corresponding carousel slide
            servicesCarousel.to(index);
        });
    });

    // Update navbar link active state based on carousel slide
    carousel.addEventListener('slide.bs.carousel', (event) => {
        removeActiveClasses();
        // event.to is the index of the slide being slid to
        navbarLinks[event.to].classList.add('active');
    });
});

