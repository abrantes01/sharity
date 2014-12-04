'use strict';
angular.module('app',
        [
            'ngRoute',
            'ngAnimate',
            'ui.router',
            'sails.io',
            'app.home',
            'app.controllers'
        ]).config([
        '$stateProvider', '$httpProvider', '$urlRouterProvider', '$sailsSocketProvider',
        function ($stateProvider, $httpProvider, $urlRouterProvider, $sailsSocketProvider) {

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            $stateProvider
                .state("index", {
                    url: "/",
                    templateUrl: "/views/home.html",
                    controller: "homeCtrl",
                })
            // Send to login if the URL was not found
            $urlRouterProvider.otherwise("/");
        }
    ]).run(['$rootScope', '$state', '$sailsSocket',
        function ($rootScope, $state, $sailsSocket) {
        $rootScope.$on("$stateChangeStart", function (event, toState) {


            io.connect();
        });


    }]);
