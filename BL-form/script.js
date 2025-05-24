let name = document.getElementById("name-input");
let address = document.getElementById("address");
let Voltage = document.getElementById("Voltage");
let Phase = document.getElementById("Phase");
let Current = document.getElementById("Current");
let Wiring = document.getElementById("Wiring");
let Purpose = document.getElementById("Purpose");
let submit = document.getElementById("submit");
let next = document.getElementById("next");

let form = document.querySelector('.form');
let content = document.querySelector('.content');
let pribtn = document.querySelector('#print');
let prebtn = document.querySelector('#preview');

let name2 = document.getElementById("name");
let address2 = document.getElementById("Address");
let voltage2 = document.getElementById("voltage");
let phase2 = document.getElementById("phase");
let current2 = document.getElementById("current");
let wiring2 = document.getElementById("wiring");
let purpose2 = document.getElementById("purpose");

function handlePrint() {
    document.querySelector('.form').style.display = 'none';
    pribtn.style.display = 'none';
    prebtn.style.display = 'none';
    setTimeout(() => {
        window.print();
        pribtn.style.display = 'block';
        prebtn.style.display = 'block';
    }, 100);
}

function result() {
    name2.innerHTML = name.value;
    address2.innerHTML = address.value;
    voltage2.innerHTML = Voltage.value;
    phase2.innerHTML = Phase.value;
    current2.innerHTML = Current.value;
    wiring2.innerHTML = Wiring.value;
    purpose2.innerHTML = Purpose.value;

    document.getElementById("name-data").innerText = name.value;
    document.getElementById("address-data").innerText = address.value;
    document.getElementById("voltage-data").innerText = Voltage.value;
    document.getElementById("phase-data").innerText = Phase.value;
    document.getElementById("current-data").innerText = Current.value;
    document.getElementById("wiring-data").innerText = Wiring.value;
    document.getElementById("purpose-data").innerText = Purpose.value;
}

function preview() {
    form.style.display = "block";
    content.style.display = "none";
    pribtn.style.display = "none";
}

function empty() {
    if (name.value === "" || address.value === "" || Voltage.value === "" || Phase.value === "" || Current.value === "" || Wiring.value === "" || Purpose.value === "") {
        alert("Please fill all the fields");
        let inputs = [name, address, Voltage, Phase, Current, Wiring, Purpose];
        inputs.forEach((input) => {
            input.style.border = input.value === "" ? "4px solid red" : "4px solid green";
        });
        return false;
    }
    return true;
}

next.addEventListener("click", () => {
    if (empty()) {
        form.style.display = "none";
        content.style.display = "block";
        pribtn.style.display = "block";
        prebtn.style.display = "block";
        result();
    }
});

submit.addEventListener("click", () => {
    empty();
});
