// BT1
// let a = document.getElementById(`demo-a`);
// let demoinput = document.getElementById(`demo-input`);
// let demoBtn = document.getElementById(`btn-demo`);
// demoBtn.addEventListener(`click`,()=>{
//     demoinput.value = a.href;
// })
// BT2
// let selection = document.getElementById(`selection`);
// let demobtn = document.getElementById(`btn-remove`);
// demobtn.addEventListener(`click`,()=>{
//     let array = [...selection.children]
//     let selectedcolor = array.filter(e => e.textContent === selection.value);
//     selectedcolor[0].remove();
// })
let rowip = document.getElementById(`row-input`);
let columnip = document.getElementById(`column-input`);
let contenip = document.getElementById(`content-input`);
let table = document.getElementById(`table`);
let btn = document.getElementById(`btn-update`);
btn.addEventListener(`click`,()=>{
    // rowip.value = table.length
    // let array = [...table.rows.children]
    console.dir(table.rows);
    

    // while(rowip.value <= table.rows.length ){
    //     let table = document.getElementById(`table`)
    //     let tradd = `<tr>
    //     <td>Row4 cell1</td>
    //     <td>Row4 cell2</td>
    //     </tr>`
    //     table.innerHTML =+ tradd;
    // } 
})