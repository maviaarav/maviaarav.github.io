score = 0;
cross = true;
obstacleDur = 2.5;
var scoreCont;
var obstacle;
window.onload = () => {
  scoreCont = document.getElementById("scorecont");
  obstacle = document.querySelector(".obstacle");
  obstacle.style.animationDuration = obstacleDur + "s";
};

// Click Dion jump
document.onclick = function(){
   dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 500);
}
// Key Listener 
document.onkeydown = function (e) {
  console.log("key code is:", e.keyCode);
  if (e.keyCode === 38 || e.keyCode === 32) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 500);
  }
  if (e.keyCode === 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode === 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};


// 
setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");  

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );
  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  //  console.log(offsetX, offsetY)
  if (offsetX < 73 && offsetY < 113) {
    gameOver .style.visibility = "visible";
    obstacle.classList.remove("obstacleAni");


  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    if(obstacleDur > 2.5){
        setTimeout(() => {
            obstacleDur = obstacleDur - 0.1;
            obstacle.style.animationDuration = obstacleDur + "s";
            console.log('New animation duration: ', obstacleDur)
          }, 500);
    }
  }
}, 10);

function updateScore(score) {
  scoreCont.innerHTML = "Your Score: " + score;
}
