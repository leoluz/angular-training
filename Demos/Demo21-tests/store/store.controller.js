(function () {

    angular
        .module('store')
        .controller('StoreController', ['dataService', StoreController]);                                        
                                        
    function StoreController(dataService) {
        var storeCtrl = this;
        storeCtrl.showPictures = false;
        storeCtrl.displayLimit = 5;
        storeCtrl.isBusy = true;        
        storeCtrl.data = dataService;
        
        
        // For unit testing purpose
        storeCtrl.name = "Laurent";
        this.SayHello = function()
        {
            storeCtrl.greeting = "Hello " + storeCtrl.name;
        }

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

