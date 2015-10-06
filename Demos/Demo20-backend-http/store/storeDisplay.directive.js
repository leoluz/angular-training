(function () {

    angular
        .module('store')
        .directive('storeDisplay', storeDisplay);
    
    function storeDisplay() {
        return {
            restrict: 'E',
            templateUrl: 'templates/store-display.html',
            controller: DisplayController,
            controllerAs: 'displayCtrl'
        };
    }

    function DisplayController() {
        this.increaseProductsDisplayed = function (ctrl) {
            ctrl.displayLimit++;
        };
        this.decreaseProductsDisplayed = function (ctrl) {
            ctrl.displayLimit--;
        };
        this.displayLimitLabel = function (ctrl) {
            return ctrl.displayLimit + " product" + (ctrl.displayLimit > 1 ? "s" : "");            
        }
    }

})();