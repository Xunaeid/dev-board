const task = document.getElementById("task")
const score = document.getElementById("score")

let taskValue = parseInt( document.getElementById("task").innerText)
let scoreValue = parseInt( document.getElementById("score").innerText)

const btnOne = document.getElementById("btn-1")
const btnTwo = document.getElementById("btn-2")
const btnThree = document.getElementById("btn-3")
const btnFour = document.getElementById("btn-4")
const btnFive = document.getElementById("btn-5")
const btnSix = document.getElementById("btn-6")


const taskOne = document.getElementById("task-1").innerText
const taskTwo = document.getElementById("task-2").innerText
const taskThree = document.getElementById("task-3").innerText
const taskFour = document.getElementById("task-4").innerText
const taskFive = document.getElementById("task-5").innerText
const taskSix = document.getElementById("task-6").innerText

function disabledBtn(btn){
   btn.disabled = true
   btn.style.background ="#c1c1c1"
}

function taskComplete(){
   taskValue --
   task.innerText = taskValue
}

function pointAdd(){
   scoreValue ++
   score.innerText = scoreValue
}

function btnEvents(task,btn){
   taskComplete()
   pointAdd()
   activity(task,new Date().toLocaleTimeString())
   disabledBtn(btn)
   alert("Board updated Successfully")
   allDone()
}




    btnOne.addEventListener("click",function(){
      btnEvents(taskOne,btnOne)
    })

    btnTwo.addEventListener("click",function(){
      btnEvents(taskTwo,btnTwo)
   })

   btnThree.addEventListener("click",function(){
      btnEvents(taskThree,btnThree)
   })

   btnFour.addEventListener("click",function(){
      btnEvents(taskFour,btnFour)
   })

   btnFive.addEventListener("click",function(){
      btnEvents(taskFive,btnFive)
   })

   btnSix.addEventListener("click",function(){
      btnEvents(taskSix,btnSix)
   })

const clearHistory = document.getElementById("historyBtn")
    clearHistory.addEventListener("click", function(){
      history.innerHTML =""
    })


const now = new Date();
const formattedDate = now.toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
const formattedDay = now.toLocaleString('en-GB', {weekday: 'long'});
const day = document.getElementById("day")
day.innerText=  formattedDay;
const date = document.getElementById("date")
date.innerText=  formattedDate;

// activity log
const history = document.getElementById("history")
    function activity(task,time){
     const div= document.createElement("div")
     div.innerHTML=`
     <div class="w-[318px] rounded-md bg-[#F4F7FF] p-3 mt-5 ">
     <p>You have Completed The Task ${task} at ${time}</p>
    </div>`
    history.appendChild(div)
    }
// deadline
const deadline = document.querySelectorAll(".deadline")
for (let i = 0; i < deadline.length; i++) {
deadline[i].innerText=  formattedDate;
}


function allDone(){
   if(taskValue === 0)( 
      alert("congrats !!! 🙂 You have successfully completed all the current task")
   )
}

// discover
const discover = document.getElementById("discover")

discover.addEventListener("click", function(){
    location.href = "blog.html";

})


