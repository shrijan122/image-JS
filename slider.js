let msg=document.getElementById(" message")
msg.textContent="Text changed using JS"


let counter=0
const countDisplay=document.getElementById(" count")
const button=document.getElementById("btn")
button. addEventListener ("click", function() {
    counter++
 countDisplay.textContent=counter
})