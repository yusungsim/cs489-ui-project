var click_count = 0;
var current_object = null;
var click_outside = true;
var parsed_str = new Array();
var modal = $("#target-modal");
var isClosed = true;


$(document).ready(function() {
	$(".txt").click(function(event) {
		current_object = $("#"+event.target.id);
		click_count = 0;
		isClosed = false;
		$("#target-modal").addClass("slideInUp");
		show_card_msg(current_object, click_count);
	});
	$("#target-modal").on("show.bs.modal", function() {
		$("#target-modal").click(function(event) {
			$("#target-modal").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function( evt ) {
				$("#target-modal").modal('hide');
			});
			$("#target-modal").removeClass("slideInUp").addClass("slideOutUp");
			isClosed = true;
		});

	});
	$("#target-modal").on("hidden.bs.modal", function() {
		$("#target-modal").removeClass("slideOutUp");
		$("#target-modal").off("webkitAnimationEnd oanimationend msAnimationEnd animationend");
	});
	$('#target-modal').on('mousewheel', function(e){
		if(e.originalEvent.wheelDelta /120 > 0) {
			alert("up");
		}
		else{
			if(isClosed) {

			}
			else {
				click_count++;
				show_card_msg(current_object, click_count);
			}
		}
	});



});



function nextObj(currentNode) {
	return currentNode.parent().parent().next().children().children();
}


function parsing(str){
	result = new Array();
	result.push("Target string : "+str);
	result.push("Parsed str1");
	result.push("Parsed str2");
	return result;
}

function change_modal_content(event) {

}

function show_card_msg(current_obj, cnt) {
	if(current_obj.text()) {
		parsed_str = parsing(current_obj.text());
		if(cnt < parsed_str.length) {
			if(current_obj.parent().attr("class")=="other_msg") {
				$(".modal-header").css("background-color", "white");
				$(".modal-body").css("background-color", "white");
				$("#modalTitle").text("Sender");
				$("#modal-reply").css("display", "inline");
			}
			else {
				$(".modal-header").css("background-color", "lightyellow");
				$(".modal-body").css("background-color", "lightyellow");
				$("#modalTitle").text("Me");
				$("#modal-reply").css("display", "none");

			}
			$("#modal-text").text(parsed_str[cnt]);
			$("#target-modal").modal("show");
		}
		else {
			click_count = 0;
			current_object = nextObj(current_obj);
			show_card_msg(current_object, click_count);
		}
	}
	else {
		click_count = 0;
		isClosed = true;
		$("#target-modal").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function( evt ) {
			$("#target-modal").modal('hide');
		});
		$("#target-modal").removeClass("slideInUp").addClass("slideOutUp");
	}
	//current_obj = nextObj(current_obj);
	//alert(current_obj.text());
}