(function () {

    angular
        .module('store.productReview')
        .directive('productReviewForm', productReviewForm);

    function productReviewForm() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-review-form.html'
        };
    }
    
})();