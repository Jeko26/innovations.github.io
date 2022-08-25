$(".accordion").accordion();
$(".accordion").accordion({ heightStyle: "content" });

var swiper = new Swiper(".swiper__container", {
    cssMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    mousewheel: true,
    keyboard: true,
  });
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [58.0446, 38.8426],
            zoom: 11,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([58.0455537190774,38.83181602357423], {
            hintContent: 'Рыбинск?',
            balloonContent: 'Рыбинск!'
        }, {
            iconLayout: 'default#image',
            iconImageSize: [40, 40],
            iconImageOffset: [-5, -38]
        })

    myMap.geoObjects
        .add(myPlacemark)
});