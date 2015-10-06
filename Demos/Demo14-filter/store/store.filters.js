(function () {

    angular
        .module('store.main')
        .filter('decorate', decorate);
    
    function decorate() {
        function decorateFilter(input, prefix, suffix) {
            var input = input || '';
            var prefix = prefix || ''; 
            var suffix = suffix || '';
            // Display prefix and/or suffix only if we have an input
            return ((input.length > 0) ? prefix : '') + input + ((input.length > 0) ? suffix : '');
        }
        return decorateFilter;
    };
    

})();

