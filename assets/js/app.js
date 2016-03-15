// views/app.js
var treeViewer = angular.module('treeViewer', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all family members and display them
    $http.get('/api/member')
        .success(function(data) {
            $scope.member = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createMember = function() {
        $http.post('/api/member', $scope.formData)
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
        $http.delete('/api/member/' + id)
            .success(function(data) {
                $scope.member = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
         angular.module("treeViewer",[])
                .controller("nodeProfileController",function($scope){
                $scope.node = {}
                $scope.node.firstName = "";
                $scope.node.middleName = "";
                $scope.node.lastName = "";
                $scope.node.father = "";
                $scope.node.mother = "";
                $scope.node.birth = "";
                $scope.node.death = "";
                $scope.node.gender = "";
                $scope.node.birthLocation = "";
                $scope.node.deathLocation = "";
                $scope.node.bio = "";
                $scope.node.children = [""];
                        
        });
   
    
}
