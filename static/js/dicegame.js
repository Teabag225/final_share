// 주사위 변수 선언
let user3class = document.querySelectorAll(".noshow")[0];
let user4class = document.querySelectorAll(".noshow")[1];
let user5class = document.querySelectorAll(".noshow")[2];
let user6class = document.querySelectorAll(".noshow")[3];

// 유저 숫자
let cnt = 2;

//유저 추가하기
function add() {
  if (user3class.classList.contains("show") == false) {
    user3class.classList.add("show"); //유저 추가
    cnt++; //유저 숫자 카운트
  } else if (user4class.classList.contains("show") == false) {
    document.querySelector("#user4").classList.add("show");
    cnt++;
  } else if (user5class.classList.contains("show") == false) {
    document.querySelector("#user5").classList.add("show");
    cnt++;
  } else if (user6class.classList.contains("show") == false) {
    document.querySelector("#user6").classList.add("show");
    cnt++;
  } else {
    Swal.fire({
      title: "User는 최대 6명까지 가능합니다.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }

  var location = document.querySelector(".add").offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
}

//유저 제거하기
function remove() {
  if (user6class.classList.contains("show") == true) {
    user6class.classList.remove("show"); // 유저 제거
    cnt--; //유저 숫자 카운트
  } else if (user5class.classList.contains("show") == true) {
    document.querySelector("#user5").classList.remove("show");
    cnt--;
  } else if (user4class.classList.contains("show") == true) {
    document.querySelector("#user4").classList.remove("show");
    cnt--;
  } else if (user3class.classList.contains("show") == true) {
    document.querySelector("#user3").classList.remove("show");
    cnt--;
  } else {
    Swal.fire({
      title: "User는 최소 2명이 필요합니다.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
}

let loading = document.querySelector(".loading-container");

// 던지기
function run() {
  const numArray = [1, 2, 3, 4, 5, 6]; // 주사위 숫자
  numArray.sort(() => 0.5 - Math.random()); // 주사위 섞기

  let min = 7; // 최소값
  let loser = 0; // 최소값 유저

  for (i = 0; cnt > i; i++) {
    // 유저숫자만큼 반복
    //주사위 숫자만큼 이미지 가져오기
    let dice = "./static/image/dice" + numArray[i] + ".png";
    document.querySelectorAll(".user-img")[i].setAttribute("src", dice);
    if (numArray[i] < min) {
      loser = i + 1;
      min = numArray[i]; // 최소값 추가하기
    } else {
    }
  }

  // loading.classList.toggle("ds-flex");

  // 스크롤 자동 이동
  var location = document.querySelector(".result").offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });

  let particles = [];

  const colors = [
    "#eb6383",
    "#fa9191",
    "#ffe9c5",
    "#b4f2e1",
    "deepskyblue",
    "red",
    "coral",
    "lightgreen",
  ];

  function pop() {
    for (let i = 0; i < 150; i++) {
      const p = document.createElement("particule");
      p.x = window.innerWidth * 0.5;
      p.y = window.innerHeight + Math.random() * window.innerHeight * 0.3;
      p.vel = {
        x: (Math.random() - 0.5) * 10,
        y: Math.random() * -20 - 15,
      };
      p.mass = Math.random() * 0.2 + 0.8;
      particles.push(p);
      p.style.transform = `translate(${p.x}px, ${p.y}px)`;
      const size = Math.random() * 15 + 5;
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(p);
    }
  }

  function render() {
    for (let i = particles.length - 1; i--; i > -1) {
      const p = particles[i];
      p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;

      p.x += p.vel.x;
      p.y += p.vel.y;

      p.vel.y += 0.5 * p.mass;
      console.log(p.length);
      if (particles.length > 0) {
        loading.classList.remove("ds-flex");
        console.log(p);
      }

      if (p.y > window.innerHeight * 2) {
        p.remove();
        loading.classList.remove("ds-flex");
        loading.classList.add("ds-none");
        particles.splice(i, 1);
      }
    }
    requestAnimationFrame(render);
  }

  // 로딩창 구현
  if (loading.classList.contains("ds-flex") == false) {
    // const target = document.getElementById("target_btn");
    loading.classList.add("ds-flex");
    // target.disabled = true;
    loading.classList.remove("ds-none");
    pop();
    window.setTimeout(render, "2000");
    // target.disabled = false;
  }
  // pop();
  // render();
  // window.setTimeout(render, "2000");

  // LOSER text 노출

  document.querySelector(
    ".result"
  ).innerHTML = `🥳 USER ${loser} 님 축하합니다! 밥사주세요!!!🥳`;
}

// 메뉴바
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var t_dropdown = document.getElementsByClassName("toggle-dropdown-btn");
var i;

for (i = 0; i < t_dropdown.length; i++) {
  t_dropdown[i].addEventListener("click", function () {
    this.classList.toggle("t_active");
    var t_dropdownContent = this.nextElementSibling;
    if (t_dropdownContent.style.display === "block") {
      t_dropdownContent.style.display = "none";
    } else {
      t_dropdownContent.style.display = "block";
    }
  });
}

//토클 메뉴

const iconMenu = document.querySelector(".icon");
const toggleMenu = document.querySelector(".toggle-menu");

iconMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("d-none");
});
