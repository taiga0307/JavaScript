/*
・HTMLの読み込みが終わってからjQueryが実行されるように記述。
・省略型=> $(function(){
$(document).ready(function () {
・処理内容書式=> $( セレクタ ).メソッド ( パラメータ );
・セレクタ：操作の対象になる部分 メソッド：何を行うのか記述 パラメーター：メソッドの内容を書き換えられる
・下記は「bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい」という意味になる。
    $('body').html('<h1>Hello jQuery!!</h1>');
});
*/

/*
・CSSスタイルをjQueryで変更するとき、$('セレクタ').css('background-color','#0000FF');
・複数プロパティがあるときは下記のようになる。
$(function(){
	$('.box1').css({
		'background-color': '#0000FF',
		'height': '100px'
	});
});
*/

/*
・上から下へスライドさせるにはbox1が最初は非表示になるようにdisplay: none;を追加後、jsに.slideDown
$(function(){
  $('.box1').slideDown();
});
*/

/*
・下から上にスライドさせるには表示されている要素を隠すアニメーションになるので、cox1にdisplay: none;の記述は不要。jsに.slideUp
$(function(){
  $('.box1').slideUp();
});
*/


/*
・CSSで記述したdisplay: none;で非表示になっているがjQueryで表示させることができる
$(function(){
    $('.box1').show();
    $('.box1').css({'background-color': '#0000FF'});
});
*/


/*
・CSSで記述した内容をjQueryで非表示させることができる
$(function(){
    $('.box1').hide();
});
*/

//.slideDown();、.slideUp();、.show();、.hide();特定のクラス名のdiv要素のみは表示・非表示を切り替えるといったことが可能



//<確認問題>

$(function(){
	$('.box1').slideDown(function(){
		$('.box1').css({
		'background-color': '#0000FF',
		'height': '100px',
		'width': '200px'
	    }).slideUp();
    });
});










