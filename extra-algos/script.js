// function biggieSize(list) {
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] > 0) {
//             list[i] = "big";
//         }
//     }
//     return list;
// }

// console.log(biggieSize([-1,3,5,-5]));


// function countPositives(list) {
//     var count = 0;
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] > 0) {
//             count += 1;
//         }
//     }
//     list[list.length-1] = count;
//     return list;
// }

// console.log(countPositives([1,6,-4,-2,-7,2]));


// function sumTotal(list) {
//     var sum = 0;
//     for (let i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     return sum;
// }

// console.log(sumTotal([6,3,-2]));


// function findAverage(list) {
//     var sum = 0;
//     for (let i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     var average = sum/list.length;
//     return average;
// }

// console.log(findAverage([4,2,6,2]));


// function findLength(list) {
//     return list.length;
// }

// console.log(findLength([]));


// function findMinimum(list) {
//     if (list.length == 0) {
//         return false;
//     }
//     else {
//         var min = list[0];
//         for (let i = 0; i < list.length; i++) {
//             if (list[i] < min) {
//                 min = list[i];
//             }
//         }
//         return min;
//     }
// }

// console.log(findMinimum([]));


// function findMaximum(list) {
//     if (list.length == 0) {
//         return false;
//     }
//     else {
//         var max = list[0];
//         for (let i = 0; i < list.length; i++) {
//             if (list[i] > max) {
//                 max = list[i]
//             }
//         }
//         return max;
//     }
// }

// console.log(findMaximum([]));


// var dict = {
//     sumTotal: 0,
//     average: 0,
//     minumum: 0,
//     maximum: 0,
//     length: 0
// }

// function ultimateAnalysis(list) {
//     var sum = 0;
//     var max = list[0];
//     var min = list[0];
//     for (let i = 0; i < list.length; i++) {
//         sum += list[i];
//         if (list[i] > max) {
//             max = list[i]
//         }
//         if (list[i] < min) {
//             min = list[i]
//         }
//     }
//     dict["sumTotal"] = sum;
//     dict["average"] = (sum/list.length);
//     dict["minumum"] = min;
//     dict["maximum"] = max;
//     dict["length"] = list.length;
//     return dict;
// }

// console.log(ultimateAnalysis([37,2,1,-9]));

// reversing a list using a second list
// var newList = [];

// function reverseList(list) {
//     for (let i = list.length-1; i >= 0; i--) {
//         newList.push(list[i])
//     }
//     return newList;
// }

// console.log(reverseList([37,2,1,-9]));

// reverse a list without using a second list

function reverseList(list) {
    for (let i = 0; i < Math.floor(list.length / 2); i++) {
        [list[i], list[list.length - 1 - i]] = [list[list.length - 1 - i], list[i]];
    }
    return list;
}

console.log(reverseList([1,2,3,4,5]));