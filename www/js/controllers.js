"use strict";

app.controller('ProfileCtrl', function ($scope) {
    $scope.applyThis = function (s) {
        console.log(s);
        //$scope.s.color = {
        //    'background-color': '#387ef5',
        //    'color': 'white'
        //};
    }
})

.controller('InstagramCtrl', function ($scope) {

})


$(window).resize(function () {
    if ($(window).width() <= 1920 && $(window).width() > 1024) {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
        })
    }

    if ($(window).width() <= 1024 && $(window).width()>767)
    {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
        })
    }

    if ($(window).width() <= 767) {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
        })
    }

})

