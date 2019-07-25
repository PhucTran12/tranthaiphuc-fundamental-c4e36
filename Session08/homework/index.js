window.onload = async () => {
    content();
    await getUsers();
    displayUsers();
}

const content = ()=>{
    users = null;
}

const getUsers = async () =>{
    const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const Users = await res.json();
    content.users = Users;
}
const displayUsers = () => {
    console.dir(content.users)
    const array = [...content.users];
    for( let i = 0; i < array.length; i ++ ) {
        let e = array[i];
        let div = document.getElementById(`body`);
        let info = `<div>
        <ul>
        <li id="user-${i}">Id: ${e.id}; Name: ${e.employee_name}</li> 
        </ul></div>`;
        div.innerHTML += info
    }
}
const displaySalary = ()=>{
    for( let i = 0; i < array.length; i ++ ) {
        let e = array[i];
        let info = document.getElementById(`user-${i}`);
        let div2 = document.getElementById(`salary`);
        info.onmouseover = () => {
            // console.log(i)
            let viewsalary = `<p>Salary of ${content.users[i].employee_name} is ${content.users[i].employee_salary}</p>`;
            div2.innerHTML = '';
            div2.innerHTML += viewsalary;
        }
    }
}