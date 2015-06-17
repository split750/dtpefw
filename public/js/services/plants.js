angular.module('plantService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Plants', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/api/plants');
            },
            create : function(todoData) {
                return $http.post('/api/plants', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/plants/' + id);
            }
        }
    }]);