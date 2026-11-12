
document.addEventListener("DOMContentLoaded", function () {

    // Mobile Navigation
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });

        document.querySelectorAll(".nav-links a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("show");
            });
        });
    }

    // Image Preview
    const galleryImages = document.querySelectorAll(
        ".project-gallery .gallery-item img"
    );

    const lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";

    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="" alt="Project Screenshot Preview">
    `;

    document.body.appendChild(lightbox);

    const previewImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".lightbox-close");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {
            previewImage.src = image.src;
            previewImage.alt = image.alt;
            lightbox.style.display = "flex";
        });

    });

    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    });

});
