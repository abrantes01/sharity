'use strict';
angular.module('app',
        [
            'ngRoute',
            'ngAnimate',
            'ui.router',
            'sails.io',
            'app.home',
            'app.company',
            'app.charity',
            'app.controllers',
            'ui.bootstrap'
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
                    resolve: {
                        challenges: [
                            '$sailsSocket',
                            function($sailsSocket){
                                return $sailsSocket
                                    .get(appConfig.appUrl + '/challenge')
                                    .then(function(response) {
                                        return response.data;
                                    }, function(err){
                                        console.log(err)
                                    });
                            }
                        ]
                    }
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
                                    .get(appConfig.appUrl + '/company/' + $stateParams.id)
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
                .state("allCompanies",{
                    url: "/companies",
                    templateUrl: "/views/Company/displayAll.html",
                    controller: "allCompanyCtrl"
                })
                .state("charity",{
                    url: "/charity/:id",
                    templateUrl: "/views/Charity/home.html",
                    controller: "charityCtrl",
                    resolve: {
                        data: [
                            '$stateParams','$sailsSocket',
                            function($stateParams,$sailsSocket){
                                return $sailsSocket
                                    .get(appConfig.appUrl + '/charity/' + $stateParams.id)
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
