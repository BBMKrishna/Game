$(document).keypress(function(event){
$("h1").text(event.key);

})

$("button").click(function(){
$("h1").css("color","red");
})
$("h1").on("mouseover",function(){$("h1").css("color","blue");});
