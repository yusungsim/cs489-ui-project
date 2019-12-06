var current_other = false;
var current_name = "";
var current_id = 0;
var shorten = false;

function size_control(str){
    len = str.length;
    len = len * 10 + 10;
    len = len + "px";
    return len
}
function add_my_msg(){
    var temp = document.createElement('div');
    var message = document.getElementById('input_msg_box').value;
    message = "<p style='word-break:break-all;'>"+message+"</p>";
    temp.innerHTML = "<div class='my_msg' id='kkk'><div class='txt' id='temp'>"+ message +"</div></div>";
    document.getElementById('msg_list').appendChild(temp);
    document.getElementById('input_msg_box').value = "";
    var temp = document.getElementById('temp');
    temp.style.top = "0px";
    var hhh = getComputedStyle(temp).height;
    var qqq = parseFloat(hhh)+10.0;
    hhh = qqq+"px";
    document.getElementById('kkk').style.height = hhh;
    document.getElementById('temp').id = current_id;
    current_id = current_id + 1;
    document.getElementById('kkk').id = 'fixed';
}
function addMyMsgByTxt(str,who){
    var temp = document.createElement('div');
    var message = str;
    message = "<p style='word-break:break-all;'>"+str+"</p>";
    if (who=="나"){
        temp.innerHTML = "<div class='my_msg' id='kkk'><div class='txt' id='temp'>"+ message +"</div></div>";
        current_other = false;
        shorten = true;
    }else{
        if (current_other && current_name == who){
            temp.innerHTML = "<div class='other_msg' id='kkk'><div class='profile'></div><div class='txt' id='temp'>"+ message +"</div></div>";
            shorten = true;
        }
        else{
            temp.innerHTML = "<div class='other_msg' id='kkk'><div class='profile'><img src='img/temp.jpg' alt='ProfileImage' width='40px' height='40px' /></div><div class='p_name'>"+who+"</div><div class='txt' id='temp'>"+ message +"</div></div>";
            current_other = true;
            current_name = who;
            shorten = false;
        }
        
    }
    document.getElementById('msg_list').appendChild(temp);
    document.getElementById('input_msg_box').value = "";
    var temp = document.getElementById('temp');
    var hhh = getComputedStyle(temp).height;
    var qqq = parseFloat(hhh)+30.0;
    if (shorten){
        temp.style.top = "20px";
    }
    hhh = qqq+"px";
    document.getElementById('kkk').style.height = hhh;
    document.getElementById('temp').id = current_id;
    current_id = current_id + 1;
    document.getElementById('kkk').id = 'fixed';

}
function init(MsgsAndName){
    for(var i=0;i<MsgsAndName.length;i++){
        addMyMsgByTxt(MsgsAndName[i][1],MsgsAndName[i][0]);
        console.log(MsgsAndName[i][1]);
    }
}