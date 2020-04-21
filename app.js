//alert(hello);  各命令の終わりは ;（セミコロン）で終わる

// var hello = 'Hello World'  変数記述方法=> var 変数名 = 内容 ;

//alert('Hello' + 'World');  文字列を結合

/*
 <条件分岐（if文）>
var orange = 100;
var apple = 120;

if (orange < apple) { =>(条件1)
	alert('みかんの値段がりんごよりも安い') =>処理1
}
else if (orange == apple){ // (条件2)
	alert('みかんとりんごが同じ値段') =>処理2
}
else{
	alert('みかんの値段がりんごより高い') =>処理3
}
*/


/*
<繰り返し処理（while文）> 条件式が真（true）である間は繰り返し処理が実行
var max = 100;
var num = 1;
var count = 0;

while(num < max){ =>条件)
    num = num * 2; =>処理
    count = count + 1; =>処理
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');
*/


/*
<do...while文>条件式のtrue／falseに関わらず、最初の1回だけは必ず処理
do{
    最低1回は行われる処理
}while(条件式);
*/


/*
<for文>決められた回数の処理を繰り返す
var i; =>「変数i」を宣言
var num = 0; =>「変数num」を宣言し、初期値を「0」に設定

for(i = 1; i < 11; i++){ =>(初期値; 条件式; 増減値) 変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「 i = i+1」と同じ）
    num = num + i; =>繰り返し処理 変数numに「num+i」を代入
}

alert('1から10まで足し算した結果は' + num + 'です'); =>アラートウィンドウに計算結果を表示
*/


/*
<確認問題>
足し算、引き算、掛け算、割り算の計算式と結果を、アラートウィンドウに表示

var init1 = 2;
var init2 = 1;
alert(init1 + init2)
alert(init1 - init2)
alert(init1 * init2)
alert(init1 / init2)
*/


/*
<関数>
function addString(strA){ =>関数名「addString」を記述し、引数として「strA」を定義
    var addStr = "Hello " + strA;　=>変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合
    return addStr; =>結合結果の格納された「addStr」を、関数の戻り値として出力結果を表示
}
*/

/*
<入力ダイアログで値を入力する>
var promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);
*/

/*
<複数の関数で表示（ジャンケン）>
var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。')
alert('あなたの選んだ手は' + user_hand + 'です。')

function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 ) //=>Math.floor( Math.random() * 3 )は、0～2までのランダムな整数値を生成します。関数内の「3」は、ランダム生成したい整数値の+1を指定。

	if (js_hand_num == 0) { //=>ランダム生成された数値を条件分岐で出し分ける。
		js_hand = "グー";
	}else if(js_hand_num == 1){
		js_hand = "チョキ";
	}else if (js_hand_num == 2) {
		js_hand = "パー";
	}
	return js_hand; //=>関数の戻り値として、グー・チョキ・パーの文字列を返す。
}
*/


// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// ループ処理
	while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
      alert('グー・チョキ・パーのいずれかを入力して下さい');
      user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
    }
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
// 結果を表示する

//プロンプト欄入力条件分岐
	if(user_hand != null){
		alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
	}else {
		alert('またチャレンジしてね');
}
// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand_name;
    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }
    return hand_name;
}
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
    var winLoseStr;
    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }
    return winLoseStr;
}




