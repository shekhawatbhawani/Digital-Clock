let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let sec = document.querySelector(".sec")
 
function upDateClock(){
    
let now = new Date()

let hr = now.getHours()
let min = now.getMinutes()
let s = now.getSeconds()

console.log(hr);
console.log(min);
console.log(s);


hour.textContent = hr
minute.textContent = min
sec.textContent = s

setInterval(()=>{
    upDateClock()
},1000)
}

upDateClock()

