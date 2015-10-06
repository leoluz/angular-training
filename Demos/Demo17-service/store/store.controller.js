(function () {

    var app = angular.module('store.main');

    app.controller('StoreController', ['$scope', '$rootScope', '$http', 'dataService', function ($scope, $rootScope, $http, dataService) {
        //this.products = [];
        this.showPictures = false;
        $rootScope.displayLimit = 5;
        
        var store = this;
        store.isBusy = true;
        store.data = dataService;

        if (dataService.isReady() == false) {
            store.isBusy = true;

            dataService.getProducts()
                .then(function () {
                // success
            },
            function () {
                // error
                alert("fail to load products");
            })
                .then(function () {
                store.isBusy = false;
            });
        }
    }]);

})();

