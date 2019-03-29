 

// Tage fat i alle links
let allTabs = document.querySelectorAll('.tabs'); 

//lykke - checker for click event på links
for (let ii = 0; ii < allTabs.length; ++ii) {
  allTabs[ii].addEventListener('click', function () {

    var i, tabContent; 

    // sætter tabContent til at indholde de forskellige sectioner
    tabContent = document.querySelectorAll(".tabContent");
    //lykke - kører igennem hver section og sætter display til none
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    //ny variable der indeholder navnet på 2. position på den trykked knap (så vi for den rigtige class name)
    var getClass = this.classList[1];
    // variable der tager fat i den section med id der passer til den trykkede knaps class name
    var currentTab = document.querySelector('#'+getClass);
    // sætter section til display block
    currentTab.style.display = "block";

  });
}


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

let followbutton = document.querySelector(".followbut");

followbutton.addEventListener("click", function(){
    followbutton.classList.toggle("following");
});
