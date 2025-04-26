let footer = document.querySelector('.footer');
let registration = document.querySelector('.registration');
let client_name = document.querySelector('#Client_name');
let Client_address_1 = document.querySelector('#Client_address_1');
let Client_address_2 = document.querySelector('#Client_address_2');
let Client_address_3 = document.querySelector('#Client_address_3');
let nameinput = document.querySelector('#name_input');
let address_input_1 = document.querySelector('#address_input1');
let address_input_2 = document.querySelector('#address_input2');
let address_input_3 = document.querySelector('#address_input3');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function () {
    let address1 = address_input_1.value;
    let address2 = address_input_2.value;
    let address3 = address_input_3.value;

    client_name.innerText = nameinput.value;
    Client_address_1.innerText = address1;
    Client_address_2.innerText = address2;
    Client_address_3.innerText = address3;

    footer.style.display = 'block';
    registration.style.display = 'none';
});
