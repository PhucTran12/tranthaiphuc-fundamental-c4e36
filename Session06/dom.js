// Dom manipulations
let h1 = document.getElementById(`hello`);
h1.innerText = "No no no"

// let body = document.getElementById(`halo`);
// let h2 = `<h2>Heading level 2</h2>`;

// body.innerHTML += h2;

let a = document.getElementById(`lala`);
a.remove();
// Dom events
let demoBtn = document.getElementById("demo-button");
demoBtn.addEventListener(`click`,()=>{
    let body = document.getElementById(`halo`);
let h2 = `<h2>Heading level 2</h2>`;

body.innerHTML += h2;
})

