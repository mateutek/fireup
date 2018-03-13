$(function() {
    $('a[href^="#"]').click(function() {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({ scrollTop: target.offset().top }, 500);
        return false;
    });
    $('.js-icon').click(function(){
        $(this).toggleClass('hamburger-icon--active');
        $('.js-menu').toggleClass('menu--mobile');
    });
});