
// removing 1st element of array == shift

// arr = [1,2,3,4,5,6]
// arr.shift[]
// console.log(arr)


// adding value at starting of array == unshift

// arr = [1,2,3,4,5,6]
// arr.unshift(1);
// console.log(arr)


// Array value changing == [x] = new value

// arr = [1,2,3,4,5,6]
// arr[3] = 7;
// console.log(arr)



// Array length == arr.length

// arr = [1,2,3,4,5,6]
// let x = arr.length;
// console.log(x)



//  for deleting specif element from an array == delete arr[element index]

// arr = [1,2,3,4,5,6]
// delete arr[0]
// console.log(arr)




// merging two array == arr1.concat(arr2)
// if three array is there so concat(arr2,arr3)

// arr1 = [1,2,3,4,5,6]
// arr2 = ["a","b","c","d","e","f"]
// arr = arr1.concat(arr2)
// console.log(arr)




//  changeing one value of array to another valuue of array  ===  copywithin

// arr = [1,2,3,4,5,6]
// arr.copyWithin(3,1)
// console.log(arr)





// for reducing sub array and only printing one array  == .flat

// arr = [[1,2],[3,4],[5,6]]
// arr1 = arr.flat();
// console.log(arr1)





// multipling series type (writing a table )   .flatMap

// arr = [1,2,3,4,5,6]
// arr1 = arr.flatMap (x=> [x, x * 10])
// console.log(arr1)





// adding elements in the array with the specif details == splice 
// (1st digit represent index ) (2nd is for the how many element removing from those place)

// arr = [1,2,3,4,5,6]
// arr.splice(2,0 ,-1,-2)
// console.log(arr)




// 

arr = [1,2,3,4,5,6]
arr.splice(2,0 ,-1,-2)
console.log(arr)