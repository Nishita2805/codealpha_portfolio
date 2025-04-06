document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const toggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Hamburger Menu Toggle (Only on Mobile)
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        if (window.innerWidth <= 768) { // Only activate on mobile
            menu.classList.toggle("active");
        }
    });

    // Ensure menu resets when resizing back to desktop
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            menu.classList.remove("active");
        }
    });
    window.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".scroll-fade");
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    });
});