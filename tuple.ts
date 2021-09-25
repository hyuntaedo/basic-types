let x : [string,number] //tuple type
// 순서 타입 길이가 전부 맞아야한다.
//ex
x = ['hello',39]
// x = [39,'hello'] // 이것은 에러가 난다
// x[3] = 'world' // error -> not assignable type is undefined(값을 할당할 수 없게 undefined라고 뜬다.)
// x[2] // lenght error
const person:[string,number] = ['Kuma',27] // 이렇게하면 에러가 나지 않는다.
const [first,second] = person // destructuring(분해할당)
