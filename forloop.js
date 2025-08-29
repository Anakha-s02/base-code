// for(let i=1; i<=3;i++){
//     console.log('Anakha');
// }

// for(let i=5; i<6;i++){
//     console.log('Anakha');
// }


// for(let i=1; i<=100;i++){
//     console.log(i);
// }

// for(let i=100; i>=1;i--){
//     console.log(i);
// }


// for(let i=100; i>=1;i-=2){
//     console.log(i);
// }

// for(let i=99; i>=1;i-=2){
//     console.log(i);
// }


// for(let i= 0;i<=100;i=i+1){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for(let i= 0;i<=100;i=i+1){
//     if(i%2==0 && i%3==0){
//         console.log(i)
//     }
// }

// for(let i= 0;i<=100;i=i+1){
//     if(i%2==0 || i%3==0){
//         console.log(i)
//     }
// }.


// let sum=0
// for(let i=1;i<=10;i++){
// sum=sum+i
// }
//     console.log(sum)


// let sum=0
// for(i=0;i<=100;i=i+2){
//     if(i%2==0)
//         sum=sum+i
// }
// console.log('sum of even numbers', sum)

// let sum=0
// for(i=1;i<=99;i=i+2){
//     if(i%2==1)
//         sum=sum+i
// }
// console.log('sum of odd numbers', sum)

// let sum=0
// for(i=0;i<=5;i++){
//     sum+=i
// }
// console.log('Sum of first 5 natural numbers' , sum)


// for(i=1;i<=10;i++){
//     console.log(i)
// }


// for(i=20;i>=1;i--){
//     console.log(i)
// }

// for(i=1;i<=10;i++){
// console.log(5 * i)
// }

// for(i=1;i<=100;i++){
//     if(i%3==0 && i%5==0)
// console.log(i)
// }

// for(i=1;i<=50;i++){
//     if(i%3==0 || i%7==0)
// console.log(i)
// }

// for(i=1;i<=50;i++){
//     if(i%2==1 && i%3==1)
// console.log(i)
// }

// for(i=0;i<=100;i+=2){
//     if(i%10!==0)
// console.log(i)
// }

// for(i=1;i<=50;i++){
//     if(i%2==0 || i%3==0)
// console.log(i)
// }


// let count= 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3===0 || i % 5===0) {
//         count=count+1;
//         console.log(i)
//     }
// }
// console.log("Count:", count);

// let sum=0
// for(i=1;i<=100;i++)
//     if(i%2==1){
//         sum+=i
//     }
//     console.log('sum of odd numbers from 1 to 100 is',sum)


// for (let i = 1; i <= 100; i++) {
//     if (i%2!==0 && i % 3!==0 && i % 5!==0 ) {
//         console.log(i)
//     }
// }



// for(i=1;i<=5;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i+"*"+ j+ "="+(i*j));
//     }
//     console.log("")
// }



// let count=0
// for(let num=2;count<10;num++){
//     let isPrime=true//assumes num is prime
// //check if num is divisible by any number from 2 to num-1
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if (num%i==0){
//             isPrime=false// not a prime if divisible
//             break;
//         }
//     }
//     //if num is prime...print num & increase the count upto 10
//     if(isPrime){
//         console.log(num)
//         count++
//     }
// }


// let sumEven=0
// let sumOdd=0
// let number=[5,6,7,8]
// for(let i=0;i<number.length;i++){
//     if(number[i]%2==0){
//         sumEven=sumEven + number[i]
//     }
//     else{
//         sumOdd=sumOdd+number[i]
//     }
// }
// console.log('sum of even number',sumEven)
// console.log('sum of odd numbers', sumOdd)


let countEven=0
let countOdd=0
let number=[5,6,7,8]
for(let i=0;i<=number.length;i++){
    // if(number[i]%2==0){
    //     countEven+=1
    // }
    // else{
    //     countOdd+=1
    // }
    console.log(number[i])
}
// console.log('Count of even numbers = ',countEven)
// console.log('Count of odd numbers = ', countOdd)





