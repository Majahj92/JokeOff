


// Tage fat i alle menu links
let allMenu2Links = document.querySelectorAll('.menu2__listItem'); 

//lykke - checker for click event på trykkede knapper
for (i = 0; i < allMenu2Links.length; i++) {
    allMenu2Links[i].addEventListener('click', function(){

    	//lykke - checker for active class og fjerne den. 
		for (i = 0; i < allMenu2Links.length; i++) {
	    	allMenu2Links[i].className = allMenu2Links[i].className.replace(" menu2--active", "");
		}
		// giver den trykkede knap en active class
	    this.className += " menu2--active";
    });

}


// Jarne sessionStorage gemt i array

let jokeSubmit = document.querySelector(".jokeInput");
let jokeInput = document.querySelector(".writeJoke");
let showJoke = document.querySelector(".showJoke");


// tomt array til at gemme jokes
let storedJokes = [];
// if jokes are stored in session storage, load them from there...
if(sessionStorage.getItem("jokes")) {
    storedJokes = JSON.parse(sessionStorage.getItem("jokes"));
    showJokes();
}

// handle submit
jokeSubmit.addEventListener("click", function (e) {
    // create new joke object

    let tempObject = {
        joke: jokeInput.value,
        };
    console.log(tempObject);

    // add to array of jokes
    storedJokes.push(tempObject);
    console.log(storedJokes);

    // save to session storage
    sessionStorage.setItem("jokes", JSON.stringify(storedJokes));
    showJokes();

});

function showJokes() {
   // console.log("Showing the jokes");
    // reset the display of jokes
    showJoke.innerHTML = "";

    // Display the jokes
    for(let i=0;i<storedJokes.length;i++) {
        // create a new article tag
        let article = document.createElement("article");
        article.classList.add("jokeContainer");
        
        // Set the content of the article
        article.innerHTML = 
           '<header class="jokeContainer__header">'
		+'<img class="jokeContainer__avatar" src="img/avatar.svg" alt="">'
		+'<h3 class="jokeContainer__username">JokeMaster69</h3>'
		+'<img class="jokeContainer__crown" src="img/crown.svg" alt="">'
		+'</header>'
		+'<pre class="jokeContainer__joke">'
		+ storedJokes[i].joke
		+'</pre>'
		+'<div class="jokeContainer__footer">'
		+'<img class="jokeContainer__like" src="img/heart_line.svg" alt="">'
		+'<p class="likesNumber"></p>'
		+'<img class="jokeContainer__menu" src="img/pop_menu.svg" alt="">'
		+'</div>'
		;
        //console.log(article);
        showJoke.appendChild(article);
    }
}






// tager fat i like ikonet
let likeIcon = document.querySelector('.jokeContainer__like'); 

//click event på like ikonet
likeIcon.addEventListener('click', function(){
	// tager fat i billedestigen i like ikonet
	let likeIconSrc = likeIcon.getAttribute("src")
	//Hvis billedestigen = ikke farvet. sæt den til farvet
	if(likeIconSrc === "img/heart_line.svg"){
		likeIcon.src = "img/heart_colored.svg";
	}else{ // ellers sæt den til ikke farvet
		likeIcon.src = "img/heart_line.svg";
	}
});









let splash = document.querySelector(".splashScreen");

// fra https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css
function splashTimeOut(){
		var op = 1;  // initial opacity
	    var timer = setInterval(function () {
	        if (op <= 0.1){
	            clearInterval(timer);
	            splash.style.display = 'none';
	        }
	        splash.style.opacity = op;
	        splash.style.filter = 'alpha(opacity=' + op * 100 + ")";
	        op -= op * 0.1;
	    }, 20);
}
// caller timeout funktion med tid
setTimeout(splashTimeOut, 10);


// like random number + counter

let like = document.querySelector(".likesNumber");
let heart = document.querySelector(".jokeContainer__like");

//random number generator 1 - 100
var x = Math.floor((Math.random() * 100) + 1);
// sætter like til at være vores random nummer
like.innerHTML = x;

heart.addEventListener("click", function() {
	// tager fat i billedestigen i like ikonet
	let likeIconSrc = likeIcon.getAttribute("src")
	//Hvis billedestigen = ikke farvet. like +1
	if(likeIconSrc === "img/heart_line.svg"){
		console.log("true");
		like.innerHTML = x;
		x++;
	}else{ // ellers like -1
		like.innerHTML = x;
		x--;
		console.log("false");
	}

});

// Feed pop menu

let popUpIcon = document.querySelector(".jokeContainer__menu");
let popUpMenu = document.querySelector(".jokeContainer__popMenu");

// click event på menu ikon
popUpIcon.addEventListener("click", function(){
	//sætter menu til at vises
	popUpMenu.style.display = "block";
});

// click event på hele pop up ul
popUpMenu.addEventListener("click", function(){
	//sætter menu til ikke at vises
	popUpMenu.style.display = "none";
});