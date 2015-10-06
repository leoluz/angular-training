(function () {

    angular
        .module('store')
        .controller('StoreController', ['$http', 'dataService', StoreController]);                                        
                                        
    function StoreController($http, dataService) {
        var storeCtrl = this;
        storeCtrl.showPictures = false;
        storeCtrl.displayLimit = 5;
        storeCtrl.isBusy = true;        
        storeCtrl.data = dataService;        

        if (dataService.isReady() == false) {
            storeCtrl.isBusy = true;

            dataService.getProducts()
                .then(function () {
                // success
            },
            function () {
                // error
                alert("fail to load products");
            })
                .then(function () {
                storeCtrl.isBusy = false;
            });
        }
    }

})();

