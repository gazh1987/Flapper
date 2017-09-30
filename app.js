var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	'posts', //Injecting posts service (factory) into conroller so we can access the data

	function($scope, posts)
	{
		$scope.test = "Hello World!";
		$scope.posts = posts.posts; //Binding $scope.posts var to posts aarray in service

		$scope.addPost = function()
		{
			if($scope.title === '') { return; } // Preventing User from posting a blank title
			$scope.posts.push({
				title: $scope.title, 
				link: $scope.link, 
				upvotes:0
			});
			//Clear textboxes
			$scope.title = '';
			$scope.link = '';  
		};

		$scope.incrementUpvotes = function(post)
		{
			post.upvotes += 1;
		}
	}
]);

// Creates a new object with an array called posts.
// Sercive (factory) can be injectd into any angular module that needs it
//Services provide a meand for keeping data around for the lifetime of an application
//and also can be used across different controllers. Whereas controllers are instantiated
//only when needed and discarded when not e.g. anytime you switch a route or reload 
//a page
app.factory('posts', [function(){
	var obj = {
		posts: []
	};
	return obj;
}])
