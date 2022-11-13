//Wait for document to finish loading before displaying changes
$(document).ready(function () {
    var saveBtn = $('.saveBtn');
    var now = dayjs().hour();
    var currentDay = dayjs().get('date');
    var currentMonth = dayjs().get('month');
    var container = $(".container-fluid").children();  
    $('#currentDay').text("Today is the " + currentDay + "th day of month " + (currentMonth+1) );
  
//code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
    for(var i =0; i < localStorage.length; i++)
      $("#hour-"+localStorage.key(i)).children("textarea").val(Object.values(localStorage)[i]);  
  
// apply the past, present, or future class to each time block by comparing the id to the current hour
    for(var i =0; i < container.length; i++){
      if(now < i + 9)
        $(container[i]).attr("class", 'row time-block future');      
        else if (now == i + 9)
        $(container[i]).attr("class", 'row time-block present'); 
          else
          $(container[i]).attr("class", 'row time-block past');
    }
    
//listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
    saveBtn.click(function(){
      var targetText = $(this).siblings(".description").val();   
      var divId = $(this).parent().attr("id").slice(5); 
      localStorage.setItem(divId, targetText);
    })
  });