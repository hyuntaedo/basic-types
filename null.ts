// let Myname:string = null // strict파일에서 설정하지않으면 쓰지 못한다.

// let u:undefined = null
let v:void = undefined //void는 타입으로만 설정해야한다.(undefined만 넣을 수 있다.)
let union: string|null = null // strict true이면 사용할 수 없다. "|" 은 유니온 타입
union = "Kuma"