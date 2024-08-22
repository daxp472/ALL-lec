// 1-->

// let array = [1, 3, 5, 7, 9];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum); 






// 2-->


// function lar(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(lar([1, 5, 3, 9, 2]));





// 3-->

// let a = [3, 5, 1, 7, 9];
// let smallest = a[0];

// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[j] < smallest) {
//             smallest = a[j];
//         }
//     }
// }
// console.log(smallest); 




// 4--> 


// array = [5,2,9,1,5,6]
// let smallest = array[0];

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[j] < smallest) {
//             smallest = array[j];
//         }
//     }
// }console.log(smallest)




// 5-->

// function sortArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }return arr;
// }
// console.log(sortArray([5, 2, 9, 1, 5, 6]));




// 6-->

// reverseArray = [1, 2, 3, 4, 5]
// let temp = 0;

// for(i=0; i<reverseArray.length; i++){
//     for(j=reverseArray.length; j>=0; j++){
//         temp = reverseArray[i]
//         reverseArray[i] = reverseArray[j]
//     }
// }console.log(i)




// 7-->

// let a = [1,2,3,4,5,6,7,8,9]
// let b = [1,3,5,7,9]

// for(i=0; i<a.length; i++){
//     for(j=0; j<b.length; j++){
//         if(a[i]=b[j]){
//            console.log("YES")
//         }else{
//             console.log("No")
//         }
//     }
// }




// 8-->







// 9-->

a = [1, 2, 2, 3, 4, 4, 5]
let temp = 0;

for(i=0; i<a.length; i++){
    for(j=i; j<a.length; j++)
        temp = a[i]
        
    console.log(" ")
}



// 10-->



