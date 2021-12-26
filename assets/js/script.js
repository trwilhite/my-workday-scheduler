//use moment.js to display current date and time at the top of the scheduler
var currentDay = moment().format('LLLL'); 
$("#currentDay").html(currentDay);


//use moment.js to track the time and update the timeblock classes accordingly
function trackTime () {
    var currentTime = moment().hour();
    
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id"));

        //if the currentTime is > timeblock hour/id then the "past" class is applied
        if (timeBlock < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        //if the currentTime is = timeblock hour/id then the "present" class is applied
        else if (timeBlock === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        //if the currentTime is < timeblock hour/id then the "future" class is applied
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}