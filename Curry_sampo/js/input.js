function departureReset() {
	document.info.departure.value = "";
}

function sendMap() {
	var departure = "";
	if (document.info.departure.value!="")
			departure = escape(document.info.departure.value);
	else { // TODO: 現在地取得(ここでやった方がいいのか微妙)
//		departure = escape("テレコムセンタービル");
	    if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position)){
		    //取得した現在地をどう渡すか？
		}
		function(e){
		    //サンプルには入っていたが，何をするのか？
		}else{
		    //Location API がサポートされていない時どうするか？
	}
	location.href = "./map.html?"+"dep="+departure+"&time="+document.info.time.value;
	return false;
}


// ! ボタン効果の設定 ! //
//画像を配列に格納する
var img = new Array();

img[0] = new Image();
img[0].src = "./img/button_sanpo.png";
img[1] = new Image();
img[1].src = "./img/button_sanpo_push.png";

//画像番号用のグローバル変数
var cnt=0;


//画像切り替え関数
function showImage0(){
	document.getElementById("gazo").src=img[0].src;
}
function showImage1(){
	document.getElementById("gazo").src=img[1].src;
}
