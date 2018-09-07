(function(){
    'use strict';

    angular.module("LunchApp",[])

    .controller('LunchController',LunchController);
    
    LunchController.$inject = ['$scope'];

    function  LunchController($scope)  {
        $scope.dishes='';
        $scope.message='';

        $scope.checkLunch= function(){
            var arrayItems= $scope.dishes.split(',');
            if (arrayItems.length===1) {
                $scope.message="Please enter some data!";
                
            }
            else{
                if(arrayItems.length> 3){                   
                $scope.message="Too Much!";
                }
                else{
                    $scope.message="Enjoy!";
                }
            }           
            
        };
    } ;

})();