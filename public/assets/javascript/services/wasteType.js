angular.module('NoteWrangler').factory('WasteType', function($resource){
  return $resource('/wasteTypes/:id');
});