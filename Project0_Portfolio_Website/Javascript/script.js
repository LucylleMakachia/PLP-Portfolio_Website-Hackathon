document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    const headerHeight = document.querySelector("header").offsetHeight; // Get header height

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1); // Remove the '#' from href
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetPosition = targetSection.offsetTop - headerHeight - 10; // Adjust for fixed header

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth", // Smooth scrolling
                });
            }
        });
    });

// Form submission handling
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const feedback = document.createElement("div"); // Create a feedback div
    feedback.id = "formFeedback"; // Assign an ID for styling
    feedback.style.display = "none"; // Hide initially
    contactForm.parentElement.appendChild(feedback); // Insert feedback below the form

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Stops the form from refreshing the page

            // Fetch values from inputs
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validation: Check all fields for input
            if (!name || !email || !message) {
                feedback.textContent = "Please fill out all fields.";
                feedback.style.color = "red";
                feedback.style.display = "block";
                return; // Stops further execution if validation fails
            }

            // Simulate form submission and display success message
            feedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            feedback.style.color = "green";
            feedback.style.display = "block";

            // Reset the form after submission
            contactForm.reset();

            // Keep the user at the current section
            feedback.scrollIntoView({ behavior: "auto", block: "center" });

            // Hide feedback message after a delay
            setTimeout(() => {
                feedback.style.display = "none";
            }, 5000);
        });
    }
});

    
// Highlight current navigation link
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let scrollPosition = window.pageYOffset + headerHeight + 10;

        sections.forEach(section => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach(link => link.classList.remove("active")); // Remove active class
                const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                if (activeLink) activeLink.classList.add("active"); // Add active class
            }
        });
    });
});

// Typing effect for "Hi, I'm Lucylle Makachia"
const mainText = "Hi, I'm Lucylle Makachia";
const subText = "Software Developer | GIS Analyst | Data Scientist";
const typedTextElement = document.getElementById("typed-text");
const subTextElement = document.getElementById("sub-text");
let charIndex = 0;

// Function to simulate typing
function typeMainText() {
    if (charIndex < mainText.length) {
        typedTextElement.textContent += mainText.charAt(charIndex);
        charIndex++;
        setTimeout(typeMainText, 100); // Adjust typing speed
    } else {
        setTimeout(() => typeSubText(), 1000); // Pause before typing sub text
    }
}

// Typing effect for "Software Developer | GIS Analyst | Data Scientist"
function typeSubText() {
    let subCharIndex = 0;

    function type() {
        if (subCharIndex < subText.length) {
            subTextElement.textContent += subText.charAt(subCharIndex);
            subCharIndex++;
            setTimeout(type, 100); // Adjust typing speed
        }
    }
    type();
}

// Start the typing effect
typeMainText();

