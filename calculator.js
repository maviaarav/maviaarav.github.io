display = document.getElementById('screen')
function appendValue(value){
    display.value += value
}
function clearScreen(){
    display.value = ''
}
function calculate(){
    display.value = eval(display.value)
}