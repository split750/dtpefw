angular.module('NoteWrangler').controller('NotesEditController', function($http, $scope, User, Note, Category, WasteType, ContractType, $routeParams, $location){
  
  $scope.note = Note.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();
  $scope.wasteTypes = WasteType.query();
  $scope.contractTypes = ContractType.query();


  $scope.saveNote = function(note){
    $scope.isSubmitting = true;

    $http.put('/notes/' + $routeParams.id, note).
      success(function(data) {
        $location.url('/notes/' + $routeParams.id);
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


  //     Line form controller     //
  console.log($scope.note);

});