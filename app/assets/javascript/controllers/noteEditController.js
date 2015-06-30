angular.module('NoteWrangler').controller('NotesEditController', function($http, $scope, User, Note, Category, $routeParams, $location){
  
  $scope.note = Note.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;

    $http.put('/notes/' + $routeParams.id, note).
      success(function(data) {
        $location.url('/notes/' + $routeParams.id);
      });
  }
});