var click_count = 0;
var current_object = null;
var click_outside = true;
var parsed_str = new Array();
var modal = $("#target-modal");
var isClosed = true;
var isFirst = true;


$(document).ready(function() {
	$(".txt").click(function(event) {
		
		if (event.target.tagName == "P") {
			current_object = $("#"+event.target.parentNode.id);
		}
		else{
			current_object = $("#"+event.target.id);
		}
		click_count = 0;
		isClosed = false;
		isFirst = true;
		$("#target-modal").addClass("slideInUp");
		show_card_msg(current_object, click_count);
	});
	
	$("#target-modal").on("shown.bs.modal", function() {
		$("#target-modal").click(function(e) {
			if(e.target.id == "reply") {
				$("#reply").keyup(function(key) {
					if (key.keyCode == 13) {
						if($("#reply").val() != "\n") {
							addMyMsgByTxt($("#reply").val(), "나");
							$("#reply").val("");
							$("#reply").addClass("animated pulse");
							$("#reply").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function( evt ) {
								$("#reply").removeClass("animated pulse");
							});
							$("#msg_list").scrollTop($("#msg_list")[0].scrollHeight);
						}
						else {
							$("#reply").val("");
							$("#reply").addClass("animated shake");
							$("#reply").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function( evt ) {
								$("#reply").removeClass("animated shake");
							});
						}
					}
				});
			}
			else {
				$("#target-modal").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function( evt ) {
					$("#target-modal").modal('hide');
				});
				$("#target-modal").removeClass("slideInUp").addClass("slideOutUp");
				isClosed = true;
			}
		});

	});
	

	$("#target-modal").on("hidden.bs.modal", function() {
		$("#target-modal").removeClass("slideOutUp");
		$("#target-modal").off("webkitAnimationEnd oanimationend msAnimationEnd animationend");
	});
	$('#target-modal').on('mousewheel', function(e){
		if(e.originalEvent.wheelDelta /120 > 0) {
			if(isClosed) {

			}
			else {
				click_count--;
				show_card_msg(current_object, click_count);
			}
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
	return currentNode.parent().parent().next().children().find(".txt");
}
function prevObj(currentNode) {
	return currentNode.parent().parent().prev().children().find(".txt");
}


function change_modal_content(event) {

}

function find_sender(current_obj) {
	var result_obj = current_obj;
	while(result_obj.parent().find(".p_name").text()=="") {
		result_obj = prevObj(result_obj);
	}
	return result_obj;
}


function show_card_msg(current_obj, cnt) {
	if(current_obj.text()) {
		parsed_str = parsing_string(current_obj.text());
		if(cnt < parsed_str.length && cnt >= 0) {
			if(current_obj.parent().attr("class")=="other_msg") {
				$(".modal-header").css("background-color", "white");
				$(".modal-body").css("background-color", "white");
				if(current_obj.parent().find(".p_name").text()!="" && !isFirst) {
					$("#target-modal").removeClass("slideInUp").addClass("pulse");
					$("#target-modal").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function( evt ) {
						$("#target-modal").removeClass("pulse");
					});
				}
				$("#modalTitle").text(find_sender(current_obj).parent().find(".p_name").text());
				$("#modal-reply").css("display", "inline");

			}
			else {
				$(".modal-header").css("background-color", "lightyellow");
				$(".modal-body").css("background-color", "lightyellow");
				$("#modalTitle").text("나");
				$("#modal-reply").css("display", "none");

			}
			$("#modal-text").text(parsed_str[cnt]);
			$("#target-modal").modal("show");
		}
		else if (cnt >= parsed_str.length) {
			click_count = 0;
			current_object = nextObj(current_obj);
			show_card_msg(current_object, click_count);
		}
		else {
			click_count = parsing_string(prevObj(current_obj).text()).length - 1;
			current_object = prevObj(current_obj);
			show_card_msg(current_object, click_count);
		} 
	}
	else {
		console.log("closed");
		click_count = 0;
		isClosed = true;
	
		$("#target-modal").removeClass("slideInUp").addClass("slideOutUp");
		$("#target-modal").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function( evt ) {
			$("#target-modal").modal('hide');
		});
	}
	isFirst = false;
}

var chat_log = [["윤기목", "발표 자료에 25번이랑 27번 슬라이드 내용 똑같은 거 같은데 뒤에 꺼 빼면 될까요?"],
                ["전정연", "앗 27번 빼면될것 같아요"], ["전정연", "깜빡하고 삭제를 안했네요ㅠㅠ"], ["윤기목", "넵넵 괜찮습니다 ㅎㅎ"],
                ["이기상", "발표자료에 오타 몇개 있어서 수정했고 마지막 28번 슬라이드에 any questions 삭제하겠습니다~"],
                ["윤기목", "refrence 부분에도 똑같은 게 2번 들어가서 하나 지웠습니다"],
                ["윤기목", "저 그 api call 부분에 hamming distance 부분 이해가 잘 안 가네요 ㅜㅜ 혹시 그거 담당하셨던 분 간략히 설명해주실 수 있나요"],
                ["장건호", "저도 자세히는 찾아보지 않았었습니다 ㅠㅠㅠ 그 논문에서 원래의 것과 차이나는 정도를 hamming distance 로 나타낸다고 나와있었단것 같아요 해당 논문이 리뷰 논문이다보니 그정도만 나와있았던거 같고 찾아보려면 참고문헌 타고 들어가야할것 같아요"],
                ["윤기목", "아하 리뷰 논문이라 설명이 자세히 나와있진 않았군요 ㅜㅜ 일단 ppt 설명대로 발표하겠습니당"],
                ["윤기목", "저희 발표자료 klms에 올리셨나요?"], ["윤기목","수고하셨습니다"]];


function add_enter(str, sub_string){
    var str_n = str.length;
    var array = str.split(sub_string);
    var n = array.length;

    var result = array[0];

    if (n == 0){
        return str;
    }

    var result = array[0];

    for (var i=1; i<n; i++)
    {
        if(array[i]=="")
        {
            result = result + sub_string;
        }
        else
        {
            result = result +  sub_string +"\n" + array[i];
        }
    }

    return result;
}

function parsing_string(str){

    var rtn_value = [];

    if (str.length < 25)
    {
        rtn_value.push(str);
    }

    else
    {

        var result = add_enter(str, "?");
        result = add_enter(result, "!");
        result = add_enter(result, ".");

        result = add_enter(str, "ㅋ");
        result = add_enter(result, "ㅎ");
        result = add_enter(result, "ㅠ");
        result = add_enter(result, "ㅜ");

        var array = result.split("\n");

        var n = array.length;

        for (var j = 0; j < n; j++)
        {
            var token = array[j];

            if( token != "")
            {
                rtn_value.push(token);
            }
        }
     }

     return rtn_value;

}