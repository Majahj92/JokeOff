// Jarne sessionStorage gemt i array

let jokeSubmit = document.querySelector(".jokeInput");
let jokeInput = document.querySelector(".writeJoke");
let showJoke = document.querySelector(".showJoke");


// tomt array til at gemme jokes
let storedJokes = [];
// if jokes are stored in session storage, load them from there...
if(sessionStorage.getItem("jokes")) {
    storedJokes = JSON.parse(sessionStorage.getItem("jokes"));

}

// handle submit
jokeSubmit.addEventListener("click", function (e) {
    // create new joke object
    console.log("clicked");
    let tempObject = {
        joke: jokeInput.value,
        };
    console.log(tempObject);

    // add to array of jokes
    storedJokes.push(tempObject);
    console.log(storedJokes);

    // save to session storage
    sessionStorage.setItem("jokes", JSON.stringify(storedJokes));

});
