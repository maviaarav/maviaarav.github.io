btn = document.getElementById('btn');
nav = document.getElementById('nav');
cross = document.getElementById('cross')
function navbar(){
    nav.style.height='15vh'
    nav.style.transition='2s'
    btn.style.display='none'
    cross.style.display='block'
}
function up(){
    nav.style.height='0'
    nav.style.transition='2s'
    cross.style.display='none'
    btn.style.display='block'
}