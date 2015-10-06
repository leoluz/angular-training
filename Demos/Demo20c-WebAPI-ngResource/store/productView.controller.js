(function () {

    angular
        .module('store.product')
        .controller('ProductViewController', ['$routeParams', '$window', 'productRestService', ProductViewController]);
                                            
    function ProductViewController($routeParams, $window, productRestService)      {
        var productViewCtrl = this;
        productViewCtrl.product = null;

        productRestService.get({ id: $routeParams.id }, function(result) {
            productViewCtrl.product = result;
        });
    }

})();

