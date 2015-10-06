(function () {

    angular
        .module('store.productReview')
        .directive('productReviewForm', productReviewForm);

    function productReviewForm() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-review-form.html',
            controller: ReviewController,
            controllerAs: 'reviewCtrl'
        };
    }

    function ReviewController() {

        this.addReview = function (product) {
            this.review.postedDate = new Date();
            product.reviews.push(this.review);
            this.review = {};
        };

        this.reset = function () {
            this.review = {};
        };

        this.reset();
    }
    
})();