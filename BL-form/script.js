console.log("hello world");
container = document.querySelector(".container");
date = document.querySelector("#date");
date2 = document.querySelector("#date2");
btn = document.querySelector("#btn");
images = document.querySelector(".images");
Next = document.querySelector("#Next");
nameInput = document.querySelector("#nameInput");
addressInput = document.querySelector("#addressInput");
valtInput = document.querySelector("#valtInput");
phaseInput = document.querySelector("#phaseInput");
currentInput = document.querySelector("#currentInput");
issueInput = document.querySelector("#issueInput");
Name = document.querySelector("#name");
Address = document.querySelector("#Address");
Valt = document.querySelector("#Valt");
Phase = document.querySelector("#Phase");
Current = document.querySelector("#Current");
Issue = document.querySelector("#Issue");
let add = document.getElementById("add");
let del_btn = document.querySelector("#delete");
let table = document.querySelector("table");
let back_btn = document.querySelector("#back-btn");
let drop_view = document.querySelector("#drop-view");
let signatureInput = document.querySelector("#signatureInput");
let signature = document.querySelector(".signature");
let signatureImage = document.querySelector("#signatureImage");
let paragraph = document.querySelector("#paragraph");

    add.addEventListener('click',function(){
        console.log("add row");
        let newrow = document.createElement("tr");
        number = prompt("Enter the number of cells in this row:");
        for (let i = 0; i < number; i++) {// Change 4 to the number of cells you want in each row
            let cell = document.createElement("td");
            cell.textContent = prompt('Enter row name ' + (i + 1) + ' :');
            newrow.appendChild(cell);
        }
        table.appendChild(newrow);
    })
    del_btn.addEventListener('click', function() {
        console.log('delete row');
        let rowIndex = prompt("Enter the row number to delete (starting from 1):");
        rowIndex = parseInt(rowIndex) - 1; // Convert to zero-based index
        if (rowIndex >= 0 && rowIndex < table.rows.length) {
            table.deleteRow(rowIndex);
            alert("Row deleted successfully.");
        } else {
            alert("Invalid row number.");
        }

    })
Next.addEventListener("click", function() {
    Name.innerHTML = nameInput.value;
    Address.innerHTML = addressInput.value;
    Valt.innerHTML = valtInput.value;
    Phase.innerHTML = phaseInput.value;
    Current.innerHTML = currentInput.value;
    Issue.innerHTML = issueInput.value;
    inputs = [nameInput, addressInput, valtInput, phaseInput, currentInput, issueInput];

    inputs.forEach(input => {
       if (input.value === "") {
           input.style.border = "5px solid red";
           confirm("Please fill all the fields"); // make it one time only
              input.focus();
              input.style.border = "5px solid red";
               container.style.display = "flex";
                images.style.display = "none";
                btn.style.display = "none";
       } 
       else {
           input.style.border = "5px solid green";
               container.style.display = "none";
                images.style.display = "inline-flex";
                btn.style.display = "flex";

       }
    });

})
back_btn.addEventListener("click", function() {
    console.log("back button clicked");
    container.style.display = "flex";
    images.style.display = "none";
    btn.style.display = "none";
    
})
let currentDate = new Date();
date.innerHTML = currentDate.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
});
date2.innerHTML = currentDate.toLocaleDateString('en-IN', {
   year: 'numeric',
    month: 'long',
    day: '2-digit',
});

signatureInput.addEventListener("change", uploadimages );

function uploadimages() {
    let files = signatureInput.files[0];
    let imgurl = URL.createObjectURL(files);
    signatureImage.src = imgurl;
    paragraph.style.display = "none";
}