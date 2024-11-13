import cake_coffee_menu from "./cake_coffee_menu.png";
import cinamon_roll_coffee_menu from "./cinamon_roll_coffee_menu.png"
export const menuFunc = function menuFunc() {

    //Create a DOM element of the main DIV container
    const divContent = document.querySelector("#content");

    //Assign a title to the container
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = "Menu";

    divContent.appendChild(titleDiv);

    //Create a container for all cards
    const cardsDiv = document.createElement("div");
    cardsDiv.classList.add("cards");

    divContent.appendChild(cardsDiv);

    //Nest each card inside the cards container
    //MENU 1
    const menuOneCard = document.createElement("div");
    menuOneCard.classList.add("card");
    //Create the title
    const titleMenuOne = document.createElement("h3");
    titleMenuOne.textContent = "Cake and coffee";
    //Append the title
    menuOneCard.appendChild(titleMenuOne);
    //Image
    const firstMenuImage = document.createElement("img");
    firstMenuImage.classList.add("menuPicture");
    firstMenuImage.src = cake_coffee_menu;
    menuOneCard.appendChild(firstMenuImage);
    //Menu information
    const menuOneContent = document.createElement("p");
    menuOneContent.textContent = "Indulge in our freshly brewed coffee paired with cake. Perfect for a cozy treat any time of day.";
    //Append the menu information
    menuOneCard.appendChild(menuOneContent);
    //Append the card to the parent div
    cardsDiv.appendChild(menuOneCard);


    //MENU 2
    const menuTwoCard = document.createElement("div");
    menuTwoCard.classList.add("card");
    //Create the title
    const titleMenuTwo = document.createElement("h3");
    titleMenuTwo.textContent = "Cinammon roll and coffee";
    //Append the title
    menuTwoCard.appendChild(titleMenuTwo);
    //Image
    const secondMenuImage = document.createElement("img");
    secondMenuImage.classList.add("menuPicture");
    secondMenuImage.src = cinamon_roll_coffee_menu; //CHANGE THIS
    menuTwoCard.appendChild(secondMenuImage);
    //Menu information
    const secondMenuContent = document.createElement("p");
    secondMenuContent.textContent = "Enjoy our high quality coffee with a cinammon roll of your choice. Perfect for a rainy day.";
    //Append the menu information
    menuTwoCard.appendChild(secondMenuContent);
    //Append the card to the parent div
    cardsDiv.appendChild(menuTwoCard);


}