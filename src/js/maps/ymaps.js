'use strict';
ymaps.ready(function () {
    const maps  = document.querySelectorAll('.map');
    maps.forEach(mapDiv => {
        let zoom = 16;
        const id = mapDiv.getAttribute('id');
            let icon = mapDiv.getAttribute('data-icon'),
            pointsValue = mapDiv.getAttribute('data-points'),
            title = mapDiv.getAttribute('data-title');
                if (mapDiv.hasAttribute('data-zoom')){
                    zoom = mapDiv.getAttribute('data-zoom');
                }
        let points = JSON.parse(pointsValue ? pointsValue : '[]');

        if (points.length > 0) {
            let base = points[0];


            const myMap = new ymaps.Map(id, {
                    center: [base.lat, base.lng],
                    zoom: zoom
                }, {
                    searchControlProvider: 'yandex#search'
                }),

                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: title,
                    //balloonContent: 'Это красивая метка'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref:  icon,
                    // Размеры метки.
                    iconImageSize: [28, 42],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-14, -42]
                });

            myMap.geoObjects
                .add(myPlacemark);
        }
    });
});
