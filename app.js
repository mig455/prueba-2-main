'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
        console.log(to_do)
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]


console.log(to_do)
var i=0;
var lista=document.getElementById("lista");
console.log(lista)
while(i<to_do.length){
    let nombreInput="element"+i
    let nombreText="text"+i
    var elemnet='<li><input type="checkbox" id="'+nombreInput+'" onclick="ChangeInput('+i+')"> <div id="'+nombreText+'">'+to_do[i]+'</div></li>';
    console.log(elemnet)
    lista.innerHTML+=elemnet
    i++
}
function ChangeInput(i){
    var chech=document.getElementById("element"+i);
    console.log(chech.checked)
    if(chech.checked==true){
        document.getElementById("text"+i).addClass('chacked')
    }
}