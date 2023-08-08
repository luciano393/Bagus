let text = document.getElementById("text");
let text1 = "TRES CUOTAS SIN INTERES TODOS LOS DIAS"
let text2 = "COMPRA MINIMA $40.000"

text.textContent = text1

function change(text, text1, text2) {
    if(text.textContent === text2) {
        text.textContent = text1
    } else {
        text.textContent = text2
    } _
} 

setInterval(() => {
    change(text, text1, text2)
},5000)



 