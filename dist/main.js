function initMap() {
    const coordinates = {lat: 50.452243, lng: 30.678515},
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates
    }),
    

    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        animation: google.maps.Animation.BOUNCE
    });
}

google.maps.event.addDomListener(window, "load", initMap);
