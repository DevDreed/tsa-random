window.addEventListener("click", function(){
  let direction = randomNum();
  console.log(direction);
  if(direction === 1){
    document.getElementById('arrow').classList.add("right-image");
    document.getElementById('arrow').classList.remove("left-image");
  }else{
    document.getElementById('arrow').classList.add("left-image");
    document.getElementById('arrow').classList.remove("right-image");
  }
});

function randomNum(){
  return Math.floor(Math.random()*2);
}
