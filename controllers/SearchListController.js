//Our controller
angular.module('RoomBookingApp').controller('SearchListController', function ($scope, $filter, Scopes) {

    //List of roomss staticaly defined used in this example
    $scope.rooms = [
		{
		    roomId: 1,
		    title: 'Room 1',
		    level: 'L36',
		    date: '2018-01-15',
		    available: true,
		    description: 'here is the description of the room...',
		    equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                }
		    ],
		    photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
		    ],
		    bookedTimes: [
                {
                    start: 7,
                    end: 10
                },
                {
                    start: 13,
                    end: 18
                }
		    ]
		},
        {
            roomId: 2,
            title: 'Room 2',
            level: 'L42',
            date: '2018-01-16',
            available: true,
            description: 'here is the description of the room...',
            equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                },
                {
                    equipmentId: 3,
                    name: 'equipment 3'
                }
            ],
            photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
            ],
            bookedTimes: [
                {
                    start: 8,
                    end: 9
                }
            ]
        },
        {
            roomId: 3,
            title: 'Room 3',
            level: 'L8',
            date: '2018-01-16',
            available: true,
            description: 'here is the description of the room...',
            equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                }
            ],
            photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
            ],
            bookedTimes: [
                {
                    start: 10,
                    end: 12
                },
                {
                    start: 12,
                    end: 13
                },
                {
                    start: 13,
                    end: 14
                },
                {
                    start: 14,
                    end: 15
                }
            ]
        },
        {
            roomId: 4,
            title: 'Room 4',
            level: 'L27',
            date: '2018-01-16',
            available: false,
            description: 'here is the description of the room...',
            equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                }
            ],
            photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
            ],
            bookedTimes: [
                {
                    start: 7,
                    end: 8
                },
                {
                    start: 13,
                    end: 14
                }
            ]
        },
        {
            roomId: 5,
            title: 'Room 5',
            level: 'L28',
            date: '2018-01-16',
            available: false,
            description: 'here is the description of the room...',
            equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                }
            ],
            photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
            ],
            bookedTimes: [
                {
                    start: 10,
                    end: 13
                }
            ]
        },
        {
            roomId: 6,
            title: 'Room 6',
            level: 'L47',
            date: '2018-01-17',
            available: true,
            description: 'here is the description of the room...',
            equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                }
            ],
            photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
            ],
            bookedTimes: [
                {
                    start: 13,
                    end: 16
                },
                {
                    start: 16,
                    end: 17
                }
            ]
        },
        {
            roomId: 7,
            title: 'Room 7',
            level: 'L45',
            date: '2018-01-17',
            available: false,
            description: 'here is the description of the room...',
            equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                }
            ],
            photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
            ],
            bookedTimes: [
                {
                    start: 8,
                    end: 11
                }
            ]
        },
        {
            roomId: 8,
            title: 'Room 8',
            level: 'L6',
            date: '2018-01-17',
            available: false,
            description: 'here is the description of the room...',
            equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                }
            ],
            photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
            ],
            bookedTimes: [
                {
                    start: 8,
                    end: 9
                }
            ]
        },
        {
            roomId: 9,
            title: 'Room 9',
            level: 'L27',
            date: '2018-01-18',
            available: true,
            description: 'here is the description of the room...',
            equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                }
            ],
            photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
            ],
            bookedTimes: [
                {
                    start: 7,
                    end: 11
                },
            ]
        },
        {
            roomId: 10,
            title: 'Room 10',
            level: 'L12',
            date: '2018-01-18',
            available: true,
            description: 'here is the description of the room...',
            equipments: [
                {
                    equipmentId: 1,
                    name: 'equipment 1'
                },
                {
                    equipmentId: 2,
                    name: 'equipment 2'
                }
            ],
            photos: [
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                },
                {
                    src: 'https://www.thelocal.de/userdata/images/article/158a84ae1c7edbcafad1c4aa5b60e3b030e992918d8b6faed8fa59aae1eceeed.jpg'
                }
            ],
            bookedTimes: [
                {
                    start: 14,
                    end: 15
                }
            ]
        }
    ];

    //flag used to check if system should search for available/all rooms
    $scope.searchAvailable = true;
    //variable used for searching for rooms by date with default value equal to today
    $scope.searchDate = new Date();
    //variable used to get a formatted string date value of search date field
    $scope.searchDateString = $filter('date')($scope.searchDate, "yyyy-MM-dd")

    //Store controller scope in the service
    Scopes.store('SearchListController', $scope.rooms);

    //function used to update the search date string from search date field value
    $scope.updateSearchDateString = function () {
        $scope.searchDateString = $filter('date')($scope.searchDate, "yyyy-MM-dd")
    }
});