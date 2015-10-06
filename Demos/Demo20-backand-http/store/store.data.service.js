(function () {

    angular
        .module('store')
        .factory("dataService", ["$http", "$q", "Backand", dataService]);

    function dataService($http, $q, Backand) {

        var _products = [];
        var _isInit = false;

        var _isReady = function () {
            return _isInit;
        }

        var _getProducts = function () {

            var deferred = $q.defer();

            var url = Backand.getApiUrl() + '/1/objects/products';

            var config = {
                headers: {
                    'AnonymousToken': 'f69032fe-d306-4d6d-8f9a-ac1a059c8122'
                }
            };            

            $http.get(url, config)
                .then(function (result) {
                        // Successful
                        angular.copy(result.data.data, _products);
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

            // Data is already local
            if (_isReady()) {
                var product = _findProduct(id);
                if (product) {
                    deferred.resolve(product);
                } else {
                    deferred.reject();
                }
            } else {
                // Fetch online
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