/*!
 * Agency Theme - Vanilla JS (no jQuery)
 */

(function () {
    "use strict";

    // Navbar shrink on scroll
    var navbar = document.getElementById("mainNav");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
                navbar.classList.add("navbar-shrink");
            } else {
                navbar.classList.remove("navbar-shrink");
            }
        });
    }

    // Smooth scrolling for page-scroll links
    document.querySelectorAll("a.page-scroll").forEach(function (link) {
        link.addEventListener("click", function (e) {
            var href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
                // Collapse mobile nav if open
                var navCollapse = document.querySelector(".navbar-collapse.show");
                if (navCollapse) {
                    var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                    if (bsCollapse) bsCollapse.hide();
                }
            }
        });
    });
})();
