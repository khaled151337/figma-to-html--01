let navbar = document.querySelector("nav")

window.addEventListener("scroll", ()=> {
   ;
 let test = document.documentElement.scrollTop;

 if(test > 100){
    navbar.classList.add('NAV_ANIMATION');
    navbar.style.position = "fixed";
 }else{
    navbar.classList.remove('NAV_ANIMATION');
    navbar.style.position = "relative";
 }
});
