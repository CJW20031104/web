    // let login_click = document.getElementsByClassName('login')[0];
    // let log_pop_pan = document.getElementsByClassName('log_pop_pan')[0];
    // login_click.addEventListener('click', function(){
    //     log_pop_pan.style.display = 'block'
    //     document.getElementsByClassName('pan')[0].style.display = 'block'
    // })

    // document.getElementsByClassName('close_btn2')[0].addEventListener('click', function(){
    //     log_pop_pan.style.display = 'none'
    //     document.getElementsByClassName('pan')[0].style.display = 'none'
    // })


    // let chg_txt = document.getElementsByClassName('chg_txt')[0];
    // let id = document.getElementById('id');
    // let password = document.getElementById('password');

    // password.addEventListener('click', function() {
    //     chg_txt.innerText = '비밀번호를 입력하세요';
    // });

    // id.addEventListener('click', function() {
    //     chg_txt.innerText = '아이디를 입력하세요';
    // });
// ======================================================================
    // let id_input = document.getElementById('id').value;
    // let pw_input = document.getElementById('password').value;
    // let send = document.getElementsByClassName('send_log_information')[0]

    // function tmp(){
    //     const logSuccess = id_input && pw_input;

    //     send.disabled = !logSuccess;
    //     if(logSuccess){
    //         send.style.backgroundColor = '#000'
    //     }
    // }
    // inputs.forEach(input => {
    //     send.addEventListener('input', tmp);
    //   });

    let login_click = document.getElementsByClassName('login')[0];
let log_pop_pan = document.getElementsByClassName('log_pop_pan')[0];
login_click.addEventListener('click', function(){
    log_pop_pan.style.display = 'block'
    document.getElementsByClassName('pan')[0].style.display = 'block'
})

document.getElementsByClassName('close_btn2')[0].addEventListener('click', function(){
    log_pop_pan.style.display = 'none'
    document.getElementsByClassName('pan')[0].style.display = 'none'
})


let chg_txt = document.getElementsByClassName('chg_txt')[0];
let id = document.getElementById('id');
let password = document.getElementById('password');

password.addEventListener('click', function() {
    chg_txt.innerText = '비밀번호를 입력하세요';
});

id.addEventListener('click', function() {
    chg_txt.innerText = '아이디를 입력하세요';
});

// Login button validation
const loginBtn = document.getElementsByClassName('send_log_information')[0];

function tmp() {
    const idValue = document.getElementById('id').value;
    const passwordValue = document.getElementById('password').value;
    
    const isLoginValid = idValue && passwordValue;
    
    loginBtn.disabled = !isLoginValid;
    
    if(isLoginValid) {
        loginBtn.style.backgroundColor = '#000';
        loginBtn.style.color = 'white';
        loginBtn.style.cursor = 'pointer';
    } else {
        loginBtn.style.backgroundColor = '';
        loginBtn.style.color = '';
        loginBtn.style.cursor = '';
    }
}

// Add event listeners to input fields
id.addEventListener('input', tmp);
password.addEventListener('input', tmp);

// Run validation on page load
tmp();

