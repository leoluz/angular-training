(function () {

    angular
        .module('store')
        .filter('decorate', decorate)
        .filter('customCurrency', customCurrency);

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


    function customCurrency () {
        return function (input, symbol, before) {

            if (isNaN(input)) {
                return input;
            } else {

                var symbol = symbol || '$';
                var before = before === undefined ? true : before;

                if (before === true) {
                    return symbol + input;
                } else {
                    return input + symbol;
                }
            }
        }
    };

})();

