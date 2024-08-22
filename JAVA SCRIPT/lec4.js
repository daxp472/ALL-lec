// let num = 6;
// let count = 0;

// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         count++;
//     }
// }

// if (count == 2) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }




// for(var i=1; i<=5; i++){
// let string = ''
//     for(var j=1; j<=i; j++){
//         string=string+j;
//     }console.log(string)
// }




// A = ["a","b","c","d","e","f"]

// row = 5

// for(var i=0; i<= row; i++){
//     let string = ''
//         for(let j=0; j<=i; j++){
//             string +=A[i];
//         }console.log(string)
//     }
    
    



// A = ["a","b","c","d","e","f"]

// row = 5;

// for(i=0; i<row; i++){
//   let  abc = ' '
//     for(j=0; j<=i; j++)
//        abc += A[j]
//         console.log(abc)
// }




// A = ["a","b","c","d","e","f"]

// row =4 ;

// for(i=row; i>=0; i--){
//   let  abc = ' '
//     for(j=0; j<=i; j++)
//        abc += A[i]
//         console.log(abc)

// }





rows = 10
for (let i = 65; i <= i+rows; i++) {
        let stars = '';
        for (let j = 65 ; j <= j+rows; j++) {
            let a = String.fromCharCode(i)
           
            stars += a;
        
        
    }console.log(stars);
}



