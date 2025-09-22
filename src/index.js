import "./reset.css";
import "./global-styles.css";
import { app } from "./modules/firebase-config.js";
import { emailIsValid } from "./modules/dom-stuff.js";

console.log(app);

const form = document.querySelector("form#waitlistForm");
form.addEventListener("submit", () => {
  if (emailIsValid) {
    console.log("Yayyy");
  }
});
