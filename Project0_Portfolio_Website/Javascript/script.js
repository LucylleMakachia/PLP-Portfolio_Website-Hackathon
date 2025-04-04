document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight; // Get header height

    // Smooth scrolling logic
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1); // Remove '#' from href
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetPosition = targetSection.offsetTop - headerHeight - 10; // Adjust for fixed header
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth", // Smooth scrolling effect
                });
            }
        });
    });

    // Define all necessary elements for the hamburger menu
    const navToggle = document.getElementById("nav-toggle");
    const navLinksContainer = document.getElementById("nav-links");

    // Hamburger menu toggle logic
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener("click", () => {
            // Toggle the visibility of the navigation links
            if (navLinksContainer.style.display === "flex") {
                navLinksContainer.style.display = "none"; // Hide dropdown
            } else {
                navLinksContainer.style.display = "flex"; // Show dropdown
                navLinksContainer.style.flexDirection = "column"; // Stack links vertically
                navLinksContainer.style.alignItems = "center"; // Center links
            }
        });
    }

    // Highlight current navigation link on scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset + headerHeight + 10;

        sections.forEach((section) => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach((link) => link.classList.remove("active")); // Remove active class
                const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                if (activeLink) activeLink.classList.add("active"); // Add active class
            }
        });
    });

    // Typing effect for "Hi, I'm Lucylle Makachia"
    const mainText = "Hi, I'm Lucylle Makachia";
    const subText = "Software Developer | GIS Analyst | Data Scientist";
    const typedTextElement = document.getElementById("typed-text");
    const subTextElement = document.getElementById("sub-text");
    let charIndex = 0;

    // Function to simulate typing for main text
    function typeMainText() {
        if (charIndex < mainText.length) {
            typedTextElement.textContent += mainText.charAt(charIndex);
            charIndex++;
            setTimeout(typeMainText, 100); // Adjust typing speed
        } else {
            setTimeout(() => typeSubText(), 1000); // Pause before typing sub text
        }
    }

    // Typing effect for sub text
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
});
