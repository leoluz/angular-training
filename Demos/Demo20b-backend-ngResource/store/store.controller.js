(function () {

    angular
        .module('store')
        .controller('StoreController', ['productRestService','$filter', StoreController]);                                        
                                        
    function StoreController(productRestService, $filter) {
        var storeCtrl = this;
        storeCtrl.showPictures = false;
        storeCtrl.displayLimit = 10;
        storeCtrl.isBusy = true;        
    
        
        productRestService.query(function(result) {
            storeCtrl.products = result.data;
            storeCtrl.isBusy = false; 
        });
        
        this.removeProduct = function(id) {
            productRestService.delete({"id": id});
            storeCtrl.products = $filter('filter')(storeCtrl.products, { id: id }, function (obj, test) { return obj !== test; });
        }
        
        this.newProduct = function() {
            var newProduct = {
                "name": "new product test",
                "price": 999.9,
                "modifiedDate": "2015-04-19",
                "description": "Racing bike.",
                "fixedPrice": true,
                "discontinued": true,
                "imageUrl": "img/trek.jpg",
                "reviews": null
            };
            productRestService.post(newProduct, function(result) {
                newProduct.id = result.__metadata.id;
                storeCtrl.products.push(newProduct);
            });
        }
        

    }

})();

