// // // console.log('hello word!');
// // alert('12345!');

// //---- string conversion
// //  

// //Baasic operators --remainder, exponentiation
// console.log( 5 % 2 );
// console.log( 5 ** 2 );
// console.log( 5 ** (1/2) );

// //--arithmetic operators :increment, strict equal, AND, OR, NOT
// let x = 4;
// let y = 6;
// console.log(++x);
// console.log(x++);
// console.log( 2 === '2');
// console.log(x < 6) && (y < 5);
// console.log( true || true);
// console.log( true &  true);
// console.log( true && false);
// console.log(!true);

// //--control sturctures: if, if else, if else...if else, 
// let num = 1;
// if (num > 0)
// {
//     console.log("this number is positive", num);
// }

// if (num < 0){
//     console.log("negative Number", num);
// }
// else{
//     console.log("positive number", num);
// }

// // let age = prompt("enter your age")
// // if (age > 35){
// //     alert("you are an adult");
// // }
// // else if(age > 18)
// // {
// //     alert("you're a youth");
// // }
// // else{
// //     alert("you are a child");
// // }

// for (i = 0; i <= 5; i++){
//     console.log("i love javascript");
// }
// for (i = 0; i <= 20; i++){
//     console.log(i);
// }

// //--while,do,break,continue
// let a = 1;
// while (a <= 10){
//     console.log(a);
//     a += 1;
// }

// do{
//     console.log(b);
//     b++;
// }while( b <= 20 );

let person = 'A';
switch(person){
    case 'A':
        console.log("gold");
        break;
    case 'B':
        console.log("silver");
        break;
    case 'C':
        console.log("bronze");
        break;
    default:
        console.log("unrecognized");
}
