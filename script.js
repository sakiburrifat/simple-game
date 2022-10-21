var start = new Date().getTime()



function ShapeAppearAfterDelay(){
    setTimeout(makeShapeAppear, Math.random() * 1000);
}
function makeShapeAppear(){
    document.getElementById("shape").style.display = "block";
     start = new Date().getTime()
    var top = Math.random() * 600;
    var left = Math.random() * 100;
    var width = (Math.random() * 50) + 50;
    var height = (Math.random() * 50) + 50;
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "%";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = height + "px";
    document.getElementById("shape").style.backgroundColor = get_random_color();
    

    if( width < 80 ){
        document.getElementById("shape").style.borderRadius = "50%"
    }
    else{
        document.getElementById("shape").style.borderRadius = "0"
    }

} 



function get_random_color() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
};


ShapeAppearAfterDelay();


document.getElementById("shape").onclick = function (){
    document.getElementById("shape").style.display = "none"
    var audio = new Audio('beep1.mp3');
    audio.play();
    ShapeAppearAfterDelay();
    var end = new Date().getTime();

    var calculatTime = (end - start)/1000 ;
    document.getElementById("reactionTime").innerHTML = calculatTime;
}



function reload(){
    window.location.reload();
}
