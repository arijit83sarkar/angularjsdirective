app.controller('MainController', ['$scope', function($scope){
  $scope.book1 = {
    icon: 'img/book1.png',
    name: 'Glass Palace',
    author: 'Amitav Ghosh',
    price: 2.56
  };
  $scope.book2 = {
    icon: 'img/book2.png',
    name: 'Motor Cycle Diaries',
    author: 'Che Guyevara',
    price: 2.32
  };
  $scope.book3 = {
    icon: 'img/book3.png',
    name: 'Sea of Popies',
    author: 'Amitav Ghosh',
    price: 2.20
  };
  $scope.book4 = {
    icon: 'img/book4.png',
    name: 'Seasons of Ghost',
    author: 'Ruskin Bond',
    price: 2.75
  };
  
  $scope.apps = [
    {
      icon: 'img/book1.png',
      name: 'Glass Palace',
      author: 'Amitav Ghosh',
      price: 2.56
    },
    {
      icon: 'img/book2.png',
      name: 'Motor Cycle Diaries',
      author: 'Che Guyevara',
      price: 2.32
    },
    {
      icon: 'img/book3.png',
      name: 'Sea of Popies',
      author: 'Amitav Ghosh',
      price: 2.20
    },
    {
      icon: 'img/book4.png',
      name: 'Seasons of Ghost',
      author: 'Ruskin Bond',
      price: 2.75
    }
    ];
}]);
