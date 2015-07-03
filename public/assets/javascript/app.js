angular.module('NoteWrangler', ['ngRoute', 'ngResource', "ngGravatar", 'ui.bootstrap']).config(function(GravatarProvider){
  GravatarProvider.setSize(100);
});