var a = [1, "2", [3]];
console.log(a);

var a = [];
console.log(a.length);
a[0] = 1;
a[1] = "2";
a[2] = [ 3 ];
console.log(a.length);

var a = [];
a["13"] = 42; // 문자열 key값이 10진수 형태가 된다.
console.log(a.length); // 14


var a = [];
a["str"] = 15;
console.log(a.length); // 14
console.log(a.str);
console.log(a["str"]);


/**유사배열 */
function foo() {
    var arr = Array.prototype.slice.call(arguments);
    arr.push("woo");
    console.log(arr);
}

foo("jun");

/**문자열 */
console.log("***********문자열***********");
var a = "junwoo";
var b = ["j", "u", "n", "w", "o", "o"];

console.log(a.length);
console.log(b.length);

console.log(a.indexOf('w'));
console.log(b.indexOf('w'));

var c = a.concat("dev");
console.log(c);
var d = b.concat(["d", "e", "v"]);
console.log(d);

c = a.toUpperCase();
console.log(a === c);
b.push("!");

