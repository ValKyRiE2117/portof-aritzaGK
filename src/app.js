// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

mobileMenuButton.addEventListener("click", function () {
  const isOpen = !mobileMenu.classList.contains("hidden");

  if (isOpen) {
    // Close menu
    mobileMenu.classList.add("hidden");
    mobileMenuButton.classList.remove("burger-open");
  } else {
    // Open menu
    mobileMenu.classList.remove("hidden");
    mobileMenuButton.classList.add("burger-open");
  }
});

// Close mobile menu when clicking on links
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.classList.remove("burger-open");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideNav = event.target.closest("nav");
  if (!isClickInsideNav && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.classList.remove("burger-open");
  }
});

// Close mobile menu on window resize to desktop size
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.classList.remove("burger-open");
  }
});
