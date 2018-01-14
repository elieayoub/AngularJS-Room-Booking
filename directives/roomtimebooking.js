//time bar
angular.module('RoomBookingApp').directive("roomtimebooking", function () {

    var hourSteps = [];

    function getHourStepStatus(event, scope) {
        var canvas = document.getElementById("canvas");
        var hourStepStatus = document.getElementById("hourStepStatus");
        //get the x and y positions of mouse click on canvas
        var rect = canvas.getBoundingClientRect()
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        for (var i = 0; i < hourSteps.length; i++) {
            if (hourSteps[i].xStart <= x && hourSteps[i].xEnd >= x) {
                if (!hourSteps[i].isAvailable)
                    hourStepStatus.innerText = "selected hour is already booked"
                else
                    hourStepStatus.innerText = hourSteps[i].currentTime + ":00" + " is available for booking";
            }
        }
    }

    return {
        restrict: "A",
        scope: true,
        link: function (scope, element, attrs) {

            var width = element[0].clientWidth;
            var height = element[0].clientHeight;
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.id = 'canvas';
            canvas.height = height;
            canvas.width = width;
            canvas.addEventListener("click", function (event) { getHourStepStatus(event, scope) }, false);

            element[0].appendChild(canvas);

            var startBookingTime = 7;
            var endBookingTime = 19;
            var currentTime = 0;
            var yLinePosition = 20;
            var yTextPosition = 13;
            var timeStep = 30;
            var lineWidth = 10;
            var xLineStartPosition = 0;
            var xLineEndPosition = 0;
            var strokeStyle = "green";
            var fillStyle = "black";

            var bookedTimes = scope.room.bookedTimes;

            for (var i = 0; i <= 12; i++) {

                var isAvailable = true;
                //get the x postion of the 1 hour and add 1 pixel to it in case it is second step and higher
                xLineStartPosition = (timeStep * i) + (i != 0 ? 1 : 0);
                //get the x position of the end of 1 hour step
                xLineEndPosition = (timeStep * (i + 1));
                //get current time
                currentTime = (startBookingTime + i);

                //check for nooked times and change the style of hour steps and time text when booked or available
                for (var j = 0; j < bookedTimes.length; j++) {
                    //if current time between start and end of booked time
                    if (parseInt(bookedTimes[j].start) <= currentTime && currentTime < parseInt(bookedTimes[j].end)) {
                        strokeStyle = "red";
                        fillStyle = "silver";
                        isAvailable = false;
                        break;
                    }
                    else { //in case room not booked in this 1 hour step
                        strokeStyle = "green";
                        fillStyle = "black";
                    }
                }

                //time steps every 1 hour
                ctx.beginPath();
                ctx.lineWidth = lineWidth;
                ctx.moveTo(xLineStartPosition, yLinePosition);
                ctx.lineTo(xLineEndPosition, yLinePosition);
                ctx.strokeStyle = strokeStyle;
                ctx.stroke();
                //time style and text
                ctx.fillStyle = fillStyle;
                ctx.font = "10px Arial";
                ctx.fillText(currentTime + ":00", xLineStartPosition, yTextPosition);

                var hourStep = {};
                hourStep.xStart = xLineStartPosition;
                hourStep.xEnd = xLineEndPosition;
                hourStep.currentTime = currentTime;
                hourStep.isAvailable = isAvailable;
                hourSteps.push(hourStep);
            }
        }
    }
});