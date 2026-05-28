
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("検索結果");
  console.log("都市名："+data.name);
  console.log("ID："+data.id);
  console.log("天気："+data.weather[0].description);
  console.log("最高気温："+data.main.temp_max);
  console.log("最低気温："+data.main.temp_min);
  console.log("湿度："+data.main.humidity);
  console.log("風速："+data.wind.speed);
  console.log("風向："+data.wind.deg);
  console.log("緯度："+data.coord.lon);
  console.log("経度："+data.coord.lat);
}

// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {
  let old = document.querySelector('#result');
  if (old) {
    old.remove();
  }
  let l =document.createElement('div');
  l.setAttribute('id', 'result');
  let u =document.querySelector('body');
  u.insertAdjacentElement('beforeend',l);
  l =document.createElement('ul');
	l.setAttribute('id', 'kekka');
	u =document.querySelector('div#result');
	u.insertAdjacentElement('beforeend',l);
  let pn =document.createElement('p');
  pn.textContent ='検索結果';
  u.insertAdjacentElement('afterbegin',pn);
  
  let t =
  ["都市名："+data.name,"ID："+data.id,"天気："+data.weather[0].description,"最高気温："+data.main.temp_max,
    "最低気温："+data.main.temp_min,"湿度："+data.main.humidity,"風速："+data.wind.speed,"風向："+data.wind.deg,
    "緯度："+data.coord.lon,"経度："+data.coord.lat];
  for (let n =0; n <t.length ;n++){
    let p =document.createElement('li');
    p.textContent =t[n];
    u =document.querySelector('ul#kekka');
    u.insertAdjacentElement('beforeend',p);
  }
}
let b = document.querySelector('button#kensaku');
b.addEventListener('click',sendRequest);

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let i =document.querySelector('input[name ="nyuryoku"]');
  let number =i.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+number+'.json';
  axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
    printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
/*let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};*/

