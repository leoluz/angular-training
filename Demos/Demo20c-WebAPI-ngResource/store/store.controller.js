(function () {

    angular
        .module('store')
        .controller('StoreController', ['productRestService','$filter', StoreController]);

    function StoreController(productRestService, $filter) {
        var storeCtrl = this;
        storeCtrl.showPictures = false;
        storeCtrl.displayLimit = 5;
        storeCtrl.isBusy = true;
        storeCtrl.newProduct = new productRestService();

        storeCtrl.products = productRestService.query(
            function() {storeCtrl.isBusy = false;}
        );

        storeCtrl.deleteProduct = function(product) {
            product.$delete();
            storeCtrl.products = $filter('filter')(storeCtrl.products, { id: product.id }, function (obj, test) { return obj !== test; });
        };

        storeCtrl.addProduct = function() {
            storeCtrl.newProduct.$save();  
            storeCtrl.products.push(storeCtrl.newProduct);
        };
    }

})();