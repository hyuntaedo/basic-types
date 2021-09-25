function error(message:string): never{
    //never => 아무것도 리턴되지 않는다는 뜻
    throw new Error(message) // throw하는 경우에대해서 never라는 키워드를 쓸 수 있음
}
function fail() {
    return error('failed')
}

function infiniteLoop(): never {
    //무한루프
    while(true) {
        // 무한루프
    }
}

//never 타입은 모든타입의 subtype이며 모든 타입에 할당할 수 있다.
// 하지만 never외에는 아무것도 할당할 수 없으며 any조차도 never에게 할당할 수 없다.
// 잘못된 타입을 넣는 실수를 막고자 할 때 많이 사용된다.

declare const a:string | number // 특정 타입이되도록 typeofguard를 칠 수 있다.

if (typeof a !== 'string') {
    a // never
}


