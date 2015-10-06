(function () {

    angular
        .module('store.product')
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

        var reviewCtrl = this;
        reviewCtrl.review = {};
        
        this.addReview = function (product) {
            reviewCtrl.review.postedDate = new Date();
            product.reviews.push(reviewCtrl.review);
            reviewCtrl.review = {};
        };

        this.reset = function () {
            reviewCtrl.review = {};
        };

        this.reset();
    }
    
})();