// preloader ***********************
const preloader = document.querySelector('.preloader');
window.addEventListener("load", () =>{
    preloader.style.display= "none";
})

// sidebar toggle ******************
const left_side_bar = document.querySelector('.left-sidebar');
const menu_btn = document.querySelector('#menu-btn');

menu_btn.addEventListener("click", () =>{
    left_side_bar.classList.toggle("short-bar");
})

// active menu effect for leftside bar item******************
const side_bar = document.querySelector(".sidebar-item");
const menu_item = document.querySelectorAll("#menu-item");

menu_item.forEach(function(x){
    x.addEventListener('click', function(){
        side_bar.querySelector('.active-menu').classList.remove('active-menu');

        x.classList.add('active-menu');
    })
});

// dark mode **************************
const body = document.querySelector('body');
const modeText = document.querySelector('.mode-text');
const mttText = document.querySelector('.mtt-text');
const darkSwitch = body.querySelector('.dark-btn');
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");

  modeText.innerHTML = "light mode";
  mttText.innerHTML = "light mode";
};

const disableDarkMode = () => {
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");

  modeText.innerHTML = "dark mode";
  mttText.innerHTML = "dark mode";
};

if (darkMode === "enabled") {
  enableDarkMode(); 
}

darkSwitch.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); 
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

/*===================================*\
  pages load by fetch data
\*===================================*/
const display_rightData = document.querySelector('.bord-body');

// bydefult data
window.addEventListener('load', async () =>{
  const res = await fetch('./components/live-notice.html');
  const data = await res.text();

  display_rightData.innerHTML = data;
})

// notice data load
const notice = document.querySelector('.notice');

notice.addEventListener('click', async () =>{
  const res = await fetch('./components/live-notice.html');
  const data = await res.text();

  display_rightData.innerHTML = data;
})

// note data load
const about = document.querySelector('.about');

about.addEventListener('click', async () =>{
  const res = await fetch('./components/live-note.html');
  const data = await res.text();

  display_rightData.innerHTML = data;
})

// pepole data load
const pepole = document.querySelector('.pepole');

pepole.addEventListener('click', async () =>{
  const res = await fetch('./components/live-pepole.html');
  const data = await res.text();

  display_rightData.innerHTML = data;
})



// active menu effect for rightside bar item******************
const rightSide_tab = document.querySelector(".bord-tab");
const tab_item = document.querySelectorAll("#right-tab");

tab_item.forEach(function(x){
    x.addEventListener('click', function(){
        rightSide_tab.querySelector('.active-tab').classList.remove('active-tab');

        x.classList.add('active-tab');
    })
});

// side clocl 
setInterval(()=>{
  const time = document.querySelector(".display #time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";
  if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
});

// active search box 
const searchArea = document.querySelector(".search-area");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () =>{
  searchArea.classList.toggle("active-sbtn");
})



// active tree dod menu
const treedodMenu = document.getElementById("treedod-menu");
const treedodBtn = document.querySelector(".tree-dod");

treedodBtn.addEventListener("click", () =>{
  treedodMenu.classList.toggle("active-treeDod");
})



// window.onclick = function(event){
//   if(!event.target.matches('.tree-dod')){
//     treedodMenu.classList.remove('active-treeDod');
//   }
// }

// const chatBoxBody = Document.querySelector('.chatbox-body');

// document.onclick = function (event){
//   if(!event.target.matches('.tree-dod')) {
//     treedodMenu.classList.remove('active-treeDod');
//   }
// }













// active text-cm
const textCm = document.querySelectorAll(".text-dropdown .text-cm");
const textsideBtn = document.querySelectorAll(".text-dropdown .textside-btn");


var ts_menu = function(btnClick){
  textCm[btnClick].classList.toggle('active-text-cm');
}
textsideBtn.forEach((ts_btn, i) =>{
  ts_btn.addEventListener("click", () =>{
    ts_menu(i);
  })
})