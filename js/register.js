import {users} from './store.js';


function register(name, surname, email, password, password2, age){
    
    users.push({name:name,surname:surname,email:email,password:password,password2:password2,age:age});
   
    
}
export{register};