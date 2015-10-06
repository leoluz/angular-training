(function () {

    angular
        .module('store.products', [])
        .directive('productDetails', productDetails);

        function productDetails() {
            return {
                restrict: 'E',
                templateUrl: 'templates/product-details.html'
                }
        }

})();