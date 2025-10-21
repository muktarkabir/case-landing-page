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
    entries.forEach((entry) => {
      console.log(entry.target);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
      // entry.target.classList.toggle("show", entry.isIntersecting);
      // observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25,
    rootMargin: "50px 0px 0px",
  },
);
const sectionIntro = document.querySelector("#about .section-intro");
const featuresContainer = document.querySelector("#about .features");
const howItWorksSection = document.querySelector("#how-it-works");
const howItWorksHeading = howItWorksSection.querySelector(".section-header");
const steps = howItWorksSection.querySelectorAll(".step");
const step1 = steps[0];
const step2 = steps[1];
const step3 = steps[2];
const missionSection = document.querySelector("section#mission");
const missionText = missionSection.querySelector(".content");
const missionImage = missionSection.querySelector(".image-wrapper");
const teamSection = document.querySelector("section#team");
const teamText = teamSection.querySelector(".team-text");
const teamMembers = teamSection.querySelectorAll(".team-member");
const ahmad = teamMembers[0];
const mukhtar = teamMembers[1];
const gent = teamMembers[2];
const sdq = teamMembers[3];
const gallerySection = document.querySelector("section#gallery");
const waitlistSection = document.querySelector(
  "section#waitlist .waitlist-content",
);
const waitlistTitle = waitlistSection.querySelector(".waitlist-title");
const waitlistSubTitle = waitlistSection.querySelector(".waitlist-subtitle");
const waitlistNote = waitlistSection.querySelector(".waitlist-note");
const otherWaitlistNote = waitlistSection.querySelector(".note");
const faqSection = document.querySelector("section#faq");
const faqTitle = faqSection.querySelector("h2");
const faqs = faqSection.querySelector(".faqs");

const animatedParts = [
  sectionIntro,
  featuresContainer,
  howItWorksHeading,
  step1,
  step2,
  step3,
  missionImage,
  missionText,
  teamText,
  ahmad,
  mukhtar,
  gent,
  sdq,
  gallerySection,
  waitlistTitle,
  waitlistSubTitle,
  form,
  waitlistNote,
  otherWaitlistNote,
  faqTitle,
  faqs,
];

animatedParts.forEach((part) => observer.observe(part));
