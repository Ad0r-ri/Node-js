// var M = {
//   v:'v',
//   f:function(){
//     console.log(this.v);
//   }
// }

var part = require('./mpart.js');  // './' == 현재 디렉토리
console.log(part);
// M.f();
part.f();  //M.f();와 똑같이 동작함
