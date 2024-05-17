

let btn = document.querySelector('.btn');
let colorChange = document.querySelector('#colorChange');

btn.addEventListener('click',function(){
  let red = Math.round(Math.random() * 255); 
  let green = Math.round(Math.random() * 255); 
  let blue = Math.round(Math.random() * 255); 
  colorChange.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})
