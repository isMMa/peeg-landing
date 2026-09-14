(function () {
  "use strict";

  var THEME_KEY = "peeg-theme";

  function applyTheme(mode) {
    var dark = mode === "auto"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : mode === "dark";
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    var saved = "auto";
    try { saved = localStorage.getItem(THEME_KEY) || "auto"; } catch (e) {}
    if (saved !== "light" && saved !== "dark") saved = "auto";

    themeToggle.setAttribute("data-active", saved);
    applyTheme(saved);

    themeToggle.querySelectorAll(".theme-option").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-value") === saved ? "true" : "false");
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-value");
        try { localStorage.setItem(THEME_KEY, mode); } catch (e) {}
        themeToggle.setAttribute("data-active", mode);
        themeToggle.querySelectorAll(".theme-option").forEach(function (other) {
          other.setAttribute("aria-pressed", other === btn ? "true" : "false");
        });
        applyTheme(mode);
      });
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
      if (themeToggle.getAttribute("data-active") === "auto") applyTheme("auto");
    });
  }

})();
