//Round 함수 == 반올림해주는 함수

console.log(Math.round(1.6));  //2
console.log(Math.round(1.4));  //1

function sum(first, second){ // 밑의 arg를 받아서 함수 안으로 전달해주는 매개체를 한국어로 "매개변수", 영어로 "Parameter"라고 한다.
  console.log('a');
  return first+second; // return은 어떤 값을 출력한다는 의미 + 실행한 함수를 바로 종료시키는 특수한 키워드.
  console.log('b');  // b는 출력되지않음 왜 ? (위 설명)
}

  console.log(sum(2, 4)); //각각의 입력값(2, 4)을 argument라고 한다. 한글로 "인자"라고 한다.
