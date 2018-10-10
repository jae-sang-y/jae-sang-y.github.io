
//목록 ajax 처리
function Upload (e) {
    let list = ["./videoTemplate", "./writeTemplate"];
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
// function Popup_Close(){
//     let CButton = document.getElementById("js_NoticeWrap");
//     CButton.style.display = 'none';
// }

// $("#js_SubmitButton").on('click', function(){
//     let message = document.querySelector(".Post_Sec textarea").value;
//     if("" == message){
//         $("#AlertPage").show();
//     }
// })


// const content = document.getElementById("js_Content");

// function Upload (e){
//     let list = ["./videoTemplate", "./writeTemplate"];

//     fetch(list[e]).then(function(response){
//         response.text().then(function(text){
//             content.innerHTML=text;
//         })
//     })
// }
