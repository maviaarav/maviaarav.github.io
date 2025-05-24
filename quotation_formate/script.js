let footer = document.querySelector('.footer');
let registration = document.querySelector('.registration');
let client_name = document.querySelector('#Client_name');
let Client_address_1 = document.querySelector('#Client_address_1');
let Client_address_2 = document.querySelector('#Client_address_2');
let Client_address_3 = document.querySelector('#Client_address_3');
let preview_btn = document.querySelector('#preview');
let nameinput = document.querySelector('#name_input');
let address_input_1 = document.querySelector('#address_input1');
let address_input_2 = document.querySelector('#address_input2');
let address_input_3 = document.querySelector('#address_input3');
let print_btn = document.querySelector('#Print_btn');
let date = document.querySelector('#date');
let submit = document.querySelector('#submit');
let noc = document.querySelector('#noc_input');
let issue = document.querySelector('#NOC-Issued');
let cell_form = document.querySelector('.cell-form');
let next_submit = document.querySelector('#next_submit');
let pr_btn = document.querySelector('#pr-btn');
let content = document.querySelector('.table-contents');
let table_next = document.querySelector('#table-btn');
let heading1 = document.querySelector('#heading_1');
let heading2 = document.querySelector('#heading_2');
let heading3 = document.querySelector('#heading_3');
let heading4 = document.querySelector('#heading_input');
let Sr_no = document.querySelector('#Sr_no');
let add_Element = document.querySelector('#addElement');
let no = 1;

let turn1 = true
let table_back = document.querySelector('#table-back');
let Add_Element = ()=>{
   add_Element.addEventListener('click', function () {
    let tbody = document.querySelector('.table-body');
    let table_row = document.createElement('tr');
    let table_data1 = document.createElement('td');
    let table_data2 = document.createElement('td');
    let table_data3 = document.createElement('td');
    let table_data4 = document.createElement('td');
    let table_data5 = document.createElement('td');
    let btn = document.getElementById('btn');
    btn.textContent = 'delete';
    btn.setAttribute('class', 'btn btn-danger');
    btn.setAttribute('style', 'margin-left: 20px;');
    btn.addEventListener('click', function () {
        table_row.remove();
        no--;
        let rows = document.querySelectorAll('.table-body tr');
        rows.forEach((row, index) => {
            row.cells[0].innerText = index + 1;
                if(table_row.childElementCount > 1){
        btn.setAttribute('style', 'display: none;');
    }
        });
    });


    table_data1.innerText = no++;
    table_data1.setAttribute('style', 'border: 2px solid black; text-align: center; font-size: 20px; font-weight: bolder;');
    table_data2.innerHTML = heading4.value;
    table_row.appendChild(table_data1);
    table_row.appendChild(table_data2);
    table_row.appendChild(table_data3);
    table_row.appendChild(table_data4);
    table_row.appendChild(table_data5);
    tbody.appendChild(table_row);
   })
}
Add_Element();

let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
});

let form = () => {
    footer.style.display = 'none';
    registration.style.display = 'none';
    cell_form.style.display = 'block';
};


preview_btn.addEventListener('click', () => {
    form();
});
pr_btn.addEventListener('click', () => {
    footer.style.display = 'none';
    cell_form.style.display = 'none';
    registration.style.display = 'block';
})
date.innerText = formattedDate;
date.setAttribute('style', 'font-weight: bolder; font-size: 20px;');

function handlePrint() {
    setTimeout(function() {
        window.print();
    }, 500);
}

table_next.addEventListener('click', () =>{
    footer.style.display = 'block';
    cell_form.style.display = 'none';
    content.style.display = 'none';
})
table_back.addEventListener('click', () =>{
    footer.style.display = 'none';
    cell_form.style.display = 'block';
    content.style.display = 'none';
    table_next.style.display = 'block';
})
submit.addEventListener('click', function () {
    let address1 = address_input_1.value;
    let address2 = address_input_2.value;
    let address3 = address_input_3.value;
    let noc_value = noc.value;

    if (noc_value.trim() == '') {
        alert('Please enter Quotation subject');
        noc.focus();
        noc.style.border = '4px solid red';
        return;
    }

    issue.innerText = noc_value.trim();
    client_name.innerText = nameinput.value;
    client_name.setAttribute('style', 'font-weight: bolder;font-size: 22px;');
    Client_address_1.innerText = address1;
    Client_address_2.innerText = address2;
    Client_address_3.innerText = address3;

    registration.style.display = 'none';
    cell_form.style.display = 'block';
});


next_submit.addEventListener('click', function () {
    let heading = document.querySelector('#heading_input').value;
    let capacity = document.querySelector('#capacity_input').value;
    let expenses = document.querySelector('#expenses_input').value;

    if (heading.trim() == '' || capacity.trim() == '' || expenses.trim() == '') {
        alert('Please fill all proposal details.');
        return;
    }


    footer.style.display = 'none';
    cell_form.style.display = 'none';
    content.style.display = 'block';

});
