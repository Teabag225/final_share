  
//유저 추가하기
let card3 = document.querySelectorAll(".noshow")[0];
let card4 = document.querySelectorAll(".noshow")[1];
let card5 = document.querySelectorAll(".noshow")[2];
let card6 = document.querySelectorAll(".noshow")[3];
let insInput = document.querySelector(".input");



let cnt = 2;
function add(){
  let userLabel1 = document.createElement('label');
  userLabel1.id = 'label3';
  let userLabel2= document.createElement('label');
  userLabel2.id = 'label4';
  let userLabel3 = document.createElement('label');
  userLabel3.id = 'label5';
  let userLabel4 = document.createElement('label');
  userLabel4.id = 'label6';
  let userInput1 = document.createElement('input');
  userInput1.id = 'user3';
  userInput1.setAttribute('type','text');
  let userInput2 = document.createElement('input');
  userInput2.id = 'user4';
  userInput2.setAttribute('type','text');
  let userInput3 = document.createElement('input');
  userInput3.id = 'user5';
  userInput3.setAttribute('type','text');
  let userInput4 = document.createElement('input');
  userInput4.id = 'user6';
  userInput4.setAttribute('type','text');

  if (card3.classList.contains("show") == false) {
    card3.classList.add("show");
    const user3 = document.createTextNode(" User3 ");
    userLabel1.appendChild(user3);
    insInput.append(userLabel1, userInput1);
    //유저 추가
    cnt++; //유저 숫자 카운트
  } else if (card4.classList.contains("show") == false) {
    card4.classList.add("show");
    const user4 = document.createTextNode(" User4 ");
    userLabel2.appendChild(user4);
    insInput.append(userLabel2, userInput2);
    cnt++;
  } else if (card5.classList.contains("show") == false) {
    card5.classList.add("show");
    const user5 = document.createTextNode("User5 ");
    userLabel3.appendChild(user5);
    insInput.append(userLabel3, userInput3);
  
    cnt++;
  } else if (card6.classList.contains("show") == false) {
    card6.classList.add("show");
    const user6 = document.createTextNode(" User6 ");
    userLabel4.appendChild(user6);
    insInput.append(userLabel4, userInput4);

  
    cnt++;
  } else {
    alert("최대 6인입니다.");
  }
}

//유저 제거하기
function remove() {
  const userInput1 = document.querySelector('#user3');
  const userInput2 = document.querySelector('#user4');
  const userInput3 = document.querySelector('#user5');
  const userInput4 = document.querySelector('#user6');
  const userLabel1 = document.querySelector('#label3');
  const userLabel2 = document.querySelector('#label4');
  const userLabel3 = document.querySelector('#label5');
  const userLabel4 = document.querySelector('#label6');

  if (card6.classList.contains("show") == true) {
    card6.classList.remove("show"); // 유저 제거
    userLabel4.parentNode.removeChild(userLabel4);
    userInput4.parentNode.removeChild(userInput4);
    // card6.childNodes.remove();

    cnt--; //유저 숫자 카운트
  } else if (card5.classList.contains("show") == true) {
    card5.classList.remove("show");
    userLabel3.parentNode.removeChild(userLabel3);
    userInput3.parentNode.removeChild(userInput3);
   
    cnt--;
  } else if (card4.classList.contains("show") == true) {
    card4.classList.remove("show");
    userLabel2.parentNode.removeChild(userLabel2);
    userInput2.parentNode.removeChild(userInput2);
    
    cnt--;
  } else if (card3.classList.contains("show") == true) {
    card3.classList.remove("show");
    userLabel1.parentNode.removeChild(userLabel1);
    userInput1.parentNode.removeChild(userInput1);
    
    cnt--;

  } else {
    alert("최소 2인입니다.");
  }
}


//게임시작 (Start button_#submitBtn)
function run(){
  
  const imgCard = document.querySelectorAll('.card');
  const inputBorder = document.querySelectorAll('input');
  const arr = [];
  const txt1 = document.querySelector('.txt1');
  txt1.style.display = "inline-block";
  
  for ( var i = 0; i < inputBorder.length; i++ ) {
    inputBorder[i].style.border = '0px solid';  
    inputBorder[i].style.background = 'none';  
    inputBorder[i].style.fontFamily = 'HBIOS-SYS';  
    inputBorder[i].style.color = '#f8e71c';  
    inputBorder[i].style.fontSize = 'large';  
    inputBorder[i].style.letterSpacing = '3px';  

    arr[i] = inputBorder[i].value; //빈 배열에 값 삽입
    imgCard[i].style.position = "absolute";
    // imgCard[i].style.left = "100px";

  };
  
  const min = Math.ceil(0);
  const max = Math.floor(i);
  const r = Math.floor(Math.random()*(max-min))+min;
  const rTxt =  arr[r].toString();
  console.log(imgCard[r]);
  
  // console.log(txt2);
  const frontImg = imgCard[max-1];
  const txt2 = imgCard[r].querySelector('.txt2 > p');

  frontImg.addEventListener('click', function(){
    
    imgCard[r].classList.add('slideUp');
    
    
    
    txt1.style.display = "none";
    
  
  let btnY = document.querySelector('#btnY');
  let btnN = document.querySelector('#btnN');
  // cardone.classList.add("slideUp");
  btnY.style.display = "flex";
  btnN.style.display = "flex";


  });
  
  //카드 확정 -> 빙글빙글돌면서 확대
btnY.addEventListener('click', function() {
  // let btnY = document.querySelector('#btnY');
  // let btnN = document.querySelector('#btnN');

  btnY.style.display = "none";
 
  // btnN.style.display = "none";
  // imgCard[r].style.transform = "translateX(100%) rotateY(-180deg) scale(3)";
  imgCard[r].classList.add("rotateCard");
  txt2.innerHTML = `${rTxt}`;
});
  
// 카드 취소 -> 다시 원래 자리로 돌려보내기
btnN.addEventListener('click', function() {
  imgCard[r].classList.add("slideDown");

  
  btnY.style.display = "none";
  btnN.style.display = "none";
  
  //Animation Remove 지연
  setTimeout(function(){
    imgCard[r].classList.remove("slideUp");
    imgCard[r].classList.remove("slideDown");
  }, 1000);
});


}

//카드 셔플 애니메이션

function shuffle(){
  
  cardone.classList.add("shuffle1");
  cardtwo.classList.add("shuffle2");
  cardthr.classList.add("shuffle3");
  cardfour.classList.add("shuffle4");
  cardfive.classList.add("shuffle5");
  cardsix.classList.add("shuffle6");

  // setTimeout(function(){
  //   cardone.classList.remove("shuffle1");
  //   cardtwo.classList.remove("shuffle2");
  //   cardthr.classList.remove("shuffle3");
  //   cardfour.classList.remove("shuffle4");
  //   cardfive.classList.remove("shuffle5");
  //   cardsix.classList.remove("shuffle6");

  // }, 5000);
}

// 초기화버튼 (새로고침)
function reset() {
  location.reload();
}



//네온효과(h1태그)
const colors = gsap.to('h1', {
  paused: true,
  duration: 20,
  repeat: -1,
  '--hue': 360,
})

const doRandom = () => {
  gsap.timeline()
    .to('h1', {
      duration: 0.1,
      opacity: function(){ return gsap.utils.random(.90, .95) },
      delay: function(){ return gsap.utils.random(.1, 2) },
    }).to('h1', {
      duration: 0.1,
      opacity: 1,
      onComplete: function(){
        doRandom()
      }
    })
}

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (! mediaQuery || ! mediaQuery.matches) {
  colors.play();
  doRandom();
}



//불꽃놀이 애니메이션
var c = document.getElementById('canvas');
var ctx = c.getContext("2d");

var cwidth, cheight;
var shells = [];
var pass = [];

var clrs = ['ff5252', '#ff4081', '#e040fb', '#7c4dff', '#53dff', '#40cdff', '#18ffff', '#64ffda', '#69f0ae', '#b2fff59'];

window.onresize = function(){reset();}
reset();
function reset() {

  cwidth = window.innerWidth;
  cheight = window.innerHeight;
  c.width = cwidth;
  c.height = cheight;

}



function newShell(){
  var left = (Math.random() > 0.5);
  var shell = {};
  shell.x = (1*left);
  shell.y = 1;
  shell.xoff = (0.01 + Math.random() * 0.007)* (left ? 1: -1);
  shell.yoff = 0.01 + Math.random() * 0.007;
  shell.size = Math.random() * 6 + 3;
  shell.color = colors[Math.floor(Math.random() * clrs.length)];

  shells.push(shell);
}

function newPass(shell){
  var passCount = Math.ceil(Math.pow(shell.size, 2) * Math.PI);

  for (i = 0; i < passCount ; i++){
    var pas = {};
    pas.x = shell.x * cwidth;
    pas.y = shell.y * cheight;

    var a= Math.random() * 4;
    var s = Math.random() * 10;

    pas.xoff = s * Math.sin((5-a) * (Math.PI / 2));
    pas.yoff = s * Math.sin(a * (Math.PI / 2));

    pas.color = shell.color;
    pas.size = Math.sqrt(shell.size);

    if(pass.length < 1000){ pass.push(pas);}

  }
}

var lastRun = 0;
Run();
function Run() {

var dt = 1;
if(lastRun != 0){
  dt = Math.min(50, (performance.now() - lastRun));
}
lastRun = performance.now();

ctx.fillstyle = "rgba(0,0,0,0.25)";
ctx.fillRect(0,0,cwidth,cheight);

if((shells.length < 10) && (Math.random() > 0.96)) {
  newShell();
}
for (let ix in shells){
  var shell = shells[ix];

  ctx.beginPath();
  ctx.arc(shell.x * cwidth, shell.y * cheight, shell.size, 0, 2 * Math.PI);

  ctx.fillstyle = shell.color;
  ctx.fill();

  shell.x -= shell.xoff;
  shell.y -= shell.yoff;
  shell.xoff -= (shell.xoff * dt * 0.001);
  shell.yoff -= ((shell.yoff + 0.2)*dt * 0.00005);

  if (shell.yoff < -0.005){
    newPass(shell);
    shells.splice(ix, 1);
  }
}

  for (let ix in pass){
    var pas = pass[ix];

    ctx.beginPath();
    ctx.arc(pas.x, pas.y, pas.size, 0,2 * Math.PI);
    ctx.fillstyle = pas.color;
    ctx.fill();

    pas.x -= pas.xoff;
    pas.y -= pas.yoff;

    pas.xoff -= (pas.xoff * dt * 0.001);
    pas.yoff -= ((pas.yoff + 5) * dt * 0.00005);
    pas.size -= (dt * 0.002 * Math.random());

    if ((pas.y > cheight) || (pas.y < -50)|| (pas.size <= 0)){
      pass.splice(ix, 1);
    }
  }

  requestAnimationFrame(Run);
}




