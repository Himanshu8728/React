//Reverse String
let str = 'text_string'
let ReverseString = str.split('').reverse().join('')
//console.log(ReverseString)

function IsPalindrome(str){
    let Reverse = str.split('').reverse().join('')
    if(str==Reverse){
        console.log('true')
    }else{
        console.log('false')
    }
}

//Palindrome or Not
//IsPalindrome('LOL')


//Maximum number in array
let Arr = [1, 2, 5, 4, 6, 7, 2]
let MaximumNumber = Arr.sort().reverse()
//console.log(MaximumNumber[0])

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
//console.log(points)

const Numbers = [1, 23, 56, 45, 75, 34]
const maxNumber = Math.max(...Numbers)
//console.log(maxNumber)

//Remove Dublicate
const myArray = [1, 2, 3, 3, 4, 56, 4, 2, 3]
let set = new Set(myArray)
console.log(set)


