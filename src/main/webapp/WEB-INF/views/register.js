var myApp = angular.module('module', []);
myApp.controller('registerTraining', ['$scope','$http', function($scope,$http)
{
	this.postData = function() 
	{
		console.log(this.inputData.startDate);
		console.log(this.inputData.name);
		var encodedString = 'name='+
		encodeURIComponent(this.inputData.name) +
		'&startDate='+
		encodeURIComponent(this.inputData.startDate);
		
		$http(
				{   method:'POST',
					url:"localhost:8080/",
					data: encodedString,
					headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
				}
			).success(function(data,status,headers,config) 
				{
		 	console.log(data);
		 })		
	}	
}])