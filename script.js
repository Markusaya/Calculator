let buttons = document.querySelectorAll('.button input');
let ecran = document.getElementById('display');

buttons.forEach(addClick)

function addClick(item){
    item.addEventListener("click", function(){
        let buttonValue = item.value;
        ecran.value += buttonValue;
    })
    document.getElementById("result").addEventListener("click", function() {
        var display = document.getElementById("display");
        display.value = eval(display.value);
        })
    document.getElementById("supp").addEventListener("click", function() {
            var display = document.getElementById("display").value = "";
            });    
}