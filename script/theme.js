const theme = document.getElementById("theme")
const body = document.getElementById("body")
// body.style.backgroundColor()

 theme.addEventListener("click", function(){
    let color = ["#B4EBE6","blue", "Teal", "#80CBC4" , "#C599B6" ,"#2DAA9E"]
    let random =Math.floor(Math.random()*color.length)
    body.style.background = color[random]
})

let random =Math.floor(Math.random()*color.length)
console.log(color[random])

