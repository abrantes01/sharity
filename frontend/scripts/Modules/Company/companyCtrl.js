angular.module('app.company', []).controller('companyCtrl', [
    '$scope', '$sailsSocket','data',
    function ($scope, $sailsSocket,data) {
        $scope.company = data;
        console.log($scope.company);

        $scope.challenges = data.challenges;
        console.log($scope.challenges);

    }])