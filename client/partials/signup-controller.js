(function(){
	angular.module('BookFace')
.controller('SignUpController', ['$scope', '$state', '$http', function($scope, $state, $http){
			
			$scope.createUser = function(){
				console.log($scope.newUser)
				$http.post('/api/user/signup', $scope.newUser).success(function(res){

				}).error(function(error){
					console.log(error)
				})
			}
	}]);
}());