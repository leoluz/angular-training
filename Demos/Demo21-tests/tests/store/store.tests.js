'use strict';

describe('Testing Controllers', function(){

    var storeCtrl;
    var mockDataService;    

    beforeEach(function(){
            module(function($provide){
            $provide.factory('dataService', ['$http', '$q', function($http, $q)
             {
                 var _products= [
                     {
                         "id":  1,
                         "name": "Trek SSL 2016",
                         "price": 799.9,
                         "modifiedDate": "2015-04-19",
                         "description": "Racing bike.",
                         "fixedPrice": true,
                         "discontinued": true,
                         "imageUrl": "img/trek.jpg",
                         "reviews": [ ]
                     },
                     {
                         "id":  2,
                         "name": "City XT 2015",
                         "price": 659.5,
                         "modifiedDate": "2015-03-01",
                         "description": "City bike.",
                         "fixedPrice": false,
                         "discontinued": false,
                         "imageUrl": "img/city.jpg",
                         "reviews": [
                             {
                                 "stars": 5,
                                 "postedDate": "2015-03-26T19:15",
                                 "comment": "yes!",
                                 "author": "me@gmail.com"

                             }
                         ]
                     }
                 ];
                 function _getProducts()
                 {

                 }
                 function _isReady(){}
                 function _getProductById(id){}
                 return{
                     products: _products,
                     getProducts: _getProducts,
                     isReady: _isReady,
                     getProductById: _getProductById
                 };
             }]);
        });
        angular.mock.module('store');
    });
    
    // instanciate StoreController and pass mocked dataservice
    beforeEach(angular.mock.inject(function($controller, dataService){

        mockDataService = dataService;

        storeCtrl = $controller('StoreController', {
            dataService: mockDataService
        });
    }));
    
    // tests start here
    it('should init var', function() {
        expect(storeCtrl.displayLimit).toBe(5);
        expect(storeCtrl.showPictures).toBe(false);
        expect(storeCtrl.isBusy).toBe(true);
    });
    
    it('should get 2 products', function() {
        expect(storeCtrl.data.products).not.toBe(null);
        expect(storeCtrl.data.products.length).toBe(2);
    });
    
    it('should say hello', function() {
        expect(storeCtrl.greeting).toBeUndefined();        
        storeCtrl.SayHello();
        expect(storeCtrl.greeting).toEqual("Hello Laurent");
        storeCtrl.name = "John";
        storeCtrl.SayHello();
        expect(storeCtrl.greeting).toEqual("Hello Joe");
    });
});
