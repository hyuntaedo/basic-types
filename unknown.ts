declare const maybe:unknown

// error unknown은 number에 바로 할당할 수 없다고 에러가 난다.
// 여기서 type guard를 사용해서 타입을 막아줘야지만 unknwon인 maybe를 사용할 수 있다.
if (maybe === true){
    const aBoolean:boolean = maybe 
    // true라서 가능
}

if (typeof maybe === 'string'){
    const aString:string = maybe
    // string이라서 가능
}
// typescript 3.0부터 지원
// any와 짝으로 typesafe한 타입
// any와 같이 아무거나 할당할 수 없다.
// 컴파일러가 타입을 추론할 수있게끔 타입의 유형을 좁히거나 타입을 확정해주지않으면 다른곳에 확정할수 없고 사용할 수 없다.
// unknown타입을 사용하면 runtime error를 줄일 수 있다.
// 사용전에 데이터 일부유형의 검사를하는 api에 사용가능

