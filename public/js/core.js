angular.module('scotchTodo', ['todoController', 'todoService'])

    .directive('todoIndex', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/todos-template/todo-index.html'
        };
    });




angular.module('ReferenceList', ['ui.router', 'plantController', 'plantService'])

    /*
    .directive('plantNav', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/plants-template/headerView.html'
        };
    })

    .directive('plantList', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/plants-template/plantListView.html'
        };
    })
    */

    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('plants', {
                url: '',
                templateUrl: 'template/plants-template/plantListView.html',
                controller: 'mainController'
            });

        $urlRouterProvider.otherwise('/plants');
    }]);