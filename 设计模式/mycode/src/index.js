// 一个简单的 demo
@testDec
class Demo {
  // ...
}

function testDec(target) {
  target.isDec = true;
}
alert(Demo.isDec) // true