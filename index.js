
//목록 ajax 처리
function Upload (e) {
    let list = ["./videoTemplate.html", "./writeTemplate.html"];
    $.ajax({
        url: list[e], 
        success: function(result){
            $("#js_Content").html(result);
        },
        error: function(xhr, status, error){
            console.log(status + ":  " + error);
        }
        
    });
}

// 공지창 닫기
function Popup_Close(){
    let CButton = document.getElementById("js_NoticeWrap");
    CButton.style.display = 'none';
}
//알림창 닫기
function Alert_Close(){
    $(".AlertLayer").css("display", "none").css("visibility", "hide");
    return 1;
}


//Post submit
function js_SubmitBtn_onclick(){
    var message = $(".js_Paper").val().length;
    if(message == 0){
        $(".AlertLayer").css("display", "block").css("visibility", "visible");
    }
    else{
        alert("올리기 성공");
        $(".js_SubmitBtn").attr('type', "submit")
    }
    return 1;
}


    // const content = document.getElementById("js_Content");

    // function Upload (e){
    //     let list = ["./videoTemplate", "./writeTemplate"];

    //     fetch(list[e]).then(function(response){
    //         response.text().then(function(text){
    //             content.innerHTML=text;
    //         })
    //     })
    // }