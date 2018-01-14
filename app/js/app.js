var app = angular.module("RoomBookingApp", ["ngRoute"]);

//routing
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/main.html"
    })
    .when("/details/:roomId", {
        templateUrl: "views/details.html",
        controller: "RoomDetailsController"
    })
    .when("/book/:roomId", {
        templateUrl: "views/book.html",
        controller: "RoomBookingController"
    });
});

//used to share scopes between controllers using a service
app.factory('Scopes', function ($rootScope, $window) {
    var mem = {};

    return {
        store: function (key, value) {
            $rootScope.$emit('scope.stored', key);
            if ($window.sessionStorage) //check browser supports sessionStorage to save in it
                $window.sessionStorage.setItem(key, angular.toJson(value));
            else //else save in variable
                mem[key] = value;
        },
        get: function (key) {
            if ($window.sessionStorage)
                return angular.fromJson($window.sessionStorage.getItem(key));
            else
                return mem[key];
        }
    };
});