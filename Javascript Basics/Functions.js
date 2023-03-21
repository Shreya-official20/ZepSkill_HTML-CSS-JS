// Addition using function
function add(a, b){
    const c=a+b;
    console.log(c);
}
add(1, 2);

// largest of 3 nos
function largerNumber(num1, num2, num3){
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
function range(x){
    if (x >= 1 && x <= 100) {
        console.log("In range");
      } else {
        console.log("Not in range");
      }
}
range(44);

// number is even or odd
function evenOdd(num){
    if(num % 2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
evenOdd(3);

// return square of number
function square(num){
    return num / (1 / num);
}
console.log(square(6));

// convert celsius to fahrenheit >> °F = °C * 9/5 + 32

function celsiusFahrenheit(C){
    let F = C * 9/5 + 32;
    return F;
}
console.log(celsiusFahrenheit(30));

// area of rectangle >> A=wl

function area(w, l){
    let A=w*l;
    return A;
}
console.log(area(4, 5));

// area & perimeter of circle >> perimeter = 2 * Math.PI * radius, area = Math.PI * radius * radius
function areaPerimeter(r){
    return{
        area: (Math.PI * r * r),
        perimeter: (2 * Math.PI * radius),
};
}
console.log(areaPerimeter(5).area);
console.log(areaPerimeter(5).perimeter);

// check if 2 nos are equal
function checkEquals(a,b){
    if(a === b){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkEquals(2,3));