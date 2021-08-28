//ナビゲーション
$('.sp-item').on('click', function() {
    $('.sp-nav').toggleClass('sp-toggle');
    $('.burger-btn').toggleClass('cross');
});


// ハンバーガーメニュー
$('.burger-btn').on('click', function() {
    $(this).toggleClass('cross');
    $('.sp-nav').toggleClass('sp-toggle');
});

// メインビジュアルのスライダー
$('.slider').slick({
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: 'linear',
    arrows: false,
});

// プログラムのアニメーション  animation / wow.js
$(function() {
    new WOW().init();
});
