/**
 * Created by manish on 23/4/17.
 */
$(document).ready(function() {
    $("#url").kendoMaskedTextBox({
        mask: ""
    });
    kendo.ui.progress($('[kendo-grid]'), false);
});
var app = angular.module("ngDownloader", [ "kendo.directives" ]);
app.controller('searchCtrl', function ($scope, $http){
    $scope.search = function () {
        if($scope.query){
            console.log($scope.query);
            kendo.ui.progress($("#search"), true);
            $http({
                method : "GET",
                url : "https://s1jv2959n8.execute-api.us-east-1.amazonaws.com/v1?q="+$scope.query
            }).success(function mySucces(response) {
                console.log(response);
                $scope.data = response;
                kendo.ui.progress($("#search"), false);
            });
        }
    }
});