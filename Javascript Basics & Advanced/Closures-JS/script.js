// closures

// function x(){
//     var a = 20;
//     function y(){
//         console.log(a);
//     }
//     y();               
// }
// x();

function x(){
    var a = 20;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);     // this will return o/p: f y(){console.log(a);}

//... if we write 1000lines of codes here still functions remember, where they actually present 
z();                // this will return >> o/p: 20