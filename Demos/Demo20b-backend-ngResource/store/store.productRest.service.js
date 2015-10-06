(function () {

    angular
        .module('store')
        .factory('productRestService', function($resource, Backand) {
            var url = Backand.getApiUrl() + '/1/objects/products';
            return $resource(url, {}, {
                get: {
                    method: 'GET',
                    cache: true,
                    headers: { 'AnonymousToken': 'f69032fe-d306-4d6d-8f9a-ac1a059c8122'}
                },
                post: {
                    method: 'POST',
                    headers: { 'AnonymousToken': 'f69032fe-d306-4d6d-8f9a-ac1a059c8122'}
                },
                save: {
                    method: 'POST',
                    headers: { 'AnonymousToken': 'f69032fe-d306-4d6d-8f9a-ac1a059c8122'}
                },
                delete: {
                    method: 'DELETE',
                    headers: { 'AnonymousToken': 'f69032fe-d306-4d6d-8f9a-ac1a059c8122'}
                },
                query: {
                    method: 'GET',
                    cache: true,
                    headers: { 'AnonymousToken': 'f69032fe-d306-4d6d-8f9a-ac1a059c8122'}
                }
            });
        });


})();