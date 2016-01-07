$(document).ready(function () {
    /*============================================
  google map
  ==============================================*/
    function initialize() {
        var map;
        var location1 = new google.maps.LatLng('47.8038421', '-122.211613');

        var mapOptions = {
            draggable: true,
            // How zoomed in you want the map to start at (always required)
            zoom: 3,
            disableDefaultUI: false,
            center: location1,
            scrollwheel: true,
            styles: [{ featureType: "landscape", stylers: [{ saturation: -100 }, { lightness: 65 }, { visibility: "on" }] }, { featureType: "poi", stylers: [{ saturation: -100 }, { lightness: 51 }, { visibility: "simplified" }] }, { featureType: "road.highway", stylers: [{ saturation: -100 }, { visibility: "simplified" }] }, { featureType: "road.arterial", stylers: [{ saturation: -100 }, { lightness: 30 }, { visibility: "on" }] }, { featureType: "road.local", stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: "on" }] }, { featureType: "transit", stylers: [{ saturation: -100 }, { visibility: "simplified" }] }, { featureType: "administrative.province", stylers: [{ visibility: "off" }]/**/ }, { featureType: "administrative.locality", stylers: [{ visibility: "off" }] }, { featureType: "administrative.neighborhood", stylers: [{ visibility: "on" }]/**/ }, { featureType: "water", elementType: "labels", stylers: [{ visibility: "on" }, { lightness: -25 }, { saturation: -100 }] }, { featureType: "water", elementType: "geometry", stylers: [{ hue: "#ffff00" }, { lightness: +10 }, { saturation: -97 }] }]
        };
        map = new google.maps.Map(document.getElementById('map-container'),
            mapOptions);

        var marker = new google.maps.Marker({
            position: location1,
            map: map,
            icon: { url: 'img/iconmarker.png' }
        });

    }

    google.maps.event.addDomListener(window, 'load', initialize);
    
    /*============================================
 contact-box-info
 ==============================================*/
    $("#toggle-contact").click(function () {
        $("#contact-box").slideToggle("slow");
    });

});