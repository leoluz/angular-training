(function () {

    angular
        .module('store.product')
        .controller('ProductViewController', ['$routeParams', '$window', 'dataService', ProductViewController]);
                                            
    function ProductViewController($routeParams, $window, dataService)      {
        var productViewCtrl = this;
        productViewCtrl.product = null; 

        dataService.getProductById($routeParams.id)
            .then(function(product) {
            // success
            productViewCtrl.product = product;
        },
                  function () {
            // error
            $window.location = "#/";
        });
    }

})();

