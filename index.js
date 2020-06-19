import {users,deletedUsers} from './js/store.js';
import {emailLogin,passwordLogin} from './js/login.js';
import {register}from './js/register.js';
import {deleteUser} from './js/delete.js';

const findLoginToggle=document.querySelector('#loginToggle');
const findRegisterToggle=document.querySelector('#registerToggle');
const findDeleteToggle=document.querySelector('#deleteToggle');
const findTableToggle=document.querySelector('#tableToggle');

function onlyLoginActive(){
    const findLoginActive=document.querySelector('#loginActive');
    
    findLoginActive.addEventListener('click',event=>{
        findLoginToggle.classList.remove('d-none');
        findRegisterToggle.classList.add('d-none');
        findDeleteToggle.classList.add('d-none');
        findTableToggle.classList.add('d-none');
       
    });
}
onlyLoginActive();
function onlyRegisterActive(){
    const findRegisterActive=document.querySelector('#registerActive');
    findRegisterActive.addEventListener('click',event=>{
        findLoginToggle.classList.add('d-none');
        findRegisterToggle.classList.remove('d-none');
        findDeleteToggle.classList.add('d-none');
        findTableToggle.classList.add('d-none');
});
}
onlyRegisterActive();
function onlyDeleteActive(){
    const findDeleteActive=document.querySelector('#deleteActive');
    findDeleteActive.addEventListener('click',event=>{
        findLoginToggle.classList.add('d-none');
        findRegisterToggle.classList.add('d-none');
        findDeleteToggle.classList.remove('d-none');
        findTableToggle.classList.add('d-none');
    
    });
}
onlyDeleteActive();
function checkLogin(){
    const findForm=document.querySelector('#login-form');
  
    findForm.addEventListener('submit',event=>{ 
        event.preventDefault();
        const findemail=document.querySelector('#email-login');
        const findPassword=document.querySelector('#password-login');
        const resultPassword=passwordLogin(findPassword.value);
        const resultmail=emailLogin(findemail.value);
        if (resultmail===undefined){
           return alert('email no encontrado');
        }

        if (resultPassword===undefined){
           return  findPassword.insertAdjacentHTML('afterend','<p>ERROR CONTRASEÑA</p>');
        }

        return findForm.insertAdjacentHTML('afterend','<p>Usuario encontrado!</p>');
    });
}
checkLogin();
function newRegister(){
    const form=document.querySelector('#register-form');
    const nameForm=document.querySelector('#name-form');
    const surnameForm=document.querySelector('#surname-form');
    const emailForm=document.querySelector('#emailRegister-form');
    const passwordForm=document.querySelector('#passwordRegister-form');
    const passwordForm2=document.querySelector('#passwordRegister-form2');
    const errors=document.querySelector('#errors');
    const ageForm=document.querySelector('#age-form');
    form.addEventListener('submit',event=>{
        event.preventDefault();
        errors.innerHTML='';

        const resultFind=users.find((value)=>value.email===emailForm.value);  
        if (resultFind){
            errors.insertAdjacentHTML('beforeend','<div class="alert alert-warning" role="alert">Usuario ya registrado</div>');
        }
        if (nameForm.value===''){
           errors.insertAdjacentHTML('beforeend','<div class="alert alert-danger" role="alert">Debes introducir un apellido</div>');
        }
        if (surnameForm.value===''){
            errors.insertAdjacentHTML('beforeend','<div class="alert alert-danger" role="alert">Debes introducir un apellido</div>');
        }
        if (emailForm.value===''){
            errors.insertAdjacentHtml('beforeend','<div class="alert alert-danger" role="alert">Debes introducir un email</div>');
        }

        if (ageForm.value===''){
            errors.insertAdjacentHTML('beforeend','<div class="alert alert-danger" role="alert">Debes introducir una edad</div>');
        }
        if (ageForm.value<18){
            errors.insertAdjacentHTML('beforeend','<div class="alert alert-danger" role="alert">No puedes registrarte </div>');
        }
        if (passwordForm.value===''){
           errors.insertAdjacentHTML('beforeend','<div class="alert alert-danger" role="alert">Contraseña vacía </div>');

        }
        if (passwordForm2.value===''){
           errors.insertAdjacentHTML( 'beforeend','<div class="alert alert-danger" role="alert">Contraseña vacía </div>');

        }
        if (passwordForm.value!==passwordForm2.value){
            errors.insertAdjacentHTML('beforeend','<div class="alert alert-danger" role="alert">Las contraseñas no coinciden </div>');

        }
        
     register(nameForm.value, surnameForm.value, emailForm.value, passwordForm.value, passwordForm2.value, ageForm.value);  
    });
  
}
newRegister();

function delettingUser(){
    const form=document.querySelector('#delete-form');
    const mailForm=document.querySelector('#emailDelete-form');
   
    const errors=document.querySelector('#errors');
    form.addEventListener('submit',event=>{
        event.preventDefault();

        errors.innerHTML=``;
        const mailCheck=users.find((value)=>value.email===mailForm.value);
        if (mailCheck===undefined){
            errors.insertAdjacentHTML('beforeend','<div class="alert alert-danger" role="alert">El mail no existe</div>');
           
        }
        deleteUser(mailForm.value);
    
        
    });

}
delettingUser();
users.forEach(checkList);
function checkList(item,index){
    const getTable=document.querySelector('#tableBody');
    const getButton=document.querySelector('#refresh');
    getTable.insertAdjacentHTML('beforeend',`<tr><td>${index}</td><td>${item.name}</td><td>${item.surname}</td><td>${item.email}</td><td>${item.age}</td></tr>`);

}
