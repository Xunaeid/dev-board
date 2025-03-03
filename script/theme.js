const theme = document.getElementById("theme")
const body = document.getElementById("body")

 theme.addEventListener("click", function(){
    let color = [ "#00ffc8", "#0095ff" ," #C599B6" ,"#2DAA9E ", "#0000ff" , "#ff00a6", "#9000ff", "#5eff00", "#1f1f1f", "#b4b4b4"]
    let random =Math.floor(Math.random()*color.length)
    body.style.background = color[random]
})



