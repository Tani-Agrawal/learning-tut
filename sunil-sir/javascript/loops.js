//loops in js = Loops are used when you want to repeat a block of code multiple times without writing it again and again.
//types of loop
// for → when you know the count.
// while → when you don’t know how many times but condition-based.
// do...while → when you want it to run at least once.
// for...of → for arrays / strings.
// for...in → for objects.

//for loop
for (var i=0; i<10; i++){
    console.log("i is",i);
}

//do while loop
var j = 0;
do{
    console.log("j is",j);
    j++;
}
while(j < 10);


//while loop
var k = 0;
while(k<10){
    console.log("k is",k);
    k++;
}

//now loop with array

var students =["doremon", "sinchan", "tom", "jerry", "bheem", "nobita"];

for (var i=0; i<students.length ; i++){
    console.log("i is",i, "students is", students[i]);
}

// for each loop
var studentName =["doremon", "sinchan", "tom", "jerry", "bheem", "nobita"];

studentName.forEach((item, index)=>{
    console.log("studentName is", item, "index is", index);
})


//for of loop

for (const [index, item] of students.entries()) {
    console.log("students is", item, "index is now", index);
}
