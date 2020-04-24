// （API_KEY には、"取得したAPIキー" を記述）
API_KEY = "c41f620a43cbc36bd6dc0411c930048c";


$(function(){
  $('#btn').on('click', function() { //index.htmlファイルで記述した<button id="btn">を$('#btn')で取得
　　// 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({ //$.ajax()は、Ajaxを実装するメソッド
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      //url:では、APIにリクエストするURLを指定。#citynameの値を受け取り、URLを結合。（val()は、HTMLのvalue属性を取得
      dataType : 'jsonp', //dataTypeは、レスポンスとして取得したいデータの型を指定。

   }).done(function (data){ //通信成功の記述。.done()は通信に成功した場合.
   	    // 位置
        $('#place').text(data.name);
        // 最高気温
        $('#temp_max').text(data.main.temp_max);
        // 最低気温
        $('#temp_min').text(data.main.temp_min);
        //　湿度
        $('#humidity').text(data.main.humidity);
        //　風速
        $('#speed').text(data.wind.speed);
        // 天気
        $('#weather').text(data.weather[0].main);
        // 天気アイコン
        $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        $('img').attr("alt",data.weather[0].main);
        //$('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換される。
        //$(要素名).attr(属性名,値);と指定でimg要素にsrc属性とalt属性が追加され天気のアイコンを表示が可能。アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".png。
    }).fail(function (data) { //通信失敗の記述。.fail()は失敗した場合。
    	//(data)を指定しているが、その引数内に取得した結果が入る。（dataは任意の変数名）
      alert('通信に失敗しました。'); //通信失敗した場合アラート表示。
    });
  });
});