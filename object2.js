// 데이터를 사용하기 좋게 복잡하지 않게 정리해주는 도구는 ? //, array, object
//자바스크립트에서 함수는 "값"이기도 하다. + 그렇기 때문에 배열과 객체에 담을 수 있다.
//보통 배열보다 객체에 많이 담음  Why? : 객체는 이름이 있기 때문에.

var f = function(){
  console.log(1+1);
  console.log(1+2);
}
var  a = [f];  //배열에 담음 배열 : []
a[0]();

var o = {  //객체에 담음 객체 : {}
  func:f
}
o.func();

//밑에 것들은 실행되지 않음 (자바스크립트의 함수가 값(var f = ..)으로 될 수 있는지 실험)
//var i = if(true){console.log(1)};

//var w = while(true){console.log(1)};
