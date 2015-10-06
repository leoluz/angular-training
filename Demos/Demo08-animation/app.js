(function () {
    var app = angular.module('store', ['ngAnimate']);

    app.controller('StoreController', function () {
        this.products = data;
        this.showPictures = true;
    });

    var data = [
        {
            name: 'Trek SSL 2015',
            price: 999.9,
            modifiedDate: '2015-04-19',
            description: 'Racing bike.',
            fixedPrice: true,
            discontinued: true,
            imageUrl: 'img/trek.jpg'
        },
        {
            name: 'City XT 2015',
            price: 659.5,
            modifiedDate: '2015-03-01',
            description: 'City bike.',
            fixedPrice: false,
            discontinued: false,
            imageUrl: 'img/city.jpg'
        }
    ];

})();


