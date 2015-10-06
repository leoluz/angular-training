(function () {

    angular
        .module('store')
        .factory('productRestService', function($resource) {        
            var url = 'http://localhost:3823/Api/products/:id';
            return $resource(url,{id:'@id'},{
                update: { method: 'PUT'}
            });
        });

})();