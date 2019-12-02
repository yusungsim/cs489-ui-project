var current_other = false;
var current_id = 0;

function size_control(str){
    len = str.length;
    len = len * 10 + 10;
    len = len + "px";
    return len
}
function add_my_msg(){
    var temp = document.createElement('li');
    var message = document.getElementById('input_msg_box').value;
    len = size_control(message);
    temp.innerHTML = "<div class='my_msg'><div class='txt' id='temp'>"+ message +"</div></div>";
    document.getElementById('msg_list').appendChild(temp);
    document.getElementById('input_msg_box').value = "";
    document.getElementById('temp').style.width = len;
    document.getElementById('temp').id = 'fixed';
}
function addMyMsgByTxt(str,isMy){
    var temp = document.createElement('li');
    var message = str;
    len = size_control(message);
    if (isMy){
        temp.innerHTML = "<div class='my_msg'><div class='txt' id='temp'>"+ message +"</div></div>";
        current_other = false;
    }else{
        if (current_other){
            temp.innerHTML = "<div class='other_msg'><div class='profile'></div><div class='txt' id='temp'>"+ message +"</div></div>";
        }
        else{
            temp.innerHTML = "<div class='other_msg'><div class='profile'><img src='img/temp.jpg' alt='ProfileImage' width='40px' height='40px' /></div><div class='txt' id='temp'>"+ message +"</div></div>";
            current_other = true;
        }
        
    }
    document.getElementById('msg_list').appendChild(temp);
    document.getElementById('input_msg_box').value = "";
    document.getElementById('temp').style.width = len;
    document.getElementById('temp').id = current_id;
    current_id = current_id + 1;
}
function init(msgs,isMys){
    for(var i=0;i<msgs.length;i++){
        addMyMsgByTxt(msgs[i],isMys[i]);
    }
}