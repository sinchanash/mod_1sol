(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController)
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.dishes = '';
    $scope.message = '';
    $scope.checked = false;
    $scope.checkLunch = function(){
        if($scope.dishes.trim().length===0){
            $scope.empty = true;
        } else {
            $scope.checked = true;
            $scope.empty = false;
            var arrayDishes = $scope.dishes.split(',');
            var arrayDishesWithoutEmpty = arrayDishes.filter(function(v){
                return v.trim()!=='';
            });
            if(arrayDishesWithoutEmpty.length<=3){
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        }
    };
}
})();