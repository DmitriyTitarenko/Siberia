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

      $('.intro__slider').slick({

        dots: true,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500,
        fade: false,
        cssEase: 'ease-in-out',
        adaptiveHeight: false,
    
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
    
                }
            }
        ]
    });