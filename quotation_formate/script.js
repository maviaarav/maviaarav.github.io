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
let print_btn = document.querySelector('#Print_btn');
let date = document.querySelector('#date');
let submit = document.querySelector('#submit');
let noc = document.querySelector('#noc_input');
let issue = document.querySelector('#NOC-Issued');
let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
});
console.log(formattedDate);

date.innerText = formattedDate;
date.setAttribute('style', 'font-weight: bolder; font-size: 20px;')
function handlePrint() {
    setTimeout(function() {
      window.print();
    }, 2000); // slight delay ensures it works better on iOS
  }

submit.addEventListener('click', function () {
    let address1 = address_input_1.value;
    let address2 = address_input_2.value;
    let address3 = address_input_3.value;
    let noc_value = noc.value;
    issue.innerText = noc_value.trim();
    if (noc_value == '') {
        alert('Please enter Quoation subject');
        noc.focus();
        noc.style.border = '4px solid red';
        return
    }
    client_name.innerText = nameinput.value;
    client_name.setAttribute('style', 'font-weight: bolder;font-size: 22px;')
    Client_address_1.innerText = address1;
    Client_address_2.innerText = address2;
    Client_address_3.innerText = address3;

    footer.style.display = 'block';
    registration.style.display = 'none';
});
