# Room Booking App

## Introduction
The development of this application took around 10 hours which I developed during a code challenge. 
I used a static rooms list in this example instead of calling a web service. 
Bootstrap and Jquery was used to have a responsive design layout.

## Framework/Libraries Used
**I developed the room booking application using:**
	-	AngularJS version 1.6.4
	-	Bootstrap
	-	JQuery

## Run Application
In order to run this application you either host the application on a server, or run it locally by opening index.html using Firefox web browser.

## Application Structure
	-	index.html
	-	App
		-	Css
			-	Style.css
		-	Js
				-	App.js
	-	Controllers
		-	SearchListController.js
		-	RoomDetailsController.js
		-	RoomBookingController.js
	-	Directives
		-	Roomtimebooking.js
	-	Filters
		-	SearchFilter.js
	-	Views
		-	Book.html
		-	Details.html
		-	Main.html
	-	Vendors
		-	bootstrap-3.3.7
		-	jquery

**I structured my application into 3 controllers:**
**1.	SearchListController:** used to search for list rooms. The user can search for rooms by using the Room Name input text in which the user can either filter by room name or room level. Also the user can search by room date by changing value of the date field, and by room availability by changing the value of Available Now checkbox.
To see the room details, the user should click on the room list item and he will redirected to the details view.
**2.	RoomDetailsController:** used to show the selected room details from the SearchListController. Available details are room description, room equipments and room photo gallery.
Also I added a time bar at the bottom which represents the availability of the room. I used HTML5 canvas to develop the time bar feature. Red color represents not available time whereas Green color represents available time.
**3.	RoomBookingController:**  used to book for a room. The user can select a specific time to book for a room. The user must provide his name, a valid email and a phone number to be able to book the room. 

## Static Rooms List
I used a static rooms list instead of calling the web service. The static rooms list is available in SearchListController.js file in $scope.rooms
Please check this static rooms list in order to know the values of the rooms that you should search for.
Rooms are available on the following dates: 2018-01-15 | 2018-01-16 | 2018-01-17 | 2018-01-18
