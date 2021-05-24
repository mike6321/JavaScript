const log = console.log;

const iterable = {
  [Symbol.iterator]() {
      let i = 3;
      return {
          next() {
              return i == 0 ? {done: true} : { value: i--, done: false }
          },
          [Symbol.iterator]() {
              return this;
          }
      }
  }
};
let iterator = iterable[Symbol.iterator]();
log(iterator.next());
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());

for (const a of iterator) {
    log(a);
}