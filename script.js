function cooking(event){
    var div = document.getElementById('button1');
    div.innerText ="cooking";
    var second = document.getElementById('thirdinput1');
    var second = $("thirdinput1").val();
    console.log(second);
    var bar = document.getElementById("bar")
    var width = 0;
    var i = 0;
  var id =  setInterval(myTimer, second);
function myTimer(){
    var color =["blue","green","yellow","orange","red"];
    if(width>=100){
        clearInterval(id);
        div.innerText ="Start cooking";
    }
    else{
        width++;
        bar.style.width = width+ '%';
        bar.innerHTML= width*1+'%';
        bar.style.backgroundColor=color[i];
        i = (i+1) % color.length;
    }
}
}
