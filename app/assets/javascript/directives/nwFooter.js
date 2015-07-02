angular.module("NoteWrangler").directive('nwFooter', function(){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "assets/templates/directives/nwFooter.html",
    /*
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
    */
  };
});