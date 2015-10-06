(function () {

    angular.module('store.config', ['ngRoute'])
        .config(["$routeProvider", RouteConfig]);

    function RouteConfig($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/productsList.html"
            })
            .when("/product/:id", {
                controller: "ProductViewController",
                controllerAs: "productViewCtrl",
                templateUrl: "views/productView.html"
            })
            .otherwise({ redirectTo: "/" });
    }

})();