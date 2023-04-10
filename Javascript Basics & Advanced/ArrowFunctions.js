// ARROW FUNCTION

// largest of 3 nos
let largerNumber = (num1, num2, num3) => {
    if(num1 >= num2 && num1 >= num3){
        larger = num1;
    }
    else if(num2 >= num1 && num2 >= num3){
        larger = num2;
    }
    else{
        larger = num3;
    }
    console.log("larger no:" + larger);
}
largerNumber(1, 6, 3);

    // number present in given range or not
let range = (x) => {
    if (x >= 1 && x <= 100) {
        console.log("In range");
      } else {
        console.log("Not in range");
      }
}
range(44);

// number is even or odd
let evenOdd = (num) => {
    if(num % 2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
evenOdd(3);

// return square of number
let square = (num) => num / (1 / num);
console.log(square(6));