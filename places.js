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

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = "Date: " + date+ '<br>' +"Time: "+time;
 
document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day: ' + daylist[day];


