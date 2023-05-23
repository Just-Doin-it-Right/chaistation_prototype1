let menuIcon = document.querySelector(".menu_icon")
let dropdownMenu = document.querySelector(".dropdown_menu")
let header = document.querySelector("header")
let copyBtns = document.querySelectorAll(".copy_icon")
let phoneNum = document.querySelectorAll(".the_number")
// Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");
let dropdownMenue_isopen = false;

menuIcon.addEventListener('click', () => {
   if (dropdownMenue_isopen) {
      dropdownMenu.style.display = "none";
      dropdownMenue_isopen = false;
   }
   else {
      dropdownMenu.style.display = "block";
      dropdownMenue_isopen = true;
   }
})
document.addEventListener('scroll', () => {
   dropdownMenu.style.display = "none";
   dropdownMenue_isopen = false;
})
copyBtns.forEach((copyBtn)=>{
copyBtn.addEventListener('click',()=>{
           /* Get the text from the <p> element */
             text = copyBtn.parentNode.querySelector('.the_number').innerText;
           /* Create a temporary textarea element */
           var textarea = document.createElement("textarea");
           textarea.value = text;
   
           /* Append the textarea to the body */
           document.body.appendChild(textarea);
   
           /* Select the text inside the textarea */
           textarea.select();
   
           /* Copy the selected text */ 
           document.execCommand("copy");
   
           /* Remove the temporary textarea */
           document.body.removeChild(textarea);

         })
      });
// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

// menuImage.forEach((menuImage)=>{
//     menuImage.addEventListener('click', ()=>{
//        menuImage.style.display ="block"
//        menuImage.style.maxWidth ="100%"
//        menuImage.style.margin ="0%"
//        menuImage.style.position ="absolute"
//        menuImage.style.left ="0%"
//        menuImage.style.right ="0%"
//     });
//   });