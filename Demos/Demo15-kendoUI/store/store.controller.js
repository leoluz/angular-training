(function () {

    var app = angular.module('store.main');

    app.controller('StoreController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        this.products = data;
        this.showPictures = false;
        $rootScope.displayLimit = 5;
    }]);

    var data = [
        {
            name: 'Trek SSL 2015',
            price: 999.9,
            modifiedDate: '2015-04-19',
            description: 'Racing bike.',
            fixedPrice: true,
            discontinued: false,
            imageUrl: 'img/trek.jpg',
            reviews: []
        },
        {
            name: 'City XT 2015',
            price: 659.5,
            modifiedDate: '2015-03-01',
            description: 'City bike.',
            fixedPrice: false,
            discontinued: false,
            imageUrl: 'img/city.jpg',
            reviews: [
                {
                    "stars": 5,
                    "postedDate": "2015-03-26T19:15",
                    "comment": "yes!",
                    "author": "me@gmail.com"

                }
            ]
        }
    ];

})();

