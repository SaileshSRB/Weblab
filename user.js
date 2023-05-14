angular.module('myApp', [])
.controller('myController', function($scope, $http) {
    $scope.users = [];

    // Function to get all users
    function getUsers() {
        $http.get('http://localhost:5000/users/')
        .then(function(response) {
            console.log(response.data.users);
            $scope.users = response.data.users;
        });
    }

    // Function to add a user
    $scope.addUser = function() {
        var data = {
            name: $scope.name,
            age: $scope.age,
            email: $scope.email,
            password: $scope.password,
            phone: $scope.phone,
            resumeLink: $scope.resumeLink,
            degree: $scope.degree,
            college: $scope.college
        };
        $http.post('http://localhost:5000/users/', data)
        .then(function(response) {
            getUsers();
            $scope.name = '';
            $scope.age = '';
            $scope.email = '';
            $scope.password = '';
            $scope.phone = '';
            $scope.resumeLink = '';
            $scope.degree = '';
            $scope.college = '';
        });
    };

    // Function to delete a user
    $scope.deleteUser = function(user) {
        $http.delete('http://localhost:5000/users/' + user._id)
        .then(function(response) {
            getUsers();
        });
    };

    // Function to update a user
    $scope.updateUser = function(user) {
        var data = {
            name: user.name,
            age: user.age,
            email: user.email,
            password: user.password,
            phone: user.phone,
            resumeLink: user.resumeLink,
            degree: user.degree,
            college: user.college
        };
        $http.patch('http://localhost:5000/users/' + user._id, data)
        .then(function(response) {
            getUsers();
        });
    };

    // Get all users on page load
    getUsers();
});
