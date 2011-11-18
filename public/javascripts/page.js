
  $("#send").click(function(){
    var command = $("#command").val();
    $("#history").append("<li>"+command+"</li>");
    socket.emit('command', command);
    $("#command").val('');
    $("#command").focus();
  });
  
  $("#command").keypress(function(event) {
    if (event.which == 13) {
      $('#send').click();
    };
  });
  
