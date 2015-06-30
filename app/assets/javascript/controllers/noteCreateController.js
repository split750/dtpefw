angular.module('NoteWrangler').controller('NotesCreateController', function($scope, Note, Category, User, WasteType, $location){
  $scope.note = new Note();
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();
  $scope.wasteTypes = WasteType.query();

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    note.$save().then(function(){
      $location.path("/notes");
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  };

});