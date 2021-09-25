//singlequote 가능
let myName:string = 'Kuma'

//doublequote 가능
myName = "KuMA"

//ES6부터는 Template String이라는 기능이 나온다.
// 행에 걸쳐있거나, 표현식을 넣을 수 있는 문자열
// 이 문자열은 backtick(=bakcquote)기호에 둘러쌓여있습니다.
// 포함된 표현식은 `${expr}`와 같은 형태로 사용됩니다.

let fullName:string = `Kuma Do`

let age:number = 27
let sentence:string = `Hello, My name is ${fullName} I'll be ${age +1}years old next month`
console.log(sentence)
