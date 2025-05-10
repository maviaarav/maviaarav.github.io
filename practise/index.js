let create_btn = document.querySelector('#addElement');
let no = 1;

let create = () => {
    create_btn.addEventListener('click', () => {
        let table_body = document.querySelector('.table-body');

        // Create a new table row
        let table_row = document.createElement('tr');

        // Create two columns
        let table_data1 = document.createElement('td');
        table_data1.style.width = '10%';
        table_data1.textContent = no++;


        // Append data cells to the row
        table_row.appendChild(table_data1);

        // Append row to the table body
        table_body.appendChild(table_row);
    });
};

create();
