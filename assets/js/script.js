//use moment.js to display current date and time at the top of the scheduler
let currentDay = moment().format('LLLL'); 
$("#currentDay").html(currentDay);

//make it so that the functions run when the page is loaded/ready
$(document).ready(function () {
    //use moment.js to track the time and update the timeblock classes accordingly
    function trackTime () {
        //check time with moment.js
        let currentTime = moment().hour();
        
        $(".time-block").each(function () {
            const timeBlock = parseInt($(this).attr("id"));

            //if the currentTime is > timeblock hour/id then the "past" class is applied
            if (timeBlock < currentTime) {
                $(this).removeClass("present future");
                $(this).addClass("past");
            }
            //if the currentTime is = timeblock hour/id then the "present" class is applied
            else if (timeBlock === currentTime) {
                $(this).removeClass("future past");
                $(this).addClass("present");
            }
            //if the currentTime is < timeblock hour/id then the "future" class is applied
            else {
                $(this).removeClass("present past");
                $(this).addClass("future");
            }
        })
    }

    //save task to local storage when save button is clicked
    $(".saveBtn").on("click", function () {
        //get task text from the textarea div, which is a sibling of the save button div
        let task = $(this).siblings("#textarea").val();
        let time = $(this).parent().attr("id");

        //set it to local storage
        localStorage.setItem(time, JSON.stringify(task));
    });

    //display the saved text/events in the appropriate timeblock upon refresh of page
    $("#9 #textarea").val(JSON.parse(localStorage.getItem(9)));
    $("#10 #textarea").val(JSON.parse(localStorage.getItem(10)));
    $("#11 #textarea").val(JSON.parse(localStorage.getItem(11)));
    $("#12 #textarea").val(JSON.parse(localStorage.getItem(12)));
    $("#13 #textarea").val(JSON.parse(localStorage.getItem(13)));
    $("#14 #textarea").val(JSON.parse(localStorage.getItem(14)));
    $("#15 #textarea").val(JSON.parse(localStorage.getItem(15)));
    $("#16 #textarea").val(JSON.parse(localStorage.getItem(16)));
    $("#17 #textarea").val(JSON.parse(localStorage.getItem(17)));

    //call the trackTime function
    trackTime();
})