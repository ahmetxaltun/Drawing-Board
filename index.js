var c = document.getElementById('canvas');
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;
c.style.backgroundColor= 'white';
var ctx = c.getContext('2d');
var ciz = false;

ctx.clearRect(0,0,c.width,c.height);
ctx.fillRect(0,0,0,0);
ctx.strokeStyle = 'black';
ctx.lineWidth = 4;

c.addEventListener('mousedown', (e)=> {
  ctx.beginPath(e.pageX, e.pageY);
  ciz = true;
});

c.addEventListener('mouseup', (e)=>{
  ciz = false;
});

c.addEventListener('mousemove', (e)=>{
  if(ciz){
    ctx.lineTo(e.pageX, e.pageY);
    ctx.moveTo(e.pageX, e.pageY);
    ctx.stroke();
  }
});

window.onmousemove = function(e){
  var x = document.getElementById('x').innerHTML = 'X: ' + e.clientX;
  var y = document.getElementById('y').innerHTML = 'Y: ' + e.clientY;
};

function color(selTag) {
  var c = selTag.options[selTag.selectedIndex].text;
  if(c[0] == 'B'){
  	ctx.strokeStyle = 'black';
  } if(c[0] == 'G'){
  	ctx.strokeStyle = 'green';
  } if(c[2] == 'u'){
  	ctx.strokeStyle = 'blue';
  } if(c[0] == 'R'){
  	ctx.strokeStyle = 'red';
  }
};

function thick(selTag) {
  var t = selTag.options[selTag.selectedIndex].text;
  if(t[0] == '1'){
  	ctx.lineWidth = 1;
  } if(t[0] == '2'){
  	ctx.lineWidth = 2;
  } if(t[0] == '3'){
  	ctx.lineWidth = 3;
  } if(t[0] == '4'){
  	ctx.lineWidth = 4;
  } if(t[0] == '5'){
  	ctx.lineWidth = 5;
  } if(t[0] == '6'){
  	ctx.lineWidth = 6;
  } if(t[0] == '7'){
  	ctx.lineWidth = 7;
  } if(t[0] == '8'){
  	ctx.lineWidth = 8;
  } if(t[0] == '9'){
  	ctx.lineWidth = 9;
  } if(t[1] == '0'){
  	ctx.lineWidth = 10;
  }
};

function refresh(){
  ctx.clearRect(0,0,c.width,c.height);
};
