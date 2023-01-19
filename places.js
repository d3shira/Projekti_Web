const swiper = new Swiper('.swiper', {
 
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



const divs = document.getElementsByClassName("qyteti");
for(const div of divs){
    div.addEventListener("click", myFunction);
}



