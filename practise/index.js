// let number = prompt("Enter a number: ")
// if (number % 5 === 0){
// console.log("Multiple of 5")
// }
// else{
//     console.log("Not a Multiple of 5")
// }

// let score = prompt('Enter your scroe');

// if (score >=90 || score==100){
//     console.log('A')
// }
// else if(score >=70 || score==89 ){
//     console.log('B')
// }
// else if(score >=60 || score ==69 ){
//     console.log('C')
// }
// else if(score >=50 || score ==59 ){
//     console.log('D')
// }
// else if(score <=49){
//     console.log('F')
// }

// for (let i = 1; i<=10; i++){
//     console.log( i + " Hello World")
// }

// let i = 20;
// while(i <=10){
//     console.log(i)
//     i++;
// }
// let i = 20
// do {
//     console.log(i)
//     i++
// } while (i<=10);
// for of loop

// let str = "Aarav Mavi"
// let size = 0
// for(let i of str){
//     console.log('i= '+ i )
//     size++;
// }
// console.log(size)

// let object = {
//     name: "Aarav",
//     class: 'VIII-A'
// }
// console.log(object)

// for (let i in object){
//     console.log(i, 'value= ', object[i])
// }

// for (let num = 0; num <=100; num++){
//     if (num % 2 === 0){
//         console.log(num)
//     }
// }

const guess = prompt("Enter your guessing number ");
let guess_number = prompt('Enter a number');
while (guess_number != guess){
    guess_number = prompt('Enter again');
    console.log('try again')
}
console.log('You won!')
