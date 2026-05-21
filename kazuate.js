// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let check =0;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu =kaisu+1;
  let p =document.querySelector('span#kaisu');
  p.textContent =kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso =Number(document.querySelector('input[name ="kaitou"]').value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if (kaisu >=4 || check >0){
    result.textContent ='答えは '+kotae+' でした．すでにゲームは終わっています';
  }else if (yoso == kotae){
    result.textContent ='正解です。おめでとう!';
    check +=1; 
  }else if (yoso >kotae){
    result.textContent ='まちがい。答えはもっと小さいですよ';
  }else if (yoso <kotae){
    result.textContent ='まちがい。答えはもっと大きいですよ';
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#curiku');
b.addEventListener('click',hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
