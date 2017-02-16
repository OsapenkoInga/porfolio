$(document).ready(function () {
    function prodctHide() {
        $('.product').slice(8).hide();
    };
    prodctHide();
    $('.catalog-menu li a').click(function () {
        var textMenu = $(this).text(),
            product = $('.product');
        product.hide();
        for (var i = 0; i < product.length; i++) {
            if (textMenu == 'all') {
                product.show();
                prodctHide();
            }
            if (product.eq(i).attr('data-name') == textMenu) {
                product.eq(i).show();
                prodctHide();
            };
        };

    });
    var addProduct = 8;
    $('.load').click(function () {
        addProduct = addProduct + 4;
        $('.product').slice(8, addProduct).show();
    });

    //получение и потеря фокуса у input(e-mail)
    $('input[type="email"]').focus(function () {
        $(this).val('');
    });
    $('input[type="email"]').focusout(function () {
        $(this).val('Your Email Address');
    });

    var sum = 0;
    //добавление товаров в корзину
    $('.product').click(function () {
        var i_Product = +$('.bag span').text();
        i_Product = i_Product + 1;
        $('.bag span').text(i_Product);
        var imgProduct = $(this).clone().find('img'), //записываем в переменную изображение текущего товара
        nameProduct = $(this).clone().find('h5'),  //записываем в переменную название текущего товара
        priceProduct = $(this).clone().find('.operand'), //записываем в переменную цену текущего товара
           //в переменную operand помещаем цену на товар, не учитывая знак $
           operand = +$(this).find('.operand').text().slice(1);

        $('.bag-product').prepend('<div class="one-product"></div>')
        $('.bag-product div:empty').append(imgProduct).append(nameProduct).append(priceProduct);
        sum = sum + operand;
        writeSum();
    });

    var c = 0;
    $('.bag').click(function () {
        if (c == 0) {
            $('.bag-product').show(300);
            c = 1;
        } else {
            $('.bag-product').hide(300);
            c = 0;
        }
    });

    $('button[type="reset"]').click(function () {
        $('.one-product').remove();
        $('.bag-product').hide(300);
        $('.bag span').text('0');
        sum = 0;
        writeSum();
    });
    //функция выводит суму выбраных товаров
    function writeSum() {
        $('.sum-form span').text('Suma: ' + sum + '$');
    };
});