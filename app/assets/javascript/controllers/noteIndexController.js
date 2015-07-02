angular.module('NoteWrangler').controller('NotesIndexController', function(Note, Category, $scope){
  
  $scope.notes = Note.query();
  $scope.search = {};

  $scope.categoryName = Category.query();

});