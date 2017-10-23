(function () {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController)

	LunchCheckController.$inject = ['$scope']

	function LunchCheckController($scope) {
		$scope.bordercolor = "black, transparent"
		
		$scope.check = function() {
			//NOT consider empty items
			if ($scope.lunch_name === undefined || $scope.lunch_name.replace(/\s/g, '') === "" 
				|| $scope.lunch_name.replace(/\s/g, '').replace(/\,/g, '') === "") {

				$scope.mycolor = "red"
				$scope.bordercolor = "red"
				$scope.message = "please enter data first"
			} else {
				var lunch_array = $scope.lunch_name.replace(/\s/g, '').split(',')
				var count = 0
				for (var i in lunch_array) {
					if (lunch_array[i] == undefined || lunch_array[i] === "") continue
					count += 1
				}
				$scope.mycolor = "green"
				$scope.bordercolor = "green"
				if (count <= 3) 
					$scope.message = "Enjoy!"
				else 
					$scope.message = "Too much!"
			}

		};
	}
})();