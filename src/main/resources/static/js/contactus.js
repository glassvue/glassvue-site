var app = angular.module('postserviceApp', []);
	app.controller('postserviceCtrl', function($scope, $http) {
		$scope.name = null;
		$scope.email = null;
		$scope.message = null;
		$scope.subject = null;
		$scope.postdata = function(name, email, message, subject) {
			var data = {
				name : name,
				email : email,
				message : message,
				subject : subject
			};
			//Call the services
			$http.post('/contactus', JSON.stringify(data)).then(
					function(response) {
						if (response.data)
							$scope.msg = "Post Data Submitted Successfully!";
					}, function(response) {
						$scope.msg = "Service not Exists";
						$scope.statusval = response.status;
						$scope.statustext = response.statusText;
						$scope.headers = response.headers();
					});
			document.getElementById("name").value="";
			document.getElementById("email").value="";
			document.getElementById("subject").value="";
			document.getElementById("message").value="";
			angular.element(document.getElementById('submit'))[0].disabled = true;
			alert("Your query submitted successfully!");
		};
	});
