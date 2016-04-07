(function(){
	angular.module('BookFace', ['ui.router', 'ngFileUpload'])
		.config(function($stateProvider){

			$stateProvider
				.state('signUp', {
					url: '/signup',
					templateUrl: "client/partials/signup.html",
					controller: 'SignUpController'
				})
				.state('editProfile', {
					url: '/editProfile',
					templateUrl: 'client/profile/edit-profile-view.html',
					controller: 'EditProfileController'
				})
		})
}());