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





const output = document.querySelector(".dropdown-item");
const search = document.querySelector(".form-control.me-2");

window.addEventListener("DOMContentLoaded", loadlist);
search.addEventListener('input' , filter)

function loadlist(){
    let temp =`<ul class = "list-items>"`;
    list.forEach(item => {
        temp += `<li class= "list-item"> ${item} </li>`;
    });
    temp += `</ul>`;
    output.innerHTML = temp
}

function filter (e){
// console.log(e.target.value.toLowerCase());
    let temp = '';
    const result = list.filter(item=> item.toLowerCase().includes(e.target.value.toLowerCase()));
    
    if (result.length>0) {
        temp =`<ul class = "list-items>"`;
        list.forEach(item => {
            temp += `<li class= "list-item"> ${item} </li>`;
        });
        temp += `</ul>`;
    } else{
        temp = `<div class ="no-item"> No Item Found </div>`;
    }

    output.innerHTML = temp;

}