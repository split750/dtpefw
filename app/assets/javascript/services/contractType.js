angular.module('NoteWrangler').factory('ContractType', function($resource){
  return $resource('/contractTypes/:id');
});