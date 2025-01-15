const nav = document.getElementById('navbar');
const person = document.getElementById('button')
const button = document.getElementById('btn-down');

// Add an event listener directly to the button
button.addEventListener('click', () => {
    nav.classList.toggle('hidden');

    const navHeight = nav.offsetHeight;
    if (navHeight== 0){
        const imageElement = document.getElementById('myimage')
        imageElement.src = 'cross.png'
    }
    else{
        person.style.transition='1s'
        const imageElement = document.getElementById('myimage')
        imageElement.src = 'menu.png'
    }

});

