'use strict';
angular.module('app.home', []).controller('homeCtrl', [
    '$scope', '$sailsSocket',
    function($scope, $sailsSocket) {
    	console.log('homectrl')
    	$sailsSocket.get('/user')
    		.then(function(response) {
    			console.log(response.data)
    		})
    }]
);