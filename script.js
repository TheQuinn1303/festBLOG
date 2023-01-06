const list = [
    "hi float",
    "festday",
    "festblog",
    "balão",
    "balao",
    "bexiga",
    "bubble",
    "bobo",
    "boble",
    "decoração",
    "decoracao",
    "Flow High"
];


const output = document.querySelector(".showSearch");
const input = document.querySelector("#PesquisaFest");

window.addEventListener("DOMContentLoaded", loadlist);
input.addEventListener('input' , filter);


function loadlist(){
    let temp =`<ul class="list-items">`;
    list.forEach(item => {
        temp += `<li class= "list-item"> ${item} </li>`;
    });
    temp += `</ul>`;
    output.innerHTML = temp
    
}

function filter(e) {
    let temp = '';
    const result = list.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()));
    
    if (result.length>0){
        temp =`<ul class="list-items">`;
        result.forEach(item => {
            temp += `<li class= "list-item"> ${item} </li>`;
        });
        temp += `</ul>`;
    }else{
        temp = `<div class="sem-item>" Nada Encontrado </div>`;
    }
    output.innerHTML = temp;
}
    




