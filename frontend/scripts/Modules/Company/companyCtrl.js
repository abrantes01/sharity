angular.module('app.company', []).controller('companyCtrl', [
    '$scope', '$sailsSocket','data',
    function ($scope, $sailsSocket,data) {
        $scope.company = data;
        console.log($scope.company);

        $scope.challenges = data.challenges;
        console.log($scope.challenges);

    }])
.controller('allCompanyCtrl',['$scope', '$sailsSocket',
        function ($scope, $sailsSocket) {

            $sailsSocket
                .get(appConfig.appUrl + '/company')
                .success(function (companies) {
                    $scope.companies = companies;
                })
                .error(function (err) {
                    logger.logError('Erreur lors de la récupération des messages.');
                });
        }
    ])