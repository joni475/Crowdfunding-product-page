  // humburger
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".nav-ul");

hamburger.addEventListener("click", function(){
    ul.classList.toggle("show");
});


//modal popup 
let modalpopup = document.querySelector(".modal-popup");
let bookmark = document.querySelector(".button");
let bookmarkAnchor = document.querySelector(".bookmark");
let bookmarkSubscribe = document.querySelector(".bookmark-subscribe");
let buttonModal = document.querySelector(".button-modal");
// modal
let modal = document.querySelector(".modal");
let buttonX = document.querySelector(".x");
//box-1
let radioOne = document.querySelector("#radio-box-one");
let emailID = document.querySelector(".email-id");
let submitEmail = document.querySelector(".submit");
//box-2
 let radioTwo = document.querySelector("#radio-box-two")
 let pledgeShowOne = document.querySelector(".enter-pledge-1");
 let buttonPledge = document.querySelector(".pledge-box-2");
//box-3
let radioThree = document.querySelector("#radio-box-three");
let pledgeShowTwo = document.querySelector(".enter-pledge-2");
let buttonPledgeTwo = document.querySelector(".pledge-box-3");

//button bamboo  -- button black

let buttonBamboo = document.querySelector("#button-bamboo");
let buttonBlack = document.querySelector("#button-black");

// style box

let boxOne = document.querySelector(".box-1");
let boxTwo = document.querySelector(".box-2");
let boxThree = document.querySelector(".box-3");



bookmark.addEventListener("click", function(){
   modal.classList.add("show");
   modal.style.top= "50%";

   bookmarkAnchor.style.color="hsl(176, 72%, 28%)";
   bookmarkAnchor.style.opacity="1";
   bookmarkAnchor.textContent="Bookmarked";
   bookmarkSubscribe.style.position = "absolute";
   bookmarkSubscribe.style.bottom ="0";
   bookmarkSubscribe.style.left ="12px";
   bookmarkSubscribe.style.display="block";
 
 buttonX.addEventListener("click", function(){
   modal.classList.remove("show");

 });


});



radioOne.addEventListener("click", function(){
  emailID.classList.toggle("show");
  boxOne.style.border="1px solid hsl(176, 72%, 28%)";
 
submitEmail.addEventListener("click", function() {
         emailID.classList.remove("show");
         modalpopup.classList.add("show");
        modal.classList.remove("show");
     buttonModal.addEventListener("click", function(){
        modalpopup.classList.remove("show");

        bookmarkAnchor.style.color="hsl(176, 72%, 28%)";
        bookmarkAnchor.style.opacity="1";
        bookmarkAnchor.textContent="Bookmarked";
        bookmarkSubscribe.style.position = "absolute";
        bookmarkSubscribe.style.bottom ="0";
        bookmarkSubscribe.style.left ="12px";
        bookmarkSubscribe.style.display="block";

      })
        
    })
    
  })


radioTwo.addEventListener("click", function(){
 pledgeShowOne.classList.toggle("show");
 boxTwo.style.border="1px solid hsl(176, 72%, 28%)";


});
buttonPledge.addEventListener("click",function(){
  modalpopup.classList.add("show");
  modalpopup.style.zIndex="4";
  modal.classList.remove("show");   
buttonModal.addEventListener("click", function(){
  modalpopup.classList.remove("show");

});
});

radioThree.addEventListener("click", function(){
  pledgeShowTwo.classList.toggle("show");
  boxThree.style.border="1px solid hsl(176, 72%, 28%)";
  
});
buttonPledgeTwo.addEventListener("click", function(){
  modalpopup.classList.add("show");
  modalpopup.style.zIndex="4";
  modal.classList.remove("show");
buttonModal.addEventListener("click", function(){
  modalpopup.classList.remove("show");

  bookmarkAnchor.style.color="hsl(176, 72%, 28%)";
  bookmarkAnchor.style.opacity="1";
  bookmarkAnchor.textContent="Bookmarked";
  bookmarkSubscribe.style.position = "absolute";
  bookmarkSubscribe.style.bottom ="0";
  bookmarkSubscribe.style.left ="12px";
  bookmarkSubscribe.style.display="block";

});


});


//  button bamboo and black

buttonBamboo.addEventListener("click", function(){
  modal.classList.add("show");
  buttonX.addEventListener("click",()=>{
    modal.classList.remove("show");
    
  });

buttonBlack.addEventListener("click", function(){
  modal.classList.add("show");
  modal.style.top= "100%";
  
  bookmarkAnchor.style.color="hsl(176, 72%, 28%)";
  bookmarkAnchor.style.opacity="1";
  bookmarkAnchor.textContent="Bookmarked";
  bookmarkSubscribe.style.position = "absolute";
  bookmarkSubscribe.style.bottom ="0";
  bookmarkSubscribe.style.left ="12px";
  bookmarkSubscribe.style.display="block";
});


});




