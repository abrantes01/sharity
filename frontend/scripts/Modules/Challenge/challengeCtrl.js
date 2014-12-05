angular.module('app.challenge', []).controller('challengeCtrl', [
    '$scope', '$sailsSocket','data',
    function ($scope, $sailsSocket,data) {
        $scope.challenge = data;
        console.log($scope.challenge);

    }])
.controller('allChallengeCtrl',['$scope', '$sailsSocket',
        function ($scope, $sailsSocket) {

            $sailsSocket
                .get(appConfig.appUrl + '/challenge')
                .success(function (challenges) {
                    $scope.challenges = challenges;
                })
                .error(function (err) {
                    logger.logError('Erreur lors de la récupération des messages.');
                });
        }
    ])