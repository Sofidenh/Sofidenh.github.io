// JavaScript Document

function myMap() {
var myLatlng = new google.maps.LatLng(51.040955, 3.719832);
var mapOptions = {
  zoom: 15,
  center: myLatlng
};
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:""
});

marker.setMap(map);
}


/* Portfolio */

(function(){
  
var counter = 0,
    $items = document.querySelectorAll('.diy-slideshow figure'),
    numItems = $items.length; 


var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);  
  

  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });
  

  $items[itemToShow].classList.add('show');    
};


document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);
  
})();  
