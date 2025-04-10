
// Function to observe descriptions and apply animation when visible
const descriptionElements = document.querySelectorAll('.content-right p');

const observerOptions = {
    threshold: 0.5, // Trigger animation when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated-text-visible'); // Apply animation class
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, observerOptions);

// Observe each description <p> tag
descriptionElements.forEach(element => {
    element.classList.add('animated-text'); // Add animation class initially to apply the effect
    observer.observe(element); // Start observing the element
});

