function returnAny(message:any): any {
    console.log(message)
}
// message:any으로 지정하면 any으로 쓸 수 있다.

const any1 = returnAny('리턴은 아무거나')
// 결과물이 규정이 안되어있고 무엇이든 들어온 상태에서 할수 있는것이 있다. string이면 string, number아면 number가 할 수 있는일
// any가 지정이되면 제약을 주지 않는다.
any1.toString() // error가 아님 (any1이 any이기 때문)

// any를 쓸 수 밖에 없는곳
// 어떤 타입이여도 상관없는 타입
// 이걸 최대한 쓰지 않는게 핵심
// 외냐하면 컴파일 타임에서 타입체크가 정상적으로 이루어 지지 않기때문
// 그래서 compile옵션중에서는 any를 써야하는데 쓰지않으면 오류를 뱉도록 하는 옵션이 있다.(nolmplicitAny)


let looselyType: any ={}
// const d = looselyType.a.b.c.d 이런식으로 any가 객체를 통해 전파된다.

function leakingAny(obj:any) {
    const a:number = obj.num // any => :number 라는 타입을 지정해줘 누수를 막는다.
    const b = a + 1 // b가 any가 됨
    return b
}
const c = leakingAny({num:0})