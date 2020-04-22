$(function() {
 
  $('.menu-trigger').on('click', function() { // .menu-trigger(ハンバーガーアイコン)クリック時に行われる処理
    $(this).toggleClass('active'); //.toggleClass( )は、指定されているclass（ここではactive）をトグル処理するメソッド
    $('#sp-menu').fadeToggle(); //.fadeToggle( )は、要素のフェードイン・フェードアウトを切り替えるメソッド
    return false;
  });
 
 });