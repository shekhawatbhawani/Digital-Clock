let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let sec = document.querySelector(".sec")
let am = document.querySelector(".am")

 let  pmam = "AM"
 
function upDateClock(){
    
let now = new Date()

let hr = now.getHours()
let min = now.getMinutes()
let s = now.getSeconds()
let pm = now.getTimezoneOffset()
console.log(pm);


if (hr > 12) {
    hr = hr-12
    pmam = "PM"
}


hour.textContent = hr
minute.textContent = min
sec.textContent = s
am.textContent = pmam

setInterval(()=>{
    upDateClock()
},1000)
}

upDateClock()

