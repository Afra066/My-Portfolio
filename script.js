
document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            const isExpanded = navLinks.classList.contains("show");
            menuToggle.setAttribute("aria-expanded", isExpanded);

        });

        document.querySelectorAll(".nav-links a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");
                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

    }


    // IMAGE LIGHTBOX
    const galleryImages = document.querySelectorAll(
        ".project-gallery .gallery-item img"
    );

    const lightbox = document.getElementById("image-lightbox");
    const previewImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("lightbox-close");

    if (lightbox && previewImage && closeButton) {

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

    }

});
