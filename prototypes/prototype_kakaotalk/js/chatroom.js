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
    }else{
        temp.innerHTML = "<div class='other_msg'><div class='txt' id='temp'>"+ message +"</div></div>";
    }
    document.getElementById('msg_list').appendChild(temp);
    document.getElementById('input_msg_box').value = "";
    document.getElementById('temp').style.width = len;
    document.getElementById('temp').id = 'fixed';
}
function init(msgs,isMys){
    for(var i=0;i<msgs.length;i++){
        addMyMsgByTxt(msgs[i],isMys[i]);
    }
}