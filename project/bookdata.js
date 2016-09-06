var app = angular.module('myApp',[]);
app.controller('myController',function($scope,$http) {
	$http.get("bookdet.json").then(function(response){
		$scope.bookdet = response.data.Books;
		console.log($scope.bookdet);
		});
	});
	
app.config(['$routeProvider',function($routeProvider){
				$routeProvider
				.when('/addBook',
				{
				  templateUrl : 'addBook.html',
				  contoller : 'addBookCtrl'
				})
				
				.when('/addAuthor',
				{
				  templateUrl : 'addAuthor.html',
				  contoller : 'addAuthorCtrl'
				})
				
				.otherwise({
				  redirectTo : 'index.html'
				});
			}]);
			
custApp.controller('addBookCtrl',function($scope){
						$scope.msg = "New customer added";
						});
custApp.controller('addAuthorCtrl',function($scope){
						$scope.msg = "Viewing the customers";
						});