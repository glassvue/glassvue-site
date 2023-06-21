
var app = angular.module('postsubscribe', []);
	app.controller('subscribectrl', function($scope, $http) {
		$scope.name = null;
		$scope.email = null;
		$scope.subscribedata = function(name, email) {
			var data = {
				name : name,
				email : email
			};
			//Call the service
				$http.post('/subscribe', JSON.stringify(data)).then(
					function(response) {
						if (response.data){
							$scope.msg = "Post Data Submitted Successfully!";
							document.getElementById("name").value="";
							document.getElementById("email").value="";
							angular.element(document.getElementById('submit'))[0].disabled = true;
							alert("You've Subscribed successfully!");	
						}
					}, function(response) {
						$scope.msg = "Service not Exists";
						$scope.statusval = response.status;
						$scope.statustext = response.statusText;
						$scope.headers = response.headers();
					});
					
		};
	});
