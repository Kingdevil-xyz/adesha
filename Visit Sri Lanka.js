window.alert("Welcome To Sri Lanka!");
document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.querySelector("form");
   
    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();
       
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
       
        if(email === "" || password === "") {
            alert("Please fill in all fields");
        } else {
            alert("Sign-in successful for " + email);
        }
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });
});