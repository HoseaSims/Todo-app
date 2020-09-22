const form = document.querySelector("form");
const ul = document.querySelector("ul");
form.addEventListener("submit", e =>{
    e.preventDefault();
    const storeText = form.text.value;
    ul.innerHTML += `<li>${storeText}<button class="btn btn-danger btn-sm remove">x</button></li>`
    if(storeText.length){
        form.reset();
    }
})

// delete todos
ul.addEventListener("click", e =>{
    if(e.target.classList.contains("remove")){
        e.target.parentElement.remove();
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
