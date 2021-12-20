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


// NOTICE SWIPER
new Swiper('.notice-line .swiper',{
    direction: 'vertical',
    autoplay: true,
    loop: true
});//new Swiper(선택자, 옵션)

new Swiper('.promotion .swiper',{
    // direction: 'horizontal' 기본값임
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay:{
        delay: 5000
    },
    // pagination ->페이지 번호 요소 선택자
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


//TOGGLE PROMOTION
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
});


// FLOATING ANIMATION

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector,
        random(1.5, 2.5),
        {
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 5, 15);
floatingObject('.floating3', 1.5, 20);