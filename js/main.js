// console.log('js'); //js연결확인위함

// SEARCH //
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// BADGE //
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            // name: '', age: ''
            opacity: 0,
            display: 'none'
        });
        
        // badgeEl.style.display = 'none';
    } else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // badgeEl.style.display = 'block';
    }
}, 300));
// gsap.to(요소, 지속시간, 옵션); 애니메이션 라이브러리
// _.throttle(함수, 시간) -> 이벤트에 부하를 걸어 데이터과부하 방지


// FADE-IN
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index +1) * .7,
        opacity: 1
    });
})
