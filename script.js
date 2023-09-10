// JavaScript for interactivity (e.g., form submission)
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Simulate form submission
        const formData = new FormData(contactForm);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log("Form Data:", formObject);

        // You can perform further actions here, such as sending data to a server.
    });
});
