nav = document.getElementById('navbar')
btn = document.getElementById('btn')
up = document.getElementsByClassName('crossup')
function dropdown(){
    nav.style.height='0'
    nav.style.transition='2s'
    setInterval(() => {
        btn.style.display='none'
    }, 500);
    up.style.display='flex'
}