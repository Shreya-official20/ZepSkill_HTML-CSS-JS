let dolphins = {
    s1: 96,
    s2: 108,
    s3: 89
}
let koalas = {
    s1: 88,
    s2: 91,
    s3: 110
}

// 1
let dAvg = (dolphins.s1 + dolphins.s2 + dolphins.s3)/3;
let kAvg = (koalas.s1 + koalas.s2 + koalas.s3)/3;

// 2
if(dAvg > kAvg){
    console.log("Dolphins is the winner");
} else if(kAvg > dAvg){
    console.log("Koalas is the winner");
} else {
    console.log("Draw!");
}


// 3
if(dAvg > kAvg && dAvg >= 100){
    console.log("Dolhpins is the winner");
} else if (kAvg > dAvg && kAvg >= 100){
    console.log("Koalas is the winner");
} else {
   // 4
   if(dAvg === kAvg && dAvg>=100 && kAvg>=100){
    console.log("Draw!");
   } else {
    console.log("No one wins the trophy!");
   }
}