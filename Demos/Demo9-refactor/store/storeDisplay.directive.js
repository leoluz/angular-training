(function () {

    angular
        .module('store.display', [])
        .directive('storeDisplay', storeDisplay);
    
    function storeDisplay() {
        return {
            restrict: 'E',
            templateUrl: 'templates/store-display.html',
            controller: DisplayController,
            controllerAs: 'displayCtrl'
        };
    }

    function DisplayController($scope, $rootScope) {
        this.increaseProductsDisplayed = function () {
            $rootScope.displayLimit++;
        };
        this.decreaseProductsDisplayed = function () {
            $rootScope.displayLimit--;
        };
        this.displayLimitLabel = function () {
            return $rootScope.displayLimit + " product" + ($rootScope.displayLimit > 1 ? "s" : "");            
        }
    }

})();