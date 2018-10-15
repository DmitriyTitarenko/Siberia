$(document).ready(function(){
    $('.intro__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        prevArrow: '<img class="btnPrev" src="img/nextArrow.png">',
        nextArrow: '<img class="btnNest" src="img/nextArrow.png">'
    });
  });
 

function map(initmap) {
    const coordinates = {lat: 55.044757, lng: 82.897426},
    markerImage = 'img/marker.png',
    zoom = 17,
    
   
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: zoom,
        disableDefaultUI: true
        
    });

    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage,
    });

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){ marker.setAnimation(null); }, 666666);
}
      
      map('initmap');

     
        
   
       
     