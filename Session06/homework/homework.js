BT1
let a = document.getElementById(`demo-a`);
let demoinput = document.getElementById(`demo-input`);
let demoBtn = document.getElementById(`btn-demo`);
demoBtn.addEventListener(`click`,()=>{
    demoinput.value = a.href;
})
BT2
let selection = document.getElementById(`selection`);
let demobtn = document.getElementById(`btn-remove`);
demobtn.addEventListener(`click`,()=>{
    let array = [...selection.children]
    let selectedcolor = array.filter(e => e.textContent === selection.value);
    selectedcolor[0].remove();
})
// let rowip = document.getElementById(`row-input`);
// let columnip = document.getElementById(`column-input`);
// let contenip = document.getElementById(`content-input`);
// let table = document.getElementById(`table`);
// let btn = document.getElementById(`btn-update`);
// btn.addEventListener(`click`,()=>{
//     // rowip.value = table.length
//     console.dir(table)
// })