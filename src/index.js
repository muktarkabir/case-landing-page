import "./reset.css";
import "./global-styles.css";
import "./styles/waitlist.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/how-it-works.css";
import "./styles/mission.css";
import "./styles/gallery.css";
import "./styles/faq.css";
import "./styles/team.css";
import { joinWaitlist, listenForWaitlistCount } from "./modules/firebase.js";
import { emailIsValid, form, emailField } from "./modules/dom-stuff.js";

form.addEventListener("submit", async () => {
  if (emailIsValid) {
    await joinWaitlist(emailField.value.trim());
  }
});

// listenForWaitlistCount();
