hrs = document.getElementById('hrs');
mins = document.getElementById('mins');
sec = document.getElementById('sec')

let time = new Date();
hrs.innerHTML = (time.getHours() %12 <12 ? '0' + time.getHours() %12 : time.getHours());
mins.innerHTML = (time.getMinutes() < 10 ? '0' + time.getMinutes():time.getMinutes());
setInterval(() => {
    let time = new Date();
    sec.innerHTML = (time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds());
},1000);
