(function () {

    angular
        .module('store.products', [])
        .directive('productDetails', productDetails);

        function productDetails() {
            return {
                restrict: 'E',
                templateUrl: 'templates/product-details.html',
                controller: ProductController,
                controllerAs: 'productCtrl'
            };
        }

    function ProductController() {
        this.increasePrice = function (product) {
            product.price = product.price * (1 + 10 / 100);
            product.modifiedDate = new Date();
        };
    }

})();