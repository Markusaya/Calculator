let buttons = document.querySelectorAll('.button input');
let ecran = document.getElementById('display');

buttons.forEach(addClick)

function addClick(item){
    item.addEventListener("click", function(){
        let buttonValue = item.value;
        ecran.value += buttonValue;
    })
    document.getElementById("result").addEventListener("click", function() {
        const display = document.getElementById("display");
        display.value = eval(display.value);
        /* comment je peux enlever le sigle "=" à l'affichage */

        })

    document.getElementById("supp").addEventListener("click", function() {
            const display = document.getElementById("display").value = "";
            });   
        /* comment je peux faire un light screen dés que des chiffres 
        se mettent dans le display */ 
            
}