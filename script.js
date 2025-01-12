const nav = document.getElementById('navbar');
const person = document.getElementById('button')
const button = document.getElementById('btn-down');

// Add an event listener directly to the button
button.addEventListener('click', () => {
    nav.classList.toggle('hidden'); 
    // button.style.display='none';
    const navHeight = nav.offsetHeight;
    if (navHeight== 0){
        person.style.backgroundColor='Blue'
        const imageElement = document.getElementById('myimage')
        imageElement.src = 'cross.png'
    }
    else{
        person.style.background= 'none'
        person.style.boxShadow='none'
        person.style.transition='1s'
        const imageElement = document.getElementById('myimage')
        imageElement.src = 'menu.png'
    }

});
