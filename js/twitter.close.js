document.getElementsByClassName('sign_up')[0].addEventListener('click', function() {
    document.getElementsByClassName('modal')[0].style.display = 'block'
    document.getElementsByClassName('pan')[0].style.display = 'block'
});

let close= document.getElementsByClassName('close_btn')[0]
let none = document.getElementsByClassName('modal')[0]
close.addEventListener('click', function(){
    none.style.display = 'none'
    document.getElementsByClassName('pan')[0].style.display = 'none'
});

let name= document.getElementsByClassName('name')[0]
let name_holder = document.getElementsByClassName('name_holder')[0]
name.addEventListener('click', function(){
    name_holder.style.fontsize = '13px'
})