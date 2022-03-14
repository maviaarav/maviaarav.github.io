var stars = document.getElementsByClassName ('fas')
var header = document.getElementsByClassName ('header')[0]
var icons = document.getElementById ('icons')

stars[0].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "";
  stars[2].style.color = "";
  stars[3].style.color = "";
  stars[4].style.color = "";  
  header.style.display = 'block';
  header.textContent = "it is very poor"
}
stars[1].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "";
  stars[3].style.color = "";
  stars[4].style.color = "";
  header.textContent = "It is bad"
}
stars[2].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "";
  stars[4].style.color = "";
  header.textContent = "It is good"
}
stars[3].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "";
  header.textContent = "It is very good"
}
stars[4].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#ffd93b";
  header.textContent = "it's unbeliveble"
}
icons.onclick = function(){
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains('dark-theme')){
    icons.src = "img/sun.png"
  }else{
    icons.src = "img/moon.png"
  }
}