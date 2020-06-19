import {users,deletedUsers} from './store.js';

function deleteUser (email) {
    const findIndexMail=users.findIndex((value)=>value.email===email);
    const delettingUser=users.splice(findIndexMail,1);
    return deletedUsers.push(delettingUser);


}

export{deleteUser};