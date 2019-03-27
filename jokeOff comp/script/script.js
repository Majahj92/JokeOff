


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



let likeIcon = document.querySelector('.jokeContainer__like'); 

likeIcon.addEventListener('click', function(){
	let likeIconSrc = likeIcon.getAttribute("src")
	if(likeIconSrc === "img/heart_line.svg"){
		likeIcon.src = "img/heart_colored.svg";
	}else{
		likeIcon.src = "img/heart_line.svg";
	}
});




// SessionStorage til at oprette en ny joke

let jokeSubmit = document.querySelector(".jokeInput");
let jokeInput = document.querySelector(".writeJoke");

jokeSubmit.addEventListener('click', function(){
	var jokeText = jokeInput.value;
	sessionStorage.setItem("joke", jokeText);
	console.log(sessionStorage);
});
console.log(sessionStorage);