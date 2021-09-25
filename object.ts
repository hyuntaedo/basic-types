// create by object literal
const person1 = {name:'kuma',age:27}
// person1 is not 'object' type
// perosn1 is {name:string,age:number}라는 값(타입)으로 나온다.(premitive타입이 아님)

//create by Ojbect.create
const person2 = Object.create({name:'Kuma',age:27}) // obejct literal을 써야지 object객체가 생성이 된다.
//typescript 내장타입에 들어가 있다.
// (method) ObjectConstructor.create(o: object | null): any (+1 overload)

//object -> primitive type이 아닌것을 나타내고 싶을 때 사용하는 타입
// non-primitive type (not number, string, boolean, bigint, symbol, null or undefined)