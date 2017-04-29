app.controller('MainController', ['$scope', function($scope){
  $scope.book1 = {
    name: 'Glass Palace',
    author: 'Amitav Ghosh',
    price: 2.56,
    pubdate: new Date('2010', '04', '16')
  };
  $scope.book2 = {
    name: 'Motor Cycle Diaries',
    author: 'Che Guyevara',
    price: 2.86,
    pubdate: new Date('2011', '02', '20')
  };
  $scope.book3 = {
    name: 'Sea of Popies',
    author: 'Amitav Ghosh',
    price: 2.20,
    pubdate: new Date('2010', '12', '16')
  };
}]);
