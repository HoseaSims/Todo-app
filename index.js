const form = document.querySelector("form");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const styleButton = document.querySelector(".changeStyle")




form.addEventListener("submit", e =>{
    e.preventDefault();
    const storeText = form.text.value.trim();
    
    if(storeText.length){
        ul.innerHTML += `<div class="list-div"><li>${storeText}<button class="btn btn-danger btn-sm remove">x</button> <button class="btn btn-warning btn-sm strike">-</button></li></div>`
        form.reset();
    }
})

// delete todos
ul.addEventListener("click", e =>{
    if(e.target.classList.contains("remove")){
        e.target.parentElement.remove();
    }
    if(e.target.classList.contains("strike")){

        e.target.parentElement.classList.toggle("strikeOut")
    }
})
























// const form = document.querySelector("form")
// const ul = document.querySelector("ul");
// const button = document.querySelector(".remove")

// form.addEventListener("submit", e =>{
//     e.preventDefault();
//     const storeText = form.text.value;
//     ul.innerHTML += `<li>${storeText}  <button class="remove">Remove</button></li>`
//     if(storeText.length){
//         form.reset();
//     }
// })

// // delete todos
// ul.addEventListener("click", e =>{
//     if(e.target.classList.contains("remove")){
//         e.target.parentElement.remove();
//     }
// })
