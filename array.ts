// array
// 원래 javascript에서 array는 객체
// 사용방법 Array<type> 타입[]

let list:number[] = [1,2,3,4,5] // 보통 이것을 쓴다.
let list2:Array<number> = [1,2,3,4,5] //jsx, tsx에서 충돌이날 수 있어 사용을 자제해야함

let list3:(number | string)[] = [1,2,3,4,5,'6'] // 타입을 union으로 묶어줄 수 있다.

