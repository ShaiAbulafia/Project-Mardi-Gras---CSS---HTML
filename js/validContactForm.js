const username = document.getElementById('name');
const userlastName = document.getElementById('lastName');
const useremail = document.getElementById('email');
const useraddDetails = document.getElementById('addDetail');
const forme = document.getElementById('forme');
const errorElement = document.getElementById('error');


forme.addEventListener('submit',(e) => {
    let formCheck = 0;
    errorElement.innerHTML = "";

    if (username.value === ""|| username.value == null){
        formCheck = 1;
        errorElement.innerHTML =  "Insert your Name";
        username.style.border = '5px solid red';
        userlastName.style.border = '2px solid #9453A6';
        useremail.style.border = '2px solid #9453A6';
        useraddDetails.style.border = '2px solid #9453A6';
    }
    else if (userlastName.value === ''|| userlastName.value == null){
        formCheck = 1;
        errorElement.innerHTML = "Insert your Last Name"
        userlastName.style.border = '5px solid red';
        username.style.border = '2px solid #9453A6';
        useremail.style.border = '2px solid #9453A6';
        useraddDetails.style.border = '2px solid #9453A6';
    }
    else if (useremail.value === ''|| useremail.value == null){
        formCheck = 1;
        errorElement.innerHTML = "Insert your Email"
        useremail.style.border = '5px solid red';
        userlastName.style.border = '2px solid #9453A6';
        username.style.border = '2px solid #9453A6';
        useraddDetails.style.border = '2px solid #9453A6';
    }
    else if (useremail.value.includes('@') == false || useremail.value.includes('.') == false){
        formCheck = 1;
        errorElement.innerHTML = "Insert Valid Email"
        useremail.style.border = '5px solid red';
        userlastName.style.border = '2px solid #9453A6';
        username.style.border = '2px solid #9453A6';
        useraddDetails.style.border = '2px solid #9453A6';
    }
    else if (useraddDetails.value === ''|| useraddDetails.value == null){
        formCheck = 1;
        errorElement.innerHTML =  "Insert Details"
        useraddDetails.style.border = '5px solid red';
        userlastName.style.border = '2px solid #9453A6';
        useremail.style.border = '2px solid #9453A6';
        username.style.border = '2px solid #9453A6';
    }

    if (formCheck == 1){
        e.preventDefault();
    }
})