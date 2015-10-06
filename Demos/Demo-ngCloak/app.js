(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        sleep(2000);
        this.product = data;
    });

    var data = 
        {
            name: 'Trek SSL 2015',
            price: 999.9,
            description: 'Racing bike.'
        };

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
})();