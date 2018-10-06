console.log("PLEASE DON'T HACK THIS-BEGIN");

var config = {
apiKey: "AIzaSyASYz82jEqLjeVwlGh7Hzn_f-eXCabfPDA",
authDomain: "public-screen.firebaseapp.com",
databaseURL: "https://public-screen.firebaseio.com",
projectId: "public-screen",
storageBucket: "public-screen.appspot.com",
messagingSenderId: "751968067785"
};
firebase.initializeApp(config);

var d = new Date();
var t = d.getTime() % 32768;

var i;
for (i = 0; i < t; ++i)
{
    Math.random();
}
$(document).ready(function(){
    $("#head").load("head.html")
});
var sentences = [];
$(document).ready(function() {
            
    sentences.push('쓰기 전에 한 번만 더 생각하세요');
    sentences.push('소통의 창구, Public Screen!');
    sentences.push('공감 소통 교류!');
    
    
    TextPusher_ExampleText();
});

function TextPusher()
{
    var obj = {};

    obj['user-'+(Math.round(Math.random()*(7)))] = $("#TextPusher_Text").val();
    firebase.database().ref("notice").update(obj).then(
    function(){
        $("#TextPusher_Progress").text('정상적으로 전송했습니다.').css('color','#66DD66').clearQueue().animate({ opacity: 1 }, 250).animate({ opacity: 0 }, 3000);
    }).catch(
    function(error) {
        $("#TextPusher_Progress").text('전송에 실패했습니다.' + error).css('color','#DD6666').clearQueue().animate({ opacity: 1 }, 250).animate({ opacity: 0 }, 3000);
    });
    $("#TextPusher_Text").val('');
}

function TubePusher()
{
    if ($("#TubePusher_Text").val().includes('www.youtube.com/watch?v='))
    {
        var obj = {};
        obj['user-'+(Math.round(Math.random()*(7)))] = $("#TubePusher_Text").val();
        firebase.database().ref("tube").update(obj).then(
        function(){
            $("#TubePusher_Progress").text('정상적으로 전송했습니다.').css('color','#66DD66').clearQueue().animate({ opacity: 1 }, 250).animate({ opacity: 0 }, 3000);
        }).catch(
        function(error) {
            $("#TubePusher_Progress").text('전송에 실패했습니다.' + error).css('color','#DD6666').clearQueue().animate({ opacity: 1 }, 250).animate({ opacity: 0 }, 3000);
        });
        $("#TubePusher_Text").val('');
    }
    else
    {
        $("#TubePusher_Progress").text('형식에 맞지않는 링크입니다.').css('color','#DD6666').clearQueue().animate({ opacity: 1 }, 250).animate({ opacity: 0 }, 3000);
        $("#TubePusher_Text").val('');
    }
}
function TubePusher_ExampleText_Select()
{
    $("#TubePusher_ExampleText").css("visibility",'hidden');
}
function TubePusher_ExampleText_Deselect()
{
    if ($("#TubePusher_Text").val() == '')
    {
        $("#TubePusher_ExampleText").css("visibility",'visible');
    }
    else
    {
        $("#TubePusher_ExampleText").css("visibility",'hidden');
    }
}
function TextPusher_ExampleText_Select()
{
    $("#TextPusher_ExampleText").css("visibility",'hidden');
}
function TextPusher_ExampleText_Deselect()
{
    if ($("#TextPusher_Text").val() == '')
    {
        TextPusher_ExampleText();
        $("#TextPusher_ExampleText").css("visibility",'visible');
    }
    else
    {
        $("#TextPusher_ExampleText").css("visibility",'hidden');
    }
}
function TextPusher_ExampleText()
{
    index = Math.floor(Math.random()*(sentences.length));
    
    $("#TextPusher_ExampleSubText").text(sentences[index]);
}
console.log("PLEASE DON'T HACK THIS-END");