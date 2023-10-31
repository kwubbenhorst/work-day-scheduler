//The updateTimeDate function gets the time and date in the stipulated formats from dayjs and renders them.
//The 12hr clock is used here, but timeblock ids and the setPastPresentFuture function use the 24hr clock.
  function updateTimeDate() {
    var timeNow = dayjs().format("h:mm:ss A");
    $("#timeNow").text(timeNow);
    var dateNow = dayjs().format("dddd, MMMM D, YYYY.");
    $("#dateNow").text(dateNow);
  }
  
//In the event handler function in the code-block below, the inputs have been stored as keyword value pairs, 
//where the keyword is the id of the hourly timeblock and the value is the description.
//The renderEntries function uses the .each() method to loop through an array of the keywords which correspond 
//to the hourly timeblocks.
//For each time block key, it retrieves from local storage the corresponding description value. The function evaluates 
//if the value entry is not null (it is possible that the user has saved no description for a particular timeblock).
//Given a stored description to render, the function selects the element with the same id as the hour keyword, traverses 
//the DOM to its index1 child (the textarea element) and renders it there.
  function renderEntries() {
    var hours = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
      $.each(hours, function(index, hour) {
    var description = localStorage.getItem(hour);
    if (description !== null) {
      $("#" + hour).children().eq(1).text(description);
    }
  });
  };
  
//The setPastPresentFuture function styles the timeblock with a grey, red or green background colour depending
//on whether it falls in the past, present or future, when compared with current time.  Current time (just the hour
//on the 24 hour clock), is obtained using dayJS and stored in a variable.  An array is created of timeblock ids and
//corresponding times. A forEach method is used to iterate through the array. The classes currently on the row elements
//are removed, and the time of the block is compared with the current time to evaluate whether the row element should 
//have a class of "past" "present" or "future" added to it. Once the class name is there, the custom css styling kicks in.
  
  function setPastPresentFuture() {
    var currentTime = parseInt(dayjs().format("H"));
    var timeblocks = [
      {id: "#hour-9", time: 9},
      {id: "#hour-10", time: 10},
      {id: "#hour-11", time: 11},
      {id: "#hour-12", time: 12},
      {id: "#hour-13", time: 13},
      {id: "#hour-14", time: 14},
      {id: "#hour-15", time: 15},
      {id: "#hour-16", time: 16},
      {id: "#hour-17", time: 17},
    ];
    
    timeblocks.forEach(function(block) {
      var rowEl = $(block.id);
      rowEl.removeClass("past present future");
      
      if (block.time > currentTime) {
        rowEl.addClass("future");
      } else if (block.time < currentTime) {
        rowEl.addClass("past");
      } else {
        rowEl.addClass("present");
      }
    });
  }
  
//The ready function wraps all the code that interacts with the DOM in a call to jQuery to ensure that the code isn't 
//run until the browser has finished rendering all the elements in the html.
//An event listener has been placed on the class .btn, so that any time any of the save buttons is clicked the function 
//is called.
//"This" is used as a selector and DOM traversal is employed to get, and store in a variable, the id attribute 
//(eg. "hour-9") of the row where the button was clicked.
//"This" is used as a selector and DOM traversal is employed to get, and store in a variable, the value of the description 
//the user entered.
//The data has been saved in local storage using the .setItem() method, as a keyword: value pair.
  $(document).ready(function () {
    $(".btn").click(function(e) {
      var hourId = $(this).parent().attr('id');
      var descriptionValue = $(this).prev().val();
      localStorage.setItem(hourId, descriptionValue); 
    });
  });
  
//When the page loads, function init calls the updateTimeDate function, which gets current time & date from dayjs and 
//renders it to the page.
//Function init also uses the built-in setInterval function to keep calling the updateTimeDate function every second.  
//This keeps the time updated.
//Function init also calls the renderEntries function which retrieves the previously saved description entries from local 
//storage and renders them in the appropriate time-blocks. 
  function init() {
    updateTimeDate();
    setInterval(updateTimeDate, 1000);
    renderEntries();
    setPastPresentFuture();
  }
  init();