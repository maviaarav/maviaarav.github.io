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
let table = document.querySelector("table");
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
Next.addEventListener("click", function() {
    Name.innerHTML = nameInput.value;
    Address.innerHTML = addressInput.value;
    Valt.innerHTML = valtInput.value;
    Phase.innerHTML = phaseInput.value;
    Current.innerHTML = currentInput.value;
    Issue.innerHTML = issueInput.value;
    inputs = document.querySelectorAll("input");
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