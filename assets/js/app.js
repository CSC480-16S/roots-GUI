// views/app.js
var treeViewer = angular.module('treeViewer', []);

treeViewer.controller("mainController", function($scope, $http){
    $scope.formData = {};

    //when landing on the page, get all family members and display them
    $http.get('/populateTree')
        .success(function(data) {
            $scope.member = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createMember = function() {
        $http.post('/populateTree', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.member = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteMember = function(id) {
        $http.delete('/populateTree' + id)
            .success(function(data) {
                $scope.member = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    treeViewer.controller('nodeProfileController',function($scope){
        $scope.node = {};
        $scope.node.firstName = "David";
        $scope.node.middleName = "";
        $scope.node.lastName = "Swift";
        $scope.node.father = "";
        $scope.node.mother = "";
        $scope.node.dateOfBirth = "02/13/1988";
        $scope.node.death = "";
        $scope.node.gender = "Dude";
        $scope.node.birthLocation = "";
        $scope.node.birthCity = "Rochester";
        $scope.node.birthState = "New York";
        $scope.node.deathLocation = "";
        $scope.node.bio = "He lived and then he died.";
        $scope.node.children = [""];
    });
});