let wrap = document.getElementsByClassName('wrap')[0];
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

// let profile_tab = document.querySelectorAll('.profile_tabs > div');

// profile_tab.addEventListener('mouseenter', function(){
//     for(let i = 0 ; i<5; i++){
//         profile_tab[i].classList.remove('active')
//     }
//     profile_tab.classlist.add('active');
// })


