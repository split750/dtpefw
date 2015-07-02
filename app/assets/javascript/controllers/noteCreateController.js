angular.module('NoteWrangler').controller('NotesCreateController', function($scope, Note, Category, User, WasteType, ContractType, $location){
  $scope.note = new Note();
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();
  $scope.wasteTypes = WasteType.query();
  $scope.contractTypes = ContractType.query();


  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    note.$save().then(function(){
      $location.path("/notes");
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  };

  
  //         Date picker         //

  $scope.clear = function () {
    $scope.note.contracts.contractEndDate = null;
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

});