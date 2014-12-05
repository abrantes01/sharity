'use strict';
angular.module('app.home', []).controller('homeCtrl', [
    '$scope', '$sailsSocket','challenges',
    function($scope, $sailsSocket,challenges) {
    	console.log(challenges)
        $scope.challenges = challenges;
    }]
);