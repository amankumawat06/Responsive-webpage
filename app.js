function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const allSections = document.querySelectorAll(".ds-flex");
    const navButtons = document.querySelectorAll(".rBtn");

    function toggleSection(targetSection, clickedButton) {
        // Hide all sections
        allSections.forEach(sec => {
            sec.style.display = "none";
        });

        // Show the chosen section
        document.querySelector(targetSection).style.display = "flex";

        // Reset button styles
        navButtons.forEach(btn => btn.classList.remove("disabled")); 
        clickedButton.classList.add("disabled"); 
    }

    toggleSection(".graphicDesignSection", document.querySelector(".graphicDesign .rBtn"));

    // Event listeners for section switching
    document.querySelector(".graphicDesign .rBtn").addEventListener("click", function () {
        toggleSection(".graphicDesignSection", this);
    });

    document.querySelector(".webDevelopment .rBtn").addEventListener("click", function () {
        toggleSection(".webDevelopmentSection", this);
    });

    document.querySelector(".shoot .rBtn").addEventListener("click", function () {
        toggleSection(".shootSection", this);
    });

    document.querySelector(".branding .rBtn").addEventListener("click", function () {
        toggleSection(".brandingSection", this);
    });
});

// Remove form submittion
let submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", (e) => {
    let inputs = document.querySelectorAll(".inpBlank");
    for(let input of inputs){
        input.value = ""; 
        e.preventDefault();
    }
})