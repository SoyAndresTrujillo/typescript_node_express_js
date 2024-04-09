console.time('all')

console.time('sum')
let sum: number = 0;

for (let index = 0; index < 10000000; index++) {
  sum++
}
console.timeEnd('sum')

console.time('async')
test()
console.timeEnd('async')

console.timeEnd('all')

function test(): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('promise')
      resolve();
    }, 10000)
  })
}