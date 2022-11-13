$(document).ready(function () {
    var saveBtn = $('.saveBtn');
    var now = dayjs().hour();
    var currentDay = dayjs().get('date');
    var currentMonth = dayjs().get('month');
    var container = $(".container-fluid").children();  
    $('#currentDay').text("Today is the " + currentDay + "th day of month " + (currentMonth+1) );
  

    for(var i =0; i < localStorage.length; i++)
      $("#hour-"+localStorage.key(i)).children("textarea").val(Object.values(localStorage)[i]);  
  

    for(var i =0; i < container.length; i++){
      if(now < i + 9)
        $(container[i]).attr("class", 'row time-block future');      
        else if (now == i + 9)
        $(container[i]).attr("class", 'row time-block present'); 
          else
          $(container[i]).attr("class", 'row time-block past');
    }
    

    saveBtn.click(function(){
      var targetText = $(this).siblings(".description").val();   
      var divId = $(this).parent().attr("id").slice(5); 
      localStorage.setItem(divId, targetText);
    })
  });