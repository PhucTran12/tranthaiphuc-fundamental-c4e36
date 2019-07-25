// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// },2000);

// console.log(3);
const context = {
    users: null  // tạo trường để đựng data
}

window.onload = async ()=>{    // get request and response
    await getUsers();
    renderUsers()
    displayinfo();
}

const getUsers = async () =>{
    const res = await fetch('https://reqres.in/api/users');
    const users = await res.json();
    context.users = users.data
}

const renderUsers = () =>{
    // const img = context.users.img;
    // let div = document.getElementById('body');
    // let img1 = `<img ${img} /img>`;
    // div.innerHTML += img1;
    // console.dir(context.users);
    // let img = '<img src=/>';
    // body.innerHTML += img;
    let content = [...context.users];
    for ( let i = 0; i < content.length; i ++) {
       let e = content[i];
       let image = e.avatar;
       let name = e.first_name + e.last_name;
       let Email = e.email;
       let body = document.getElementById(`body`);
       let info = `
                 <div id="user-${i}">
                 
                 <img src= ${image} />
                 <p>Name: ${name}</p>
                 <p>Email: ${Email}</p>
                 </div>`;
       body.innerHTML += info;
    }
}

// Chữa bài 1
// const renderUsers = () =>{
//     let userDiv =document.getElementById(`body`);
//     content.users.forEach((user, index) => {
//         let userElement =
//         `
//         <div id="user-${index}>
//            <img src=${user.avatar}>
//            <br>
//            <b>Full name: </b>${users.last_name}${users.first_name}
//            <br>
//            <b>Email: </b>${user.email}
//            </div>
//            <br>
//         `
//         div.innerHTML += userElement;
//     })
     
// }
const displayinfo =() => {
    let content = [...context.users];
    for ( let i = 0; i < content.length; i ++) {
        let div = document.getElementById(`user-${i}`);
        let userDetail = document.getElementById(`user-detail`);
        div.addEventListener(`click`,()=>{
            console.log(event);
            userDetail.innerHTML = '';
            userDetail.innerHTML += users.innerHTML;
        })
    }
}
    
