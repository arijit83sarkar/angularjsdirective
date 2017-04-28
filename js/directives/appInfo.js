app.directive('appInfo', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directive/appInfo.html'
  };
});
