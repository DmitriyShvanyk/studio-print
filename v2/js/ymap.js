(function($){	
	   
    /*-------------------------------------------------*/
    /* =  yandex map
    /*-------------------------------------------------*/

    ymaps.ready(init);
    var myMap;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [53.8894,27.6906],
            zoom: 16,
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"],
            controls: ['typeSelector', 'trafficControl', 'fullscreenControl']
        });

        myMap.controls.add(new ymaps.control.ZoomControl({
            options: {
                position: {
                    right: 10,
                    top: 180
                }
            }
        }));

        myPlacemark = new ymaps.Placemark([53.8899,27.6908], {
            balloonContent: '<div class="ballon" title="Минск, ул. Илимская, 10 к.1">Минск, ул. Илимская, 10 к.1</div>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon-marker.png',
            iconImageSize: [75, 89],
            iconImageOffset: [-20, -75],
            balloonContentSize: [170, 20],
            balloonLayout: "default#imageWithContent",
            balloonImageHref: '',
            balloonImageOffset: [-20, -75],
            balloonImageSize: [75, 89],
            balloonShadow: false,
            balloonAutoPan: false
        });

        myMap.geoObjects.add(myPlacemark);

        myMap.geoObjects.events.add([
            'balloonopen'
        ], function(e) {
            var geoObject = e.get('target');
            myMap.panTo(geoObject.geometry.getCoordinates(), {
                delay: 0
            });
        });
    }
	
})(window.jQuery);