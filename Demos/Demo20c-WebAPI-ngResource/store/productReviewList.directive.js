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
    
    function ReviewListController($routeParams, $window, productRestService) {

        var reviewListCtrl = this;
        reviewListCtrl.reviews = [];

        productRestService.get({ id: $routeParams.id }, function(result) {
            reviewListCtrl.reviews = result.reviews;
        });
    }

})();