//ECMAScript2015의 Symbol입니다.
// new Symbol로 사용할 수 없다.
// Symbol을 함수로 사용해서 symbol타입을 만들어 낼 수 있다.
console.log(Symbol('foo') === Symbol('foo'))
//앞과 뒤가 같은지 확인
// -> 같은 함수이고 같은 인자를 넣었지만 다른 심볼이다.

//어디에서 사용하는가?
// 프리미티브 타입의 값을 담아서 사용합니다.
// 고유하고 수정불가능한값으로 만들어 줍니다.
// 그래서 주로 접근을 제어하는데 쓰는 경우가 많습니다.

const sym = Symbol()
//여기 sym이 밑의 obj의 sym으로 들어감
const obj = {
    [sym]:"value"
}
obj[sym] //접근이 가능(필요한 경우에만 허락)
