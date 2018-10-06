const content = document.getElementById("js_Content");

function Upload (e){
    let list = ["./videoTemplate", "./writeTemplate"];

    fetch(list[e]).then(function(response){
        response.text().then(function(text){
            content.innerHTML=text;
        })
    })
}

function Popup_Close(){
    let CButton = document.getElementById("js_NoticeWrap");
    CButton.style.display = 'none';
}