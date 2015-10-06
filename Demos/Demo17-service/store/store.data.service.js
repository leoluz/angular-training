(function () {

    angular.module('store.main', [])
        .factory("dataService", ["$http", "$q", dataService]);
                                
    function dataService($http, $q) {

        var _products = [];
        var _isInit = false;

        var _isReady = function () {
            return _isInit;
        }

        var _getProducts = function () {

            var deferred = $q.defer();

            $http.get("data/products.json")
                .then(function (result) {
                // Successful
                angular.copy(result.data, _products);
                _isInit = true;
                deferred.resolve();
            },
            function () {
                // Error
                deferred.reject();
            });

            return deferred.promise;
        };

        function _findProduct(id) {
            var found = null;

            // jQuery alternative to get the "return"
            //$.each(_products, function (i, item) {
            //    if (item.id == id) {
            //        found = item;
            //        return false;
            //    }
            //});
            angular.forEach(_products, function (item) {
                if (item.id == id) {
                    found = item;
                }
            });

            return found;
        }

        var _getProductById = function (id) {
            var deferred = $q.defer();

            if (_isReady()) {
                var product = _findProduct(id);
                if (product) {
                    deferred.resolve(product);
                } else {
                    deferred.reject();
                }
            } else {
                _getProducts()
                    .then(function () {
                    // success
                    var product = _findProduct(id);
                    if (product) {
                        deferred.resolve(product);
                    } else {
                        deferred.reject();
                    }
                },
                          function () {
                    // error
                    deferred.reject();
                });
            }

            return deferred.promise;
        };

        return {
            products: _products,
            getProducts: _getProducts,
            isReady: _isReady,
            getProductById: _getProductById
        };
    };



})();