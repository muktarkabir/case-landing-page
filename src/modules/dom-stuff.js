const emailErrorMessage = document.querySelector("#email-feedback");
const form = document.querySelector("form#waitlistForm");
const emailField = form.querySelector("input");

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
