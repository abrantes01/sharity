'use strict';
angular.module('app',
        [
            'ngRoute',
            'ngAnimate',
            'ui.router',
            'sails.io',
            'app.home',
            'app.company',
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
                    controller: "homeCtrl"
                })
                .state("company",{
                    url: "/company/:id",
                    templateUrl: "/views/Company/home.html",
                    controller: "companyCtrl",
                    resolve: {
                        data: [
                            '$stateParams','$sailsSocket',
                            function($stateParams,$sailsSocket){
                                return $sailsSocket
                                    .get('localhost:1337' + '/company/' + $stateParams.id + '?populate=[challenges,donations]')
                                    .then(function(response) {
                                        console.log(response);
                                        return response.data;
                                    },function(err){
                                        console.log(err);
                                    });
                            }
                        ]
                    }

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
