(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.product = data;
    });

    var data = 
        {
            name: 'Trek SSL 2015',
            price: 999.9,
            description: 'Racing bike.',
            fixedPrice: true,
            discontinued: false
        };

})();