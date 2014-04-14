$(document).ready(function() {
    //add by clicking add button
    $("#button").click(function() {
       var toAdd = $("input[name=checkListItem]").val();
         $(".list").append ('<div class="item">' + toAdd + '</div>');
        //removes input value
        $("#object").val("");
    });  
    //add by hitting enter key
 	$('#object').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('#button').click();
        }
    });
        
	//double click to remove
        $(document).on("dblclick", ".item", function() {
          $(this).remove ();  
        })  		    
});



