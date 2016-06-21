//設定上方時鐘
var moment = require('moment');

ShowTime();

function ShowTime(){
    $("#top_date").html(moment().format("YYYY-MM-DD"));
    $("#top_time").html(moment().format("HH:mm:ss dddd"));
    setTimeout('ShowTime()',1000);
}

function ajax_callback( input_url, input_obj ){
    return new Promise(function(resolve, reject){
        $.ajax({
            method: "POST",
            url: input_url,
            data: input_obj
        }).done(function( msg ) {
            console.log( "ajax結果 " );
            resolve(msg);
        }); 
    });
}

//按下去會跳到的設定頁面
    $(".i-back").on("click",function(){
        history.back();
    })
    
    $(".i-setting").on("click",function(){
        document.location.href="p_03.html";
    })
    
    $(".i-admin").on("click",function(){
        document.location.href="p_04.html";
    })
    
    $(".i-sync").on("click",function(){
        document.location.href="p_03.html";//不知道
    })
    
    $(".i-log").on("click",function(){
        document.location.href="p_06.html";
    })
    
    $(".i-system").on("click",function(){
        document.location.href="p_08.html";
    })
    
    $(".i-finger").on("click",function(){
        document.location.href="p_01.html";
    })  
    
    $(".i-access").on("click",function(){
        document.location.href="p_07.html";
    })     