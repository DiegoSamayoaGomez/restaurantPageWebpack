import "./styles.css";
import "./modern-normalize.css";
import { homeFunc } from "./homeMenu.js";
import { menuFunc } from "./menuOptions.js";
import { aboutFunc } from "./aboutInformation.js";

const divContent = document.querySelector("#content");
divContent.textContent = "";
homeFunc();

const homeButton = document.querySelector(".homeBtn");
homeButton.addEventListener("click", () => {
    divContent.textContent = "";
    homeFunc();
});

const menuButton = document.querySelector(".menuBtn");
menuButton.addEventListener("click", () => {
    divContent.textContent = "";
    menuFunc();
});

const aboutButton = document.querySelector(".aboutBtn");
aboutButton.addEventListener("click", () => {
    divContent.textContent = "";
    aboutFunc();
});
