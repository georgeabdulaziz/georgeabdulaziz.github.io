
var kingNum = 7;
function kingFunction(){
    if(kingNum < 1){
        return
    }
    var kingStyle = document.querySelector("#king");
    const style = getComputedStyle(kingStyle);
    var top = parseInt(style.top.replace("px", ""));
    document.getElementById("king").style.top = `${top - 110}px`; 
    //kingStyle.top = 
    kingNum-=1;

}

function replaceImage(piece){
    const source = `photos/${piece}.png`;
    console.log(source);
    document.getElementById("piece").src = source;
}