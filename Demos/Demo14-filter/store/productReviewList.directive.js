(function () {

    angular
        .module('store.productReview')
        .directive('productReviewList', productReviewList);

        function productReviewList() {
            return {
                restrict: 'E',
                templateUrl: 'templates/product-review-list.html'
                }
        }

})();