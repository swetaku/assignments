var custApp = angular.module('myApp',['ngRoute']);
custApp.config(['$routeProvider',function($routeProvider){
				$routeProvider
				.when('/addCustomer',
				{
				  templateUrl : 'addCustomer.html',
				  contoller : 'addCustomerCtrl'
				})
				
				.when('/viewCustomer',
				{
				  templateUrl : 'viewCustomer.html',
				  contoller : 'viewCustomerCtrl'
				})
				
				.otherwise({
				  redirectTo : 'customerDirectory.html'
				});
			}]);
			
custApp.controller('addCustomerCtrl',function($scope){
						$scope.msg = "New customer added";
						});
custApp.controller('viewCustomerCtrl',function($scope){
						$scope.msg = "Viewing the customers";
						});
						
custApp.controller('cd',function($scope){
					$scope.custDet=[{name:"abc" ,id:"101", phone:"24051"},
									{name:"def" ,id:"102" ,phone:"24052"},
									{name:"ghi" ,id:"103" ,phone:"24053"},
									{name:"jkl" ,id:"104" ,phone:"24054"}];
									
					$scope.addItem = function(cust) {
                         $scope.custDet.push(cust);
						 };
        
    });
	
	

	