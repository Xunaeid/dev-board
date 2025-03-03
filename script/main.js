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
   btn.style.background ="gray"
}

function taskComplete(){
   taskValue --
   task.innerText = taskValue
}

function pointAdd(){
   scoreValue ++
   score.innerText = scoreValue
}

const history = document.getElementById("history")

    function activity(task,time){
     const div= document.createElement("div")
     div.innerHTML=`
     <div class="w-[318px] rounded-md bg-[#F4F7FF] p-3 mt-5 ">
     <p>You have Complete The Task ${task} at ${time}</p>
    </div>`
    history.appendChild(div)
    }

    
    btnOne.addEventListener("click",function(){
       taskComplete()
       pointAdd()
       activity(taskOne,new Date().toLocaleTimeString())
       disabledBtn(btnOne)
       alert("Board updated Successfully")
       allDone()
    })

    btnTwo.addEventListener("click",function(){
      taskValue --
      task.innerText = taskValue
      scoreValue ++
      score.innerText = scoreValue
      activity(taskTwo,new Date().toLocaleTimeString())
      disabledBtn(btnTwo)
      alert("Board updated Successfully")
      allDone()
   })

   btnThree.addEventListener("click",function(){
      taskValue --
      task.innerText = taskValue
      scoreValue ++
      score.innerText = scoreValue
      activity(taskThree,new Date().toLocaleTimeString())
      disabledBtn(btnThree)
      alert("Board updated Successfully")
      allDone()
   })

   btnFour.addEventListener("click",function(){
      taskValue --
      task.innerText = taskValue
      scoreValue ++
      score.innerText = scoreValue
      activity(taskFour,new Date().toLocaleTimeString())
      disabledBtn(btnFour)
      alert("Board updated Successfully")
      allDone()
   })

   btnFive.addEventListener("click",function(){
      taskValue --
      task.innerText = taskValue
      scoreValue ++
      score.innerText = scoreValue
      activity(taskFive,new Date().toLocaleTimeString())
      disabledBtn(btnFive)
      alert("Board updated Successfully")
      allDone()
   })

   btnSix.addEventListener("click",function(){
      taskValue --
      task.innerText = taskValue
      scoreValue ++
      score.innerText = scoreValue
      activity(taskSix,new Date().toLocaleTimeString())
      disabledBtn(btnSix)
      alert("Board updated Successfully")
      allDone()
   })




const history = document.getElementById("history")

    function activity(task,time){
     const div= document.createElement("div")
     div.innerHTML=`
     <div class="w-[318px] rounded-md bg-[#F4F7FF] p-3 mt-5 ">
     <p>You have Complete The Task ${task} at ${time}</p>
    </div>`
    history.appendChild(div)
    }

const clearHistory = document.getElementById("historyBtn")
    clearHistory.addEventListener("click", function(){
      history.innerHTML =""
    })


const now = new Date();
const formattedDate = now.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
const formattedDay = now.toLocaleString('en-US', {weekday: 'long'});
const day = document.getElementById("day")
day.innerText=  formattedDay;
const date = document.getElementById("date")
date.innerText=  formattedDate;


const deadline = document.querySelectorAll(".deadline")
for (let i = 0; i < deadline.length; i++) {
deadline[i].innerText=  formattedDate;
}


function allDone(){
   if(taskValue === 0)(
      alert("congrats!!! You have successfully completed all the current task")
   )
}


