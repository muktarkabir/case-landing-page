const emailErrorMessage = document.querySelector("#email-feedback");
export const form = document.querySelector("form#waitlistForm");
export const emailField = form.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
emailField.addEventListener("input", function () {
  validateEmail(this.value);
});
export let emailIsValid = false;

export const validateEmail = (input) => {
  emailIsValid = false;

  // Regular expression for email validation as per HTML specification
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

  if (input == "") {
    setUserFeedback({
      element: emailErrorMessage,
      message: "Please enter a valid email",
    });
  } else {
    if (!/^.*@.*$/.test(input)) {
      setUserFeedback({
        element: emailErrorMessage,
        message: "Email must contain the @ symbol",
      });
    } else if (!/@[^@]+\.[a-z]{2,}$/.test(input)) {
      setUserFeedback({
        element: emailErrorMessage,
        message: "Email must end with a valid domain e.g .com,.org",
      });
    } else if (!/^\S+$/.test(input)) {
      setUserFeedback({
        element: emailErrorMessage,
        message: "Email must not contain spaces",
      });
    } else if (emailRegExp.test(input)) {
      setUserFeedback({ element: emailErrorMessage });
      emailIsValid = true;
    }
  }
};

const setUserFeedback = ({ element, message = "" }) => {
  element.textContent = message;
};

export const showSpinner = (show) => {
  const button = form.querySelector("button");
  if (show) {
    button.innerHTML = `
  <svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="20" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>
  </svg>
`;
  } else {
    button.innerHTML = "Join Now";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuButton.setAttribute(
      "aria-expanded",
      String(mobileMenu.classList.contains("active")),
    );
  });

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
});

export const giveFeedBack = (successful) => {
  const success = document.querySelector(".success");
  const error = document.querySelector(".error");
  if (successful) {
    success.style.display = "block";
    error.style.display = "none";
  } else {
    error.style.display = "block";
    success.style.display = "none";
  }
};

// Scroll Animations

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -50px",
  },
);
const sectionIntro = document.querySelector("#about .section-intro");
const featuresContainer = document.querySelector("#about .features");

if (sectionIntro) observer.observe(sectionIntro);
if (featuresContainer) observer.observe(featuresContainer);
