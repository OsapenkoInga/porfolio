var w = $(window).width();
if (w < 320) {
    $('.slides').append('<li><img src="img/galerry_4.jpg" alt=""></li><li><img src="img/galerry_1.jpg" alt=""></li><li><img src="img/galerry_3.jpg" alt=""></li><li><img src="img/galerry_4.jpg" alt=""></li>')
};

$(window).resize(function () {
    alert(w);
});