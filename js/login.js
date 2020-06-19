import {users} from './store.js';

function emailLogin(email){
    const result=users.find((value)=>value.email===email);
    return result;
}
function passwordLogin(password){
    const result=users.find((value)=>value.password===password);
    return result;
}

export{emailLogin,passwordLogin};