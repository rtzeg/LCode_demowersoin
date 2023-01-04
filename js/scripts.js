

const language = document.querySelector('.language')
document.addEventListener('click' , function(e){
    language.classList.remove('lang-active')
    if(e.target.closest('.current-lang')){
        language.classList.add('lang-active')
    }
    

})


const burger = document.querySelector('.burger'),
    header = document.querySelector('header')

burger.addEventListener('click' , function(e){
    header.classList.toggle('active')
}  )


if(window.innerWidth < 850){
    new Swiper('.portfolio-sites',{
        navigation:{
            nextEl:'.project-next',
            prevEl: '.project-prev'
        },
        pagination:{
            el:'.project-pagination',
            clickable: true,
        }


    }) 
    new Swiper('.swiper-team',{
        navigation:{
            nextEl:'.team-next',
            prevEl: '.team-prev'
        },


    }) 
    new Swiper('.our-business-swiper',{
        pagination:{
            el:'.our-business-pagination',
            clickable: true,
        }
     

    }) 


}



var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}   
 
var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
    
    var listItems = document.querySelectorAll(".animation")   ; 
    function scrolling(e) {
      for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active_1");
        } else {
          listItem.classList.remove("active_1");
        }
      }
    }
 
    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }


    
    let portfolioSitesWrapper =  document.querySelector('.portfolio-sites-2')
    


   

    
    
    
    window.addEventListener("load", function (e) {
      portfolioSitesWrapper.style.height = portfolioSitesWrapper.clientHeight / 2 + 50 + 'px' 

      
    })