var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);  // k8805
var i = 0;
while(i < members.length){
console.log('array loop', members[i]);
  i = i + 1;
}


var roles = {
  'programmer':'egoing',
  'designer' : 'k8805',
  'manager' : 'hoya'
}

console.log(roles.designer);  //k8805
console.log(roles['designer']);  //k8805  // 문자열로 이렇게 사용할 수도 있다.


for (var name in roles){
  console.log('object => ', name, 'value => ', roles[name]);
}
