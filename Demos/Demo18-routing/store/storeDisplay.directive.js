(function () {

    angular
        .module('store')
        .directive('storeDisplay', storeDisplay);
    
    function storeDisplay() {
        return {
            restrict: 'E',
            scope: {
                showPictures: '=',
                displayLimit: '='
            },
            templateUrl: 'templates/store-display.html',
            controller: DisplayController,
            controllerAs: 'displayCtrl',
            // link function so we can modify displayLimit on the scope and update other views
            // we can't do that from the Controller
            link: function(scope, element, attrs) {
                scope.increaseProductsDisplayed = function () {
                    scope.displayLimit++;        
                };
                scope.decreaseProductsDisplayed = function () {
                    scope.displayLimit--;          
                };
            }
        };
    }

    function DisplayController() {
        this.displayLimitLabel = function (displayLimit) {
            return displayLimit + " product" + (displayLimit > 1 ? "s" : "");            
        }
    }

})();