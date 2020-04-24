$('#tab-contents .tab[id != "tab1"]').hide(); //$('要素[属性 != "値"]')　.hide();は、特定のHTML要素を非表示にするメソッド
 
$('#tab-menu a').on('click', function() { //「id="tab-menu"」の<a>タグがクリックされたときに、処理を実行
  $("#tab-contents .tab").hide(); //id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  $("#tab-menu .active").removeClass("active"); //.removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド
  $(this).addClass("active"); //.addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
  $($(this).attr("href")).show(); //.attr()は、HTML要素の属性を取得したり設定できるメソッド、.show()は要素を表示するメソッド
  return false;
});