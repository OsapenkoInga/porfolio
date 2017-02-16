$(window).load(function () {
    w = $(window).width();
    if (w <= 320) {
        $('.slides').append('<li><img src="img/galerry_4.jpg" alt=""></li><li><img src="img/galerry_1.jpg" alt=""></li><li><img src="img/galerry_3.jpg" alt=""></li><li><img src="img/galerry_4.jpg" alt=""></li>');
    }
    $('.blueberry').blueberry();

});

$(document).ready(function () {



    //слайдер с отзывами
    var elWrap = $('#slider'),
   el = elWrap.find('li'),
   elPager = $('#we'),
   elP = elPager.find('li'),
   indexImg = 1,
   indexMax = el.length,
   phase = 3000;
    function change() {
        elP.css('background', '#eaeaea');
        el.fadeOut(500);
        el.filter(':nth-child(' + indexImg + ')').fadeIn(500);
        elP.filter(':nth-child(' + indexImg + ')').css('background', '#641faa');
    };
    $('#we li').click(function () {
        indexImg = $(this).index() + 1;
        change();
    });
    function autoCange() {
        indexImg++;
        if (indexImg > indexMax) {
            indexImg = 1;
        }
        change();
    };
    var interval = setInterval(autoCange, phase);

    elWrap.mouseover(function () {
        clearInterval(interval);
    });
    elWrap.mouseout(function () {
        interval = setInterval(autoCange, phase);
    });

    var btnNext = $('div.next'),
    btnPrev = $('div.prev');

    btnNext.click(function () {
        indexImg++;
        if (indexImg > indexMax) {
            indexImg = 1;
        };
        change();
    });
    btnPrev.click(function () {
        indexImg--;
        if (indexImg < 1) {
            indexImg = indexMax;
        };
        change();
    });

    //вопрос-ответ
    $('.query ul .question').click(function () {  //при нажатии на вопрос
        var w = $(window).width(); //в w записываем ширину окна
        $('.query ul .question').css('border', 'none'); //удаляем бордер у всех єлементов с вопросами
        var i = $(this).index();  // в і записываем индекс текущего блока
        $(this).css('border', '1px solid white'); //обводим рамкой текущий блок

        if (w > 970) {
            $('.query ul .answer').css('display', 'none');//делаем все ответы невыдимыми
            var myText = $('.query ul li').eq(i + 1).text(); //в myText записываем тест блока, который идет после текущего(ответ)
            var topLi = $(this).position().top;//записываем в topLi позицию текущего элемента относительно верхнего края родителя
            $('.block_answer img').css('top', topLi + 17);//передвигаем картинку на topLi + 17
            $('#text_answer').text(myText);  //копируем текст с myText в блок с id='text_answer'
        } else {
            var answer = $('.answer:visible');  //в answer записываем видимые ответы
            if (answer.length > 0) {  //если есть выдимый ответ
                answer.slideUp(700, function () {  //мы его скрываем (slideUp) и вызываем callback-функцию
                    goBlock();
                });

            } else {
                goBlock();
            };
            function goBlock() {
                $('.query ul li').eq(i + 1).slideDown(1000);//показать блок после вопроса
            };
        };
    });




    var pull = $('#icoMenu'),
        menu = $('#blockMenu');

    $(pull).click(function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    menu.click(function (e) {
        menu.slideUp();
    });

    $(window).resize(function () {
        var w = $(window).width();
        if (w > 680) {
            menu.removeAttr('style');
        };
    });



    $(window).resize(function () {// событие изменение окна браузера
        if ($(window).width() > 970) { //если ширина window больше 970
            $('.answer').removeAttr('style'); //удаляем атрибут style у блока с ответами
        };
        if ($(window).width() > 320 && $('.slides li').length == 7) {
            $('.pager').remove();
            $('.slides li:gt(2)').remove();
            $('.blueberry').blueberry();
        };
    });

});