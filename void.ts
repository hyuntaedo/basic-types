function returnVoid(message:string) {
    console.log(message)
    return 
}
// retunVoid 함수에 returnType이 추론이 된다.
// function returnVoid(message: string): void

const r = returnVoid('return이없다.') // const r: void