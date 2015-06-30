angular.module('NoteWrangler').controller('NotesShowController', function(Note, Category, User, $scope, $routeParams, $location, $http){
  
  $scope.note = Note.get({id: $routeParams.id});

  $scope.users = User.query();

  $scope.note.$promise.then(function(data) {
        
    Category.get({id: data.categoryId}, function(data2) {
      $scope.categoryName = data2.name;
    });

  });

  
  $scope.deleteNote = function(note) {
    $http.delete('/notes/' + $routeParams.id).
      success(function() {
        $location.url('/notes');
      });
  }

});