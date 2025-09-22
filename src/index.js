import "./reset.css";
import "./global-styles.css";
import { joinWaitlist } from "./modules/firebase.js";
import { emailIsValid, form, emailField } from "./modules/dom-stuff.js";

form.addEventListener("submit", async () => {
  if (emailIsValid) {
    await joinWaitlist(emailField.value.trim());
  }
});
