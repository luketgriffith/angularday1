import $ from 'jquery';
let MyController= function($scope){
  $scope.likes= 0;
  $scope.taco = 'Lovies';
  $scope.likePress= function(){
    $('.fa').animate({
      right: '+=50'
    }, 1000)
    $scope.likes = $scope.likes + 1;
    if($scope.likes === 1){
      $scope.taco= 'Lovie';
    } else{
      $scope.taco = 'Lovies';
    }
  }
};

MyController.$inject= ['$scope'];
export default MyController;