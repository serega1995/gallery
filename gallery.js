// Общие переменные
var images_count = 10;
// Переменные главного слайда
var main_slide_width = document.documentElement.clientWidth;
var main_slide_height = document.documentElement.clientHeight;
// Установки главного слайда в начальное положение
$('#gallery_main_slide').css('width', main_slide_width + 'px');
$('#gallery_main_slide').css('height', main_slide_height + 'px');
// Переменные меню галереи
var slide_menu_width = main_slide_width * 0.17;
var slide_menu_height = slide_menu_width * (main_slide_height / main_slide_width);
var slide_menu_marginLeft = main_slide_width * 0.01; // маргин слева и справа
var slide_menu_full_width = Math.ceil(images_count * slide_menu_width + images_count * slide_menu_marginLeft * 2 + 8 * images_count ); // Длина меню с картинками
var max_marginLeft = slide_menu_full_width - main_slide_width; // максимальный сдвиг меню
var ratio = max_marginLeft /  main_slide_width * 1.02; // Отношение 
/*alert(main_slide_width);
alert(max_marginLeft);
alert(ratio);*/
// Установки меню в начальное положение
$('#gallaery_slide_menu li').css('width', slide_menu_width + 'px');
$('#gallaery_slide_menu li').css('height', slide_menu_height + 'px');
$('#gallaery_slide_menu li').css('marginLeft', slide_menu_marginLeft + 'px');
$('#gallaery_slide_menu li').css('marginRight', slide_menu_marginLeft + 'px');
$('#gallaery_slide_menu ul').css('width', slide_menu_full_width + 'px');
// Установка событий
$('#gallaery_slide_menu').mousemove(move_slides);
$('#gallaery_slide_menu').mouseenter(show_slides);
$('#gallaery_slide_menu').mouseleave(hide_slides);
$('#gallaery_slide_menu li a').on('click', get_image);

// Прокрутка слайдера
function move_slides(event){
	margin = event.clientX * ratio * -1;
	$('#gallaery_slide_menu ul').css('marginLeft', margin + 'px');
	//$('.helper').html(event.clientX);
}
// Загрузка картинки
function get_image(event){
	$('#gallery_main_slide').prepend('<div class=\'main_slide_cover\'></div>');
	$('#gallery_main_slide_content').attr("src",event.target.getAttribute('in'))
	$('#gallery_main_slide_content').load(say);
	//$('.helper').html(event.target.getAttribute('in'));
	//$('.helper').html($('#gallery_main_slide_content').attr('src'));
}
function say(){
	$('.main_slide_cover').remove();
}
// Показыв и скрытие меню галереи
function show_slides(){
	var stop = $('#gallaery_slide_menu').css('opacity');
	if(stop <= 0.5){
		$('#gallaery_slide_menu').animate({opacity: 1}, 300);
	}
}
function hide_slides(){
	var stop = $('#gallaery_slide_menu').css('opacity');
	if(stop >= 0.5){
		$('#gallaery_slide_menu').animate({opacity: 0}, 300);
	}
}
