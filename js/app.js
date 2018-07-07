var app = angular.module("myapp" ,[]);

app.controller("basecontroller", function($scope){
    $scope.records = [
        {
             "Name" : "Alfreds Futterkiste",
             "Country" : "Germany"
         },{
             "Name" : "Berglunds snabbköp",
             "Country" : "Sweden"
         },{
             "Name" : "Centro comercial Moctezuma",
             "Country" : "Mexico"
         },{
             "Name" : "Ernst Handel",
             "Country" : "Austria"
         }
     ]

$scope.myfun =function(data){
    alert(data)
    $scope.otname = "changed"
}

$scope.pushto = function(){
    var ob = {"Name" :$("#one").val(),
               "Country" :$("#two").val()     }
    $scope.records.push(ob)

    
}

})