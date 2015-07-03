angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/notes'
    })

    .when('/notes', {
      templateUrl: "app/assets/templates/notes/index.html",
      controller: "NotesIndexController"
    })

    .when('/notes/new', {
      templateUrl: "app/assets/templates/notes/new.html",
      controller: "NotesCreateController"
    })

    .when('/notes/:id', {
      templateUrl: "app/assets/templates/notes/show.html",
      controller: "NotesShowController"
    })

    .when('/notes/:id/edit', {
      templateUrl: "app/assets/templates/notes/edit.html",
      controller: "NotesEditController"
    })

    .when('/users', {
      templateUrl: "app/assets/templates/users/index.html",
      controller: "UsersIndexController"
    })

    .when('/users/:id', {
      templateUrl: "app/assets/templates/users/show.html",
      controller: "UsersShowController"
    })

    .when('/about', {
      templateUrl: "app/assets/templates/about.html",
      //controller: "AboutController"
    });

});