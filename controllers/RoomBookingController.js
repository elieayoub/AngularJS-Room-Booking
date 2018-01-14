angular.module('RoomBookingApp').controller('RoomBookingController', ['$scope', '$routeParams', 'Scopes', function ($scope, $routeParams, Scopes) {

    //Get rooms from previous controller
    var rooms = Scopes.get('SearchListController');
    var roomId = $routeParams.roomId;
    $scope.room = {};
    $scope.bookedHourStep = 0;
    $scope.name = "";
    $scope.email = "";
    $scope.phone = "";

    //exit if roomId is not a number
    if (isNaN(roomId))
        return;

    //loop in the rooms items to get details of room by roomId
    angular.forEach(rooms, function (item) {
        if (parseInt(item.roomId) == (roomId)) {
            $scope.room = item;
        }
    });

    $scope.bookroom = function () {
        if ($scope.name != "" && $scope.email != "" && $scope.phone != "")
            alert("Room is booked for: " + $scope.name)
        return false;
    }
}]);