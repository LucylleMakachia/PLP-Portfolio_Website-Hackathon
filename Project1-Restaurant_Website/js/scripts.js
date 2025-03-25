/* Dynamic Greeting based on Time*/
document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.createElement('p');
    const currentTime = new Date().getHours();
    let message;

    if (currentTime < 12) {
        message = "Good Morning! Start your day with our delicious breakfast!";
    } else if (currentTime < 18) {
        message = "Good Afternoon! Join us for a delightful lunch!";
    } else {
        message = "Good Evening! Unwind with our exquisite dinner options!";
    }

    greeting.textContent = message;
    document.querySelector('main').prepend(greeting);
});

/* Slideshow of Chef's Picks*/
document.addEventListener('DOMContentLoaded', function() {
    const picks = [
        {
            title: "Chef's Pick 1",
            image: "images/Special Meal.jpg",
            description: "Consists of our special spicy rosemary chicken with fresh salad"
        },
        {
            title: "Chef's Pick 2",
            image: "images/food-options.jpg",
            description: "Consists of naan, deep-fried fish fillets with curry soup"
        },
        {
            title: "Chef's Pick 3",
            image: "images/Chef Dish Pick.jpg",
            description: "Consists of freshly sourced lobsters"
        }
    ];

    let currentPick = 0;

    const titleElement = document.getElementById('pick-title');
    const imageElement = document.getElementById('pick-image');
    const descriptionElement = document.getElementById('pick-description');

    function updateSlideshow() {
        const pick = picks[currentPick];
        titleElement.textContent = pick.title;
        imageElement.src = pick.image;
        imageElement.alt = pick.title;
        descriptionElement.textContent = pick.description;

        currentPick = (currentPick + 1) % picks.length;
    }

    // Initialize slideshow
    function updateSlideshow() {
        const pick = picks[currentPick];
    
        // Fade out the current image
        imageElement.classList.add('hide');
    
        setTimeout(() => {
            // Update content while hidden
            titleElement.textContent = pick.title;
            imageElement.src = pick.image;
            imageElement.alt = pick.title;
            descriptionElement.textContent = pick.description;
    
            // Fade in the new image
            imageElement.classList.remove('hide');
        }, 200); // Delay for the fade-out effect
    
        currentPick = (currentPick + 1) % picks.length;
    }
    
    // Show the first image instantly without fading
    updateSlideshow();
       

    // Change slide every 7 seconds
    setInterval(updateSlideshow, 7000);
});

/*Contact Form*/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            feedback.textContent = "Please fill out all fields.";
            feedback.style.color = "red";
            feedback.style.display = "block";
            return;
        }

        // Simulate form submission (e.g., send data to the server)
        feedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
        feedback.style.color = "green";
        feedback.style.display = "block";

        // Reset the form after submission
        form.reset();

        // Hide feedback message after a delay
        setTimeout(() => {
            feedback.style.display = "none";
        }, 5000);
    });
});

/* Reservation Button*/
document.addEventListener('DOMContentLoaded', function() {
    const reserveBtn = document.getElementById('reserveBtn');

    reserveBtn.addEventListener('click', function() {
        alert("Reserve early to secure your spot! Call us at 123-456-7890.");
    });
});
