const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'Username is required');
    } else {
        setSuccess(firstname);
    }


    if(lastnameValue === '') {
        setError(lastname, 'Username is required');
    } else {
        setSuccess(lastname);
    }

}


function checkOut(){
    console.log(localStorage.getItem('firstname'))
    console.log(localStorage.getItem('lastname'))
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('date'))
    console.log(localStorage.getItem('state'))

  }
  function onSubmit(event){

    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value


    console.log(firstname)
    console.log(lastname)
    console.log(email)
    let dannye = event.target;
    let formdata = new FormData(dannye)
    let form_data_obj = Object.fromEntries(formdata)
    console.log(form_data_obj);

    

    localStorage.setItem('firstname', form_data_obj.firstname)
    localStorage.setItem('lastname', form_data_obj.lastname)
    localStorage.setItem('email', form_data_obj.email)


    event.preventDefault();
  }