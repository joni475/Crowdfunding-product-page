  // humburger
  const hamburger = document.querySelector(".hamburger");
  const ul = document.querySelector(".nav-ul");
  const hamburgerX = document.querySelector(".hamburgerX")
  //nav overlay
 const navOverlay = document.querySelector(".nav-overlay");
  
  hamburger.addEventListener("click", ()=>{
      ul.classList.add("show");
      navOverlay.classList.add("show");
      hamburgerX.classList.add("show");
      hamburger.style.visibility ="hidden";
  });
   hamburgerX.addEventListener("click", ()=>{
      ul.classList.remove("show");
      hamburgerX.classList.remove("show");
      navOverlay.classList.remove("show");
      hamburger.style.visibility ="visible";
    })


  //bookmark
  let bookmarkSubscribes = document.querySelector(".bookmark-image");
  let bookmarkSubscribe = document.querySelector(".bookmark-subscribe")
  let bookmarkImg = document.querySelector(".bookmark-img");
  let bookmarkA = document.querySelector(".bookmark");
 

  bookmarkImg.addEventListener("click", function(){
    bookmarkSubscribe.classList.add("show");
    bookmarkA.textContent = "Bookmarked";
  });
   
bookmarkSubscribe.addEventListener("click", function(){
    bookmarkSubscribe.classList.remove("show");
     bookmarkA.textContent ="bookmark";
});



//modal popup 
let modalpopup = document.querySelector(".modal-popup");
let bookmark = document.querySelector(".button");
let bookmarkAnchor = document.querySelector(".bookmark");

let buttonModal = document.querySelector(".button-modal");
//

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
 let buttonPledgeOne = document.querySelector(".pledge-box-2");

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

//div overlay 
let overlay = document.querySelector(".overlay");


function overlayOn(){
  overlay.style.display="block";
}
function overlayOff(){
  overlay.style.display="none";
}

bookmark.addEventListener("click", function(){
  modal.classList.add("show") + overlayOn();
})
buttonX.addEventListener("click", function(){
  modal.classList.remove("show") + overlayOff();
});
buttonModal.addEventListener("click", ()=> {
  modalpopup.classList.remove("show");
  overlayOff();
});


       radioOne.addEventListener("click", ()=>{
        emailID.classList.add("show");
        boxOne.style.border ="2px solid hsl(176, 72%, 28%)";
         submitEmail.addEventListener("click", ()=>{
          modalpopup.classList.add("show");
          emailID.classList.remove("show") + modal.classList.remove("show");
         });
       });
       radioTwo.addEventListener("click",()=>{
         pledgeShowOne.classList.add("show");
         boxTwo.style.border ="2px solid hsl(176, 72%, 28%)";
         pledgeShowTwo.classList.remove("show");
       });
       radioThree.addEventListener("click",()=>{
        pledgeShowTwo.classList.add("show");
        boxThree.style.border ="2px solid hsl(176, 72%, 28%)";
        pledgeShowOne.classList.remove("show");
       });

buttonBamboo.addEventListener("click", function(){
  modal.classList.add("show") + overlayOn();
  pledgeShowOne.classList.add("show");
  pledgeShowTwo.classList.remove("show");
});
buttonBlack.addEventListener("click", ()=>{
  modal.classList.add("show") + overlayOn();
  pledgeShowTwo.classList.add("show");
  pledgeShowOne.classList.remove("show");
})

buttonPledgeOne.addEventListener("click",()=> {
 modal.classList.remove("show") + modalpopup.classList.add("show");
});
buttonPledgeTwo.addEventListener("click",()=> {
 modal.classList.remove("show") + modalpopup.classList.add("show");
});
