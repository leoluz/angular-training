(function () {

    angular
        .module('store.product')
        .directive('productReviewList', productReviewList);

        function productReviewList() {
            return {
                restrict: 'E',
                templateUrl: 'templates/product-review-list.html',
                controller: ReviewListController,
                controllerAs: 'reviewListCtrl'
                }
        }
    
    function ReviewListController($routeParams, $window, dataService) {

        var reviewListCtrl = this;
        reviewListCtrl.reviews = [];

        dataService.getProductById($routeParams.id)
            .then(function(product) {
            // success
            reviewListCtrl.reviews = product.reviews;
        },
                  function () {
            // error
            $window.location = "#/";
        });
    }

})();