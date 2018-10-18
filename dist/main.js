$(document).ready(function(){
    $('.intro__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),

        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 4
    
                }
            }
        ]
    });
  });

  
(function (doc, $) {


    function variant() {

        $('.upper__nav, .bottom__nav').slideUp();
        console.log('Do variant manipulation');

    }

    function event() {

        $(doc).on('click', '.menu-btn', function (e) {
            $('.upper__nav, .bottom__nav').slideToggle();
            console.log(this);
        });

    }

})(document, jQuery);
 

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

     
        
   
       
     