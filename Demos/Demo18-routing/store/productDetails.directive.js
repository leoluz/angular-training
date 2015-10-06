(function () {

    angular
        .module('store.product')
        .directive('productDetails', productDetails);

        function productDetails() {
            return {
                restrict: 'E',
                scope: {
                    product: '=',
                    showPictures: '='
                },
                templateUrl: 'templates/product-details.html',
                controller: ProductController,
                controllerAs: 'productCtrl'
            };
        }

    function ProductController($routeParams, $window, dataService) {
        
        var productCtrl = this;
        productCtrl.percentIncrease = 10;
        
        this.increasePrice = function (product) {
            product.price = product.price * (1 + 10 / 100);
            product.modifiedDate = new Date();
        };
    }

})();