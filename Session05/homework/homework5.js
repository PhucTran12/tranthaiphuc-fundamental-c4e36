// // LT
// +)The first reason is reusability. Once a function is defined, it can be used over and over and over again.

// Another aspect of reusability is that a single function can be used in several different (and separate) programs.

// +)The second reason is abstraction. In order to use a particular function you need to know the following things:

// The name of the function;
// What the function does;
// What arguments you must give to the function; and
// What kind of result the function returns.
// If you just want to use the function in your program, you don't have to know how it works inside! You don't have to understand anything about what goes on inside the function.

// // Turtle exercise
// 1. chưa xong

// function printout(Hello world){
// for ( let i = 0; i < 3; i ++)
// console.log("Hello world")
// }

// 2.)
// let a = Number(prompt("Enter the first number"))
// let b = Number(prompt("Enter the second number"))
// function sumof(a,b){
//     return a+b
// }
// console.log(a+b)

// 3,
// function square(l, c) {
//     color(c)
//     for (i = 0; i < 4; i++) {
//         fd(l)
//         rt(90)
//     }
// }
// square(100, "blue")

// 4,
// clear()
// function square(l, c) {
//     color(c)
//     for (i = 0; i < 4; i++) {
//         fd(l)
//         rt(90)
//     }
// }
//  for (let i = 0; i  < 30; i ++){

//                 square(i * 5, "red")

//         lt(17)

// penup()
//            fd(i * 2)
//            pendown()

// }

// 5,
// clear()
// function draw_star(length) {
//   rt(162)
//   for ( i=0; i<5; i++ ){
//     fd(length)
//     rt(144)
//   }
// }
// draw_star(200)

// 6,
// function remove_dollar_sign(s) {
//     s2 = s.replace(/[$]/g, "");
//     return s2
// }
// var n = prompt("Enter a string which include $");
// console.log(remove_dollar_sign(n));

// 7,
// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up") {
//     console.log("Your function is correct")
// } else {
//     console.log("Oops, there's a bug")
// }

// 8,
// function get_even_list(l) {
//     var l2 = [];
//     l.forEach((number, index) => {
//         if (number % 2 === 0) {
//             l2.push(l[index])
//         }
//     });
//     return l2
// }
// var even_list = get_even_list([1, -4, -1, 10])
// console.log(even_list);

// 9,
// even_list = get_even_list([1, 2, 5, 9, -10, 6])

// if (even_list == [2, -10, 6]){
//    print("Your function is correct")};
// else{
//    console.log("Ooops, bugs detected")}

// 10,
// function is_inside([x, y], [x2, y2, w, h]) {
//     if (x >= x2 && y >= y2 && x <= (x2 + w) && y <= (y2 + h)) {
//         console.log("The point is inside a rectangle!")
//     } else {
//         console.log("The point isn't inside a rectangle!")
//     }
// }
