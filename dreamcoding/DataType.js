'use strict';

// 1. Variable

// let
let name = 'hello';
console.log(name);

name = 'junwoo';
console.log(name);


var age; // 호이스팅 적용
// var (don't ever use this!)
// 변수를 선언하기 전에도 값 할당 가능
// 호이스팅 : 어디에 선언되었는지 상관 없이 항상 제일 위로 선언을 끌어 올려주는 것
age = 4;

// block scope이 없다.
{
    var age2 = 1;
}
console.log(age2);




// 2. scope
let globalName = 'global name';
{
    let variableInBlockScope = 'variableInBlockScope';
    console.log(globalName);
    console.log(variableInBlockScope);
}
// console.log(variableInBlockScope);


// 3. Constants
// favor immutable data type always for a few reasons
const con = 4;
// con = 2;


// 4. Variable types
// primitive, single item : number, string, boolean, null, undifiened...
// object, box container
// function, first class function

const name1 = Symbol('junwoo');
const name2 = Symbol('junwoo');
console.log(name1 == name2);

const name3 = Symbol.for('junwoo');
const name4 = Symbol.for('junwoo');
console.log(name3 == name4);


// 5. Dynamic typing
// 자바스크립트는 런타임에 타입이 결정된다.
// 이러한 이유 때문에 부가적인 오류가 발생하기 때문에 TS가 탄생하였다.
let text = 'hello';
console.log(`value :  ${text}, type : ${typeof text}`);

text = 1;
console.log(`value :  ${text}, type : ${typeof text}`);

text = '7' + 4;
console.log(`value :  ${text}, type : ${typeof text}`);

text = '8' / '2';
console.log(`value :  ${text}, type : ${typeof text}`);
