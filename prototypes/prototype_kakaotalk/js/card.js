function parsing(str){
	result = new Array();
	result.push("This");
	result.push("is");
	result.push("msg");
	return result;
}

function show_card_msg(clicked_id) {
	var msgList = Array.prototype.slice.call( document.getElementById('msg_list').children);
	var indexOfcurrentMsg = msgList.indexOf( document.getElementById(clicked_id) );
	var msg = document.getElementById(clicked_id).innerHTML;
	var msg_array = parsing(msg);
	
	var card = document.getElementById("card");
	var msgid = document.getElementById("msg_list");


	msgid.style.display="none";
	card.style.display="block";

	var cnt = 0;
	document.getElementById("textid").innerHTML=msg_array[cnt];
	document.getElementById("card").onclick = function() {
		document.getElementById("card").style.display="none";
		document.getElementById("msg_list").style.display="block";
	}	
}


