// Work in this directory: src

//N1
let message = "Hello";
console.log(message);

//N2
// "5" არის სტრინგის დატა ტიპი ხოლო 5 არის number ანუ რიცსვის დატა ტიპი

//N3
let num1 = 14;
console.log(num1 > 9);

//N4
let isTrue = true;
console.log(isTrue);

//N5
//შედარების ოპერატორები როგორებიცაა: ==, ===, !=, >, <, >=, <= და ლოგიკური ოპერატორები: &&, ||, !

//N6
let hello = "Hello";
console.log(hello.toUpperCase());

//N7
let world = "World";
console.log(world.toLowerCase());

//N8
// "Hello" დაბრუნდება, არ შეიცვლის.

//N9
// value text-ის იქნება undefined

//N10
let text = 'Hello';
console.log(text.toLowerCase()); // toLowercase არის case-sensitivity შესაბამისად toLowerCase უნდა ყოფილიყო

//N11
let age = Number(prompt('How old are you?')); //ჩვეულებრივი Prompt აბრუნებს სტრინგს რაც არ გვაწყობს
let nextAge = age + 1;
console.log(`Next year you will be ${nextAge}`);

//N12
let name = prompt('What is your name?');
let age1 = Number(prompt('How old are you?'));
let isInSixties = (age1 >= 60 && age1 < 70);
console.log(`${name} is in sixties: ${isInSixties}`);

//N13
let x = 5;
console.log(x++); // 5
console.log(x); // 6 რადგან დალოგილია უკვე როგორც ექვსად

//N14
let y = 5;
console.log(++y); // 6
console.log(y);   // 6

//N15
//x++ წევს x ის value-ს ერთით მაღლა, მაგრამ გამოყენების მერე ემატება 1
//x-- წევს x ის value-ს ერთით დაბლა, მაგრამ გამოყენების მერე აკლდება 1

//N16
//++x  წევს x ის value-ს ერთით მაღლა პირდაპირ
//x++ იყენებს x ის value-ს ჯერ და მერე აწევს ერთით მაღლა x-ს

//N17
//undefined

//N18
let a = 5;
let b = '5';
console.log(a == b); // true

//N19
let a1 = 3;
let b1 = 11;
console.log(a1 != b1); // true

//N20
let str = "Number: ";
let num = 40;
console.log(str + num); // "Number: 40" სტრინგში ექცევა

