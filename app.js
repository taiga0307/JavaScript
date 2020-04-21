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


//確認問題
//足し算、引き算、掛け算、割り算の計算式と結果を、アラートウィンドウに表示

var init1 = 2;
var init2 = 1;
alert(init1 + init2)
alert(init1 - init2)
alert(init1 * init2)
alert(init1 / init2)






