export const aboutFunc = function aboutFunc() {
    //Create a DOM element of the main DIV container
    const divContent = document.querySelector("#content");

    //Assign a title to the container
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = "About us";

    divContent.appendChild(titleDiv);

    //Create a container for all cards
    const cardsDiv = document.createElement("div");
    cardsDiv.classList.add("cards");

    divContent.appendChild(cardsDiv);

    //Nest each card inside the cards container
    const aboutCard = document.createElement("div");
    aboutCard.classList.add("card");
    //About information
    const aboutContent = document.createElement("p");
    aboutContent.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam error molestiae, adipisci enim id, est
cupiditate et perferendis ab suscipit fugiat cum rerum, voluptatibus nam accusantium corporis ? Totam,
eveniet mollitia ?`;
    //Append the about information
    aboutCard.appendChild(aboutContent);
    //Append the card to the parent div
    cardsDiv.appendChild(aboutCard);

}