window.addEventListener('load', init, false);
function init() {
    var sect = document.getElementsByTagName('article')[0];//записываем в sect тег article
    document.getElementById('cl').addEventListener('click', function () {//при нажатии на элементе меню вызывается обработчик события click
        if (sect.style.visibility == 'hidden') { //если article невидим, делаем его видимым
            sect.style.visibility = 'visible';
        } else {// иначе article делаем невидимым
            sect.style.visibility = 'hidden';
            setTimeout(function () { sect.style.visibility = 'visible' }, 400);// а через 400 милисекунд опять видимым

        };
    }, false);
};