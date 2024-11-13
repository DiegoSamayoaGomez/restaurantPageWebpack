export const homeFunc = function homeFunc() {
    //Create a DOM element of the main DIV container
    const divContent = document.querySelector("#content");

    //Assign a title to the container
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = "Welcome to the restaurant";

    divContent.appendChild(titleDiv);

    //Create a container for all cards
    const cardsDiv = document.createElement("div");
    cardsDiv.classList.add("cards");

    divContent.appendChild(cardsDiv);

    //Nest each card inside the cards container
    //DESCRIPTION
    const descripctionCard = document.createElement("div");
    descripctionCard.classList.add("card");
    //Create the title
    const titleDescription = document.createElement("h3");
    titleDescription.textContent = "Description";
    //Append the title
    descripctionCard.appendChild(titleDescription);
    //Create the description
    const descriptionContent = document.createElement("p");
    descriptionContent.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam error molestiae, adipisci enim id, est
cupiditate et perferendis ab suscipit fugiat cum rerum, voluptatibus nam accusantium corporis ? Totam,
eveniet mollitia ?`;
    //Append the content
    descripctionCard.appendChild(descriptionContent);
    //Append the card to the parent div
    cardsDiv.appendChild(descripctionCard);

    //HOURS
    const scheduleCard = document.createElement("div");
    scheduleCard.classList.add("card");
    //Create the title
    const titleHours = document.createElement("h3");
    titleHours.textContent = "Hours";
    //Append the title
    scheduleCard.appendChild(titleHours);
    //Create the hours
    const hoursContent = document.createElement("p");
    hoursContent.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam error molestiae, adipisci enim id, est
    cupiditate et perferendis ab suscipit fugiat cum rerum, voluptatibus nam accusantium corporis ? Totam,
    eveniet mollitia ?`;
    //Append the hours
    scheduleCard.appendChild(hoursContent);
    //Append the card to the parent div
    cardsDiv.appendChild(scheduleCard);

    //LOCATION
    const locationCard = document.createElement("div");
    locationCard.classList.add("card");
    //Create the title
    const titleLocation = document.createElement("h3");
    titleLocation.textContent = "Location";
    //Append the title
    locationCard.appendChild(titleLocation);
    //Create the location
    const locationContent = document.createElement("p");
    locationContent.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam error molestiae, adipisci enim id, est
    cupiditate et perferendis ab suscipit fugiat cum rerum, voluptatibus nam accusantium corporis ? Totam,
    eveniet mollitia ?`;
    //Append the location
    locationCard.appendChild(locationContent);
    //Append the card to the parent div
    cardsDiv.appendChild(locationCard);



}