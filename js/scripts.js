
var inputTitle 	= document.getElementById('titleInput');
var texarea 	= document.getElementById('texarea');
var dateInput 	= document.getElementById('dateInput');
var addButton 	= $('#addTask');
var clearBtn 	= $('#clearBtn');
var pending 	= $('#pending');
var liText 		= $('#liText');
var message 	= $('#message');
var ok      	= $(".ok");
var closeB  	= $(".closeB");
var item    	=  $("#item")
var autoHeight 	= $("#items3");
var in_progress 	= $("#in_progress");
var completed 	= $("#completed");
var drag_to_delete 	= $("#drag_to_delete");
var delet    	= $("#delete");
var messageBox 	= $('#messageBox');

$(document).ready(function () {
	addButton.click(function () {
		if(inputTitle.value.length > 30){
			inputTitle.value = 'error'

		} 

		if (inputTitle.value && dateInput.value && texarea.value == "") {
			pending.append("");
		}
		else if (inputTitle.value == ""){
		 	pending.append("");
			message.css("display","block");
		  	message.css("opacity","1");
		 	item.css("opacity","0.9");
		}

		else if (dateInput.value == "") {
			pending.append('<li id="liText">' + "<b>" +
				inputTitle.value + "</b>" + "<br>" + "<tt>" + texarea.value + "</tt>" + "</li>");

		}
		else if (texarea.value == "") {
			pending.append('<li id="liText">' + "<b>" + inputTitle.value + "</b>" + "<br>" +
				"<i>" + dateInput.value + "</i>" + "<br>" + "</li>");
		}

		else {
			pending.append('<li id="liText">' + "<b>" + inputTitle.value + "</b>" + "<br>" +
				"<i>" + dateInput.value + "</i>" + "<br>" +
				"<tt>" + texarea.value + "</tt>" + "<br>" + "</li>");
		}

	inputTitle.value = "",dateInput.value = "",texarea.value = "";
		
		
	});

	clearBtn.click(function () {pending.empty()})
	ok.click(function(){ message.css("display","none"), item.css("opacity","1");})
	closeB.click(function(){ message.css("display","none"), item.css("opacity","1");})
	
});

$(function() {
   
    pending.sortable({ connectWith : "#in_progress,#completed,	#drag_to_delete, #pending"  });
    in_progress.sortable({ connectWith : "#in_progress,#pending, #completed,#drag_to_delete" });
    completed.sortable({ connectWith : "#completed,#pending,#drag_to_delete, #in_progress" });
    drag_to_delete.sortable({ connectWith : "#drag_to_delete"  });
});
pending.mousedown(function(){ 
	$(this).mousemove(function () {
		autoHeight.css({"min-height":"390px"})
		drag_to_delete.css({"display":"block"})
		drag_to_delete.css({"min-height":"90px"})
		delet.css({"display":"block"})

		in_progress.css({"height":"120px"})
		completed.css({"height":"120px"})
	});
});

pending.mouseup(function () { 
	$(this).unbind('mousemove')
	drag_to_delete.empty(),autoHeight.css({"min-height":"255px"})
	drag_to_delete.css({"display":"none"})
	delet.css({"display":"none"})

	in_progress.css({"height":"auto"})
	completed.css({"height":"auto"})
});

in_progress.mousedown(function(){ 
	$(this).mousemove(function (){
autoHeight.css({"min-height":"390px"})
	
	drag_to_delete.css({"display":"block"})
	drag_to_delete.css({"min-height":"90px"})
	delet.css({"display":"block"})

	pending.css({"height":"120px"})
	completed.css({"height":"120px"})
})});

in_progress.mouseup(function () {
	$(this).unbind('mousemove')
	drag_to_delete.empty()
	autoHeight.css({"min-height":"255px"})
	drag_to_delete.css({"display":"none"})
	delet.css({"display":"none"})

	pending.css({"height":"auto"})
	completed.css({"height":"auto"})
	
});	

completed.mousedown(function(){ 
	$(this).mousemove(function (){
		autoHeight.css({"min-height":"390px"})
		drag_to_delete.css({"display":"block"})
		delet.css({"display":"block"})

	pending.css({"height":"120px"})
	in_progress.css({"height":"120px"})
	
	})
});
completed.mouseup(function () { 
	$(this).unbind('mousemove')
	drag_to_delete.empty()
	autoHeight.css({"min-height":"255px"})
	drag_to_delete.css({"display":"none"})
	delet.css({"display":"none"})

	pending.css({"height":"auto"})
	in_progress.css({"height":"auto"})
	
}); 
$( function() {messageBox.sortable()});

$(function() {
   
 	$("#items").sortable({ connectWith : "#items1, #items2, #items3, #items"  });
 	$("#items1").sortable({ connectWith : "#items,#items2,items3, #items1" });
 	$("#items2").sortable({ connectWith : "#items,#items1, #items2,items3, #items2" });
	 $("#items3").sortable({ connectWith : "#items2, #items1, #items, #items3"  });
		  
})