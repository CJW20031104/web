let wrap = document.getElementsByClassName('wrap')[0];


let tab1 = document.getElementsByClassName('tab1')[0];
let tab2 = document.getElementsByClassName('tab2')[0];
tab1.addEventListener('click', function(){
    tab1.classList.add('active')
    tab2.classList.remove ('active')
})
tab2.addEventListener('click', function(){
    tab2.classList.add ('active')
    tab1.classList.remove ('active')
})

const navItem = document.getElementsByClassName('nav_item')[0];
navItem.addEventListener('click', function(){
    document.getElementsByClassName('path')[0].classList.add('path_fillter')
})




//======================로그아웃 버튼==========================

let user = document.getElementsByClassName('user_profile')[0];
let logout = document.getElementsByClassName('log_out')[0];
let count=0;
user.addEventListener('click', function(event) {
    ++count;
    if(count % 2 == 0){
    logout.style.display = 'none'
    }
else{
    logout.style.display = 'block'
    }
// event.stopPropagation();
});

document.addEventListener('click', function(event) {
if (!user.contains(event.target)) {
logout.style.display = 'none'
}
});





let asdf = document.getElementsByClassName('path')[0];
// let elements = document.querySelectorAll('.path'); 
let nav = document.getElementsByClassName('nav_item');
let nav_entire = document.getElementsByClassName('nav_item') ;



// elements.addEventListener("click" , function(){
//   // asdf.classList.add('path_fillter');
//   elements.forEach(element => {
//     asdf.classList.add('path_fillter');
//   });
//   nav_entire.style.backgroundColor = '#000'
// })

// elements.forEach(element => {
//   element.addEventListener("click", function() {
//     element.classList.add('path_fillter'); // 클릭한 요소에 클래스 추가
//     if (nav_entire) { // nav_entire가 존재하는지 확인 후 스타일 변경
//       nav_entire.style.backgroundColor = '#000';
//     }
//   });
// });
//================================================================================
// for(let i=0; i<nav.length; i++) {
//     nav[i].addEventListener("click" , function(){
//     // ++count;
//     // if(count % 2 == 0){
//     //     nav[i].style.backgroundColor = 'rgba(15, 20, 25, 0.1)'
//     //   }
//     // else{
//     //     nav[i].style.backgroundColor = '#fff'
//     //   }
//     })
// }
//============================================================
// 모든 네비게이션 아이템 선택
const navItems = document.querySelectorAll('.nav_item');

// 모든 네비게이션 아이템의 상태 초기화
function resetNavItems() {
navItems.forEach(item => {
    item.style.backgroundColor = 'transparent';

    // 모든 아이콘의 특수 효과 제거
    const icon = item.querySelector('.path');
    if (icon) {
        icon.classList.remove('path_fillter');
    }
});
}

// 각 네비게이션 아이템에 클릭 이벤트 추가
navItems.forEach(item => {
// 각 아이템의 활성화 상태를 추적할 변수
let isActive = false;

item.addEventListener('click', function() {
// 모든 아이템 상태 초기화

resetNavItems();

  // 현재 클릭된 아이템의 상태 토글
if (!isActive) {
// 활성화되지 않았다면 스타일 적용
this.style.backgroundColor = 'rgba(15, 20, 25, 0.1)';
// 아이콘에 특수 효과 추가
const icon = this.querySelector('.path');
if (icon) {
    icon.classList.add('path_fillter');
    isActive = true;
}
} else {
// 이미 활성화되어 있다면 초기 상태로 복귀
isActive = false;
// item.style.backgroundColor = 'transparent';
}
console.log(isActive)
});
});

//============================================================
document.addEventListener("DOMContentLoaded", function () {
let d_height = document.documentElement.scrollHeight;
let w_height = window.innerHeight;

console.log("d_height: ", d_height);
console.log("w_height: ", w_height);

window.addEventListener("scroll", function () {
let s_top = window.scrollY;
let s_bot = s_top + w_height;
if (s_bot >= d_height - 20) {
    let main = document.getElementsByClassName("main_content")[0];
    for(let i =0 ; i< 3; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("post");
      // let newDiv = document.createElement("div");
      // document.createElement("div").classList.add("post");
        main.appendChild(newDiv);
    }
    d_height = document.documentElement.scrollHeight;
}
});
});


let post_btn = document.getElementsByClassName('post_btn')[0];
let post_write = document.getElementsByClassName('post_write')[0];
let pan = document.getElementsByClassName('pan')[0];
let post_write_close_btn = document.getElementsByClassName('post_write_close')[0];


function write_close(){
    post_write.style.display = 'none';
    pan.style.display = 'none';
    wrap.style.height = 'auto'
    wrap.style.overflow = 'visible'
}


pan.addEventListener("click", function(event){
    if(pan.contains(event.target)){
        write_close();
    }
})


post_btn.addEventListener('click', function(){
    post_write.style.display = 'block';
    pan.style.display = 'block';
    // wrap.classList.add('wrap_add')
    wrap.style.height = '100vh'
    wrap.style.overflow = 'hidden'
})


post_write_close_btn.addEventListener('click', function(){
    write_close();
})


