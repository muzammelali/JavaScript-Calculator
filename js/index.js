function calculator(myValue){
    document.getElementById('calculator-screen').value += myValue
}
function allClear(){
    document.getElementById('calculator-screen').value = ''
}
function answer(){
    let calculate = eval(document.getElementById('calculator-screen').value)
    document.getElementById('calculator-screen').value = calculate
}