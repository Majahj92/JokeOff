

let splash = document.querySelector(".splashScreen");

// fra https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css
/*function splashTimeOut(){
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
setTimeout(splashTimeOut, 1000);
*/



// Tage fat i alle menu links
let allMenuLinks = document.querySelectorAll('.menu__listItem'); 

//lykke - checker for click event på trykkede knapper
for (i = 0; i < allMenuLinks.length; i++) {
    allMenuLinks[i].addEventListener('click', function(){

    	//lykke - checker for active class og fjerne den. 
		for (i = 0; i < allMenuLinks.length; i++) {
	    	allMenuLinks[i].className = allMenuLinks[i].className.replace(" menu--active", "");
		}
		// giver den trykkede knap en active class
	    this.className += " menu--active";
    });

}

// tager fat i like ikonet
let likeIcon = document.querySelectorAll('.jokeContainer__like'); 

for (i = 0; i < likeIcon.length; i++) {
    likeIcon[i].addEventListener('click', function(){
		let likeIconSrc = this.getAttribute("src");
		//Hvis billedestigen = ikke farvet. sæt den til farvet
		if(likeIconSrc === "img/heart_line.svg"){
			this.src = "img/heart_colored.svg";
		}else{ // ellers sæt den til ikke farvet
			this.src = "img/heart_line.svg";
		}
    });
}


let like = document.querySelectorAll(".likesNumber");

for (i = 0; i < like.length; i++) {
	//console.log(like);
	//random number generator 1 - 100
	var x = Math.floor((Math.random() * 100) + 1);
	// sætter like til at være vores random nummer
	like[i].innerHTML = x;
	
}



// Jarne sessionStorage gemt i array

let jokeSubmit = document.querySelector(".jokeInput");
let jokeInput = document.querySelector(".writeJoke");
let showJoke = document.querySelector(".showJoke");

let storedJokes = [];

// if jokes are stored in session storage, load them from there...
if(sessionStorage.getItem("jokes")) {
    storedJokes = JSON.parse(sessionStorage.getItem("jokes"));
}
console.log(storedJokes);
		// Display the jokes
		for(let i=0;i<storedJokes.length;i++) {
		    // create a new article tag
		    let article = document.createElement("article");
		    article.classList.add("jokeContainer");
		    
		    // Set the content of the article
			   article.innerHTML = 
	           '<a class="jokeContainer__header">'
				+'<img class="jokeContainer__avatar" src="img/avatar.svg" alt="">'
				+'<h3 class="jokeContainer__username">JokeMaster69</h3>'
				+'<img class="jokeContainer__crown" src="img/crown.svg" alt="">'
				+'</a>'
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



// Feed pop menu

let popUpIcon = document.querySelectorAll(".jokeContainer__menu");
let popUpMenu = document.querySelector(".jokeContainer__popMenu");

for (i = 0; i < popUpIcon.length; i++) {
	popUpIcon[i].addEventListener('click', function(){
		//sætter menu til at vises
		popUpMenu.style.display = "block";
	});
	
}
// click event på hele pop up ul
popUpMenu.addEventListener("click", function(){
	//sætter menu til ikke at vises
	popUpMenu.style.display = "none";
});

let followbutton = document.querySelector(".followbut");

followbutton.addEventListener("click", function(){
	followbutton.classList.toggle("following");
});
