import "./reset.css";
import "./global-styles.css";
import "./styles/waitlist.css";
import { joinWaitlist, listenForWaitlistCount } from "./modules/firebase.js";
import { emailIsValid, form, emailField } from "./modules/dom-stuff.js";

form.addEventListener("submit", async () => {
  if (emailIsValid) {
    await joinWaitlist(emailField.value.trim());
  }
});

listenForWaitlistCount();
