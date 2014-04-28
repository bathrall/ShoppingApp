$(document).ready(function() {
    //add by clicking add button
    $("#button").click(function() {
       var toAdd = $("input[name=checkListItem]").val();
        
    toAdd = toAdd.trim()
    if (0 == toAdd.length) { //prevent adding empty item
        console.log("no");
        return;
    }
    //removes input value
        $("#object").val("");

        var newItem = $('<div class="item">' + toAdd + '</div>');
         $(".list").append(newItem);

         //double click to remove
        $(document).on("dblclick", ".item", function() {
          $(this).remove ();  
        }) 

        //click to strike through
        newItem.click(function() {
            console.log("running the click bind function on", this);
            $(this).addClass("crossedOut");
        })           
        
    });  
    //add by hitting enter key
 	$('#object').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('#button').click();
        }
    });
        
	  
});



