const theme = document.getElementById("theme")
const body = document.getElementById("body")
// body.style.backgroundColor()

 theme.addEventListener("click", function(){
    let color = ["#B4EBE6","blue", "red", "#80CBC4" , "#C599B6" ,"#2DAA9E"]
    let random =Math.floor(Math.random()*color.length)
    body.style.background = color[random]
})


 
// let color = [body.style.background = "teal",body.style.background = "blue",body.style.background = "red"]

let random =Math.floor(Math.random()*color.length)
console.log(color[random])


//  bg-teal-100
//  bg-red-100
//  bg-gray-100
//  bg-orange-100
//  bg-blue-100
//  bg-green-100