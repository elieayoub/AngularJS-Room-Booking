angular.module('RoomBookingApp').controller('RoomDetailsController', ['$scope', '$routeParams', 'Scopes', function ($scope, $routeParams, Scopes) {

    var scope = Scopes.get('SearchListController');

    //Get rooms from previous controller
    var rooms = Scopes.get('SearchListController');
    var roomId = $routeParams.roomId;
    $scope.room = {};

    //exit if roomId is not a number
    if (isNaN(roomId))
        return;

    //loop in the rooms items to get details of room by roomId
    angular.forEach(rooms, function (item) {
        if (parseInt(item.roomId) == (roomId)) {
            $scope.room = item;
        }
    });
}]);