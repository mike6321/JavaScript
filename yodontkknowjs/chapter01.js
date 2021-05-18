console.log(typeof undefined === "undefined");
console.log(typeof true === "boolean");
console.log(typeof 42 === "number");
console.log(typeof "42" === "string");
console.log(typeof { life : 42} === "object");
console.log(typeof Symbol() === "symbol");

/*
null은 무슨타입일까?
*/
console.log(typeof null === "object");
console.log('null : ' + null); // null
console.log('null : ' + !null); // true
console.log('null : ' + !(!null)) // false

/*
함수는 하나의 타입으로 간주 (function 타입)
*/
typeof function A() {} === "function"
console.log(typeof function A() {} === "function");
console.log(typeof function A() {});


/**
 * 값이 없는 vs 선언되지 않은
 */
console.log('값이 없는 vs 선언되지 않은 : ' + typeof a); // 선언되지 않았음에도 불구하고 오류가 나지 않는다. 

