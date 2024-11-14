const buttonsNumber = ["c", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "/", ".", "0", "="]

for(i=0; i<buttonsNumber.length; i++) {
    var butt = document.createElement("button")
    var diva = document.getElementById("buttonDiv")
    butt.innerHTML = buttonsNumber[i]
    butt.className = "calcbutton"
    butt.id = `calcbutton${i}`
    diva.appendChild(butt)
}
var calcInput = document.getElementById("calcInput")
document.getElementById("calcbutton16").style.width = "90%"
document.getElementById("calcbutton0").addEventListener("click", () => {
    calcInput.value = ""
})
document.getElementById("calcbutton1").addEventListener("click", () => {
    calcInput.value = calcbutton1.innerHTML
})
document.getElementById("calcbutton2").addEventListener("click", () => {
    calcInput.value = calcInput.value + calcbutton2.innerHTML
})
document.getElementById("calcbutton3").addEventListener("click", () => {
    calcInput.value = calcInput.value + calcbutton3.innerHTML
})
document.getElementById("calcbutton4").addEventListener("click", () => {
    if(calcInput.value != "") {
    calcInput.value = calcInput.value + calcbutton4.innerHTML
    }
})
document.getElementById("calcbutton5").addEventListener("click", () => {
    calcInput.value = calcInput.value + calcbutton5.innerHTML
})
document.getElementById("calcbutton6").addEventListener("click", () => {
    calcInput.value = calcInput.value + calcbutton6.innerHTML
})
document.getElementById("calcbutton7").addEventListener("click", () => {
    calcInput.value = calcInput.value + calcbutton7.innerHTML
})
document.getElementById("calcbutton8").addEventListener("click", () => {
    if(calcInput.value != "") {
    calcInput.value = calcInput.value + calcbutton8.innerHTML
    }
})
document.getElementById("calcbutton9").addEventListener("click", () => {
    calcInput.value = calcInput.value + calcbutton9.innerHTML
})
document.getElementById("calcbutton10").addEventListener("click", () => {
    calcInput.value = calcInput.value + calcbutton10.innerHTML
})
document.getElementById("calcbutton11").addEventListener("click", () => {
    calcInput.value = calcInput.value + calcbutton11.innerHTML
})
document.getElementById("calcbutton12").addEventListener("click", () => {
    if(calcInput.value != "") {
    calcInput.value = calcInput.value + calcbutton12.innerHTML
    }
})
document.getElementById("calcbutton13").addEventListener("click", () => {
    if(calcInput.value != "") {
        calcInput.value = calcInput.value + calcbutton13.innerHTML
        }
})
document.getElementById("calcbutton14").addEventListener("click", () => {
    if(calcInput.value.slice(-1) != ".") {
    calcInput.value = calcInput.value + calcbutton14.innerHTML
} 
})
document.getElementById("calcbutton15").addEventListener("click", () => {
    calcInput.value = calcInput.value + calcbutton15.innerHTML
})
document.getElementById("calcbutton16").addEventListener("click", () => {
    calcInput.value = eval(calcInput.value)
})

