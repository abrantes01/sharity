angular.module('app.charity', []).controller('charityCtrl',[
    '$scope', '$sailsSocket','data',
    function ($scope, $sailsSocket,data) {
        $scope.charity = data;
        console.log($scope.charity);
        $scope.missions = $scope.charity.missions;

    }])
   .controller('allCharityCtrl',['$scope', '$sailsSocket',
        function ($scope, $sailsSocket) {

            $sailsSocket
                .get(appConfig.appUrl + '/charity')
                .success(function (charities) {
                    $scope.charities = charities;
                })
                .error(function (err) {
                    logger.logError('Erreur lors de la récupération des messages.');
                });
        }
    ])