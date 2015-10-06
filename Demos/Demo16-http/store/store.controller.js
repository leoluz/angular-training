(function () {

    var app = angular.module('store.main');

    app.controller('StoreController', ['$scope', '$rootScope', '$http', '$log', function ($scope, $rootScope, $http, $log) {
        this.products = [];
        this.showPictures = false;
        $rootScope.displayLimit = 5;
        $scope.isBusy = true;
        var store = this;

        $http.get("data/products.json")
            .then(function (result) {
                        // Successful
                        angular.copy(result.data, store.products);
            $log.log("Products successfully loaded!");
                    },
                    function () {
                        // Error
                        alert("fail to load products");
                    }
                 )
            .then(function () {
                $scope.isBusy = false;
            });
    }]);

})();

