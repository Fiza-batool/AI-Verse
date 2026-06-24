/* ============================================
   AI VERSE — SCRIPT.JS
   Mobile nav toggle + tools page search/filter
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ---- Mobile hamburger nav ---- */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close mobile menu when a link inside it is clicked
    var mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav) {
      mobileNav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          header.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("is-open")) {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- Tools page: live search + category pill filter ---- */
  var searchInput = document.querySelector(".search-input");
  var pills = document.querySelectorAll(".pill[data-filter]");
  var categoryBlocks = document.querySelectorAll(".category-block");
  var noResults = document.querySelector(".no-results");

  if (searchInput || pills.length) {
    var activeCategory = "all";

    function applyFilters() {
      var query = searchInput ? searchInput.value.trim().toLowerCase() : "";
      var totalVisible = 0;

      categoryBlocks.forEach(function (block) {
        var blockCategory = block.getAttribute("data-category");
        var categoryMatches =
          activeCategory === "all" || activeCategory === blockCategory;
        var cards = block.querySelectorAll(".tool-card-sm");
        var visibleInBlock = 0;

        cards.forEach(function (card) {
          var name =
            (card.querySelector(".tool-name-sm") || {}).textContent || "";
          var desc =
            (card.querySelector(".tool-desc-sm") || {}).textContent || "";
          var maker =
            (card.querySelector(".tool-maker-sm") || {}).textContent || "";
          var haystack = (name + " " + desc + " " + maker).toLowerCase();
          var textMatches = query === "" || haystack.indexOf(query) !== -1;
          var show = categoryMatches && textMatches;

          card.style.display = show ? "" : "none";
          if (show) visibleInBlock++;
        });

        block.style.display =
          categoryMatches && visibleInBlock > 0 ? "" : "none";
        totalVisible += visibleInBlock;
      });

      if (noResults) {
        noResults.classList.toggle("is-visible", totalVisible === 0);
      }
    }

    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    pills.forEach(function (pill) {
      pill.addEventListener("click", function (e) {
        e.preventDefault();
        pills.forEach(function (p) {
          p.classList.remove("active");
        });
        pill.classList.add("active");
        activeCategory = pill.getAttribute("data-filter");
        applyFilters();
      });
    });
  }

  /* ---- Contact form: basic client-side validation ---- */
  var contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      var fields = contactForm.querySelectorAll("[data-required]");
      fields.forEach(function (field) {
        var errorEl = document.querySelector(
          '[data-error-for="' + field.id + '"]',
        );
        var fieldValid = field.value.trim() !== "";

        if (field.type === "email" && fieldValid) {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        }

        if (!fieldValid) {
          valid = false;
          if (errorEl) {
            errorEl.textContent =
              field.type === "email"
                ? "Please enter a valid email address."
                : "This field is required.";
          }
        } else if (errorEl) {
          errorEl.textContent = "";
        }
      });

      var successEl = document.querySelector(".form-success");
      if (valid) {
        if (successEl) successEl.classList.add("is-visible");
        contactForm.reset();
      } else if (successEl) {
        successEl.classList.remove("is-visible");
      }
    });
  }
});
