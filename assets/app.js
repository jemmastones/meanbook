  var app = angular.module('app', [])

  app.service('PostsSvc', function($http) {
  	this.fetch = function() {
  		return $http.get('/api/posts')
  	}
  	this.create = function (post) {
    	return $http.post('/api/posts', post)
	}
  })

  app.controller('PostsCtrl', function($scope, PostsSvc) {

      $scope.addPost = function() {
        // Only add a post if there is a body
        if ($scope.postBody) {
            // unshift a new post into $scope.posts
            $http.post('/api/posts', {
              username: 'jemmastones',
              body:  $scope.postBody
            }).success(function(post) {
              $scope.posts.unshift(post)
              $scope.postBody = null
            })
        }
    }

/*
    $http.get('http://localhost:3000/api/posts')
    .success(function (posts) {
      $scope.posts = posts
    })
*/

	PostsSvc.fetch().success(function(posts) {
		$scope.posts = posts
	})

  })