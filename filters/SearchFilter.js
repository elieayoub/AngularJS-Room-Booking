//Our custom filter to search inside the rooms array
angular.module('RoomBookingApp').filter('searchFilter', function () {
    return function (arr, searchValue) {
        //check if searchValue has value
        if (!searchValue) {
            return arr;
        }

        var result = [];

        //Get lower case of the search value to compare with lower case of rooms items
        searchValue = searchValue.toLowerCase();

        //loop in the rooms items and compare with value searched for
        angular.forEach(arr, function (item) {
            if (item.title.toLowerCase().indexOf(searchValue) !== -1 ||
				item.level.toLowerCase().indexOf(searchValue) !== -1) {
                result.push(item);
            }
        });

        //return the found values
        return result;
    };

});