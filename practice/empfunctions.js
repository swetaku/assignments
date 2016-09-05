var app = angular.module('myApp',[]);
var flag = true;
app.controller('myController',function($scope,$http) {
	$http.get("empdet.json").then(function(response){
		$scope.empdata = response.data.Employees;
		});


	$scope.sort = function(col_name){
		$scope.search_propname = col_name;
		if(flag === true){
			$scope.chk = '+';
			flag = false;
			}
		else{
			$scope.chk = '-';
			flag = true;
		}
		
	};
	
	$scope.edit=function(Employees){
		$scope.employee_edit=Employees;
	};
	
	$scope.add=function(employee_new){
		$scope.empdata.push(employee_new);
	};
	
	$scope.del=function(Employees){
		$scope.employee_edit=Employees;
	};
	
	$scope.delemp=function(Employees){
		$scope.employee_edit.firstname='';
		$scope.employee_edit.lastname='';
		$scope.employee_edit.email='';
		$scope.employee_edit.dateOfJoining='';
		$scope.employee_edit.extension='';
		$scope.employee_edit.isOnBench='';
	};
	
	
});
app.filter('booleanyesno', function(){
  return function(input_str){
    input_str = input_str || '';
    var out_str;
    if(input_str=="true"){
		out_str='Y';
	}
	else if(input_str=="false"){
		out_str='N';
	}
	else{
		out_str='';
	}
    
    return out_str;
	}
  });