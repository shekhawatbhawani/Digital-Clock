let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let sec = document.querySelector(".sec")
let am = document.querySelector(".am")

 am = "AM"
 
function upDateClock(){
    
let now = new Date()

let hr = now.getHours()
let min = now.getMinutes()
let s = now.getSeconds()
let pm = now.getTimezoneOffset()
console.log(pm);


if (hr > 12) {
    hr = hr-12
    pm = "PM"
}


hour.textContent = hr
minute.textContent = min
sec.textContent = s
am.textContent = pm

setInterval(()=>{
    upDateClock()
},1000)
}

upDateClock()

