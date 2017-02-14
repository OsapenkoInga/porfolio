$(document).ready(function () {
    $('div.prev').click(function () {
        //��� ����� �� ������ ����� ���������� �������
        var positLeft = $('ul.small').position().left;
        
        //�������� ������� �������� ���� ��� ����� ����, �� ������� �� �������
        if (positLeft == 0) {
            return 0;
        }
        //����� �������� �� ������ li ���� margin-� ����� � ������(250+25+25)
        positLeft += 408;
        $('ul.small').animate({ left: positLeft + 'px' }, 100);
    });
    $('div.next').click(function () {
        var positLeft = $('ul.small').position().left;
        if (positLeft <= -($('ul.small li').length - 6) * 136) {
            return 0;
        }
        positLeft -= 408;
        $('ul.small').animate({ left: positLeft + 'px' }, 100);
    });
    $('ul.small').on('click', 'li', function () {
        var i = $(this).index();
		if(i>7){
			$('div.big img').attr('src', 'img/gallery-pic-'+ (i-7)+'.jpg');
		}else{
        $('div.big img').attr('src', 'img/gallery-pic-'+ (i+1)+'.jpg');
		}
    });
});