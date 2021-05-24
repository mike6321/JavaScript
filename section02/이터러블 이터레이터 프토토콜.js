const log = console.log;

/**
 * Array를 통해 알아보기
 * */

const arr = [1, 2, 3];
//arr[Symbol.iterator] = null; //TypeError: arr is not iterable
for (const a of arr) {
    log(a);
}
/**
 * Set을 통해 알아보기
 * */
const set = new Set([1, 2, 3]);
for (const a of set) {
    log(a);
}

/**
 * Map을 통해 알아보기
 * */
const map = new Map([['a', 1],['b', 2],['c', 3]]);
for (const a of set) {
    log(a);
}


/**
 * 개요
 *
 * 이터러블/이터레이터 프로토콜
 * - 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
 * - 이터레이터 : { value, done } 객체를 리턴하는 next() 를 가진 값
 * - 이터러블/이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록 규약
 * */

log(set[0]); // 이렇게 조회가 되지 않는다.
log(map[0]); // 이렇게 조회가 되지 않는다.

log('arr Symbol.iterator : ' + arr[Symbol.iterator]);
log('set Symbol.iterator : ' + set[Symbol.iterator]);
log('map Symbol.iterator : ' + map[Symbol.iterator]);

//무엇인가 가지고 있음을 유추해 볼 수 있다.

let iterator = arr[Symbol.iterator]();
log(iterator.next());
log(iterator.next());
log(iterator.next());
log(iterator.next());
// { value: 1, done: false } -> value와 done을 리턴한다.
// { value: 2, done: false } -> value와 done을 리턴한다.
// { value: 3, done: false } -> value와 done을 리턴한다.
// { value: undefined, done: true }


//동일한 맥락
let setIterator = set[Symbol.iterator]();
log(setIterator.next());

/**
 * map은 조금 다르다!
 * Map Iterator -> Symbol.iterator
 * Map Entries -> Symbol.iterator
 *
 * 이런식으로 한번 거쳐서 Symbol.iterator로 향하게 할 수 있다.
 * */
log(map.keys());
log(map.values());
log(map.entries());

let mapIterator = map[Symbol.iterator]();
log(mapIterator.next());

//응용1.) 키만 뽑기
for (const a of map.keys()) {
    log(a);
}
//응용2.) 값만 뽑기
for (const a of map.values()) {
    log(a);
}