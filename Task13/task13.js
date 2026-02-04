let grades=[];
let i;
for(i=0;i<5;i++){
  temp=prompt("Enter grade "+(i+1)+" ");
  grades.push(Number(temp));
}
let sum=0;

for(i=0;i<5;i++){
 sum+=grades[i];
}
let avg=sum/5;
if(avg>=90){
    console.log("Grade: A");
    console.log("Marks: "+avg);
}
else if(avg<=89 && avg>=80){
    console.log("Grade: B");
    console.log("Marks: "+avg);
}
else if(avg<=79 && avg>=70){
    console.log("Grade: C");
    console.log("Marks: "+avg);
}
else if(avg<=69 && avg>=60){
    console.log("Grade: D");
    console.log("Marks: "+avg);
}
else if(avg<=59 && avg>=50){
    console.log("Grade: E");
    console.log("Marks: "+avg);
}
else{
     console.log("Grade: F");
    console.log("Marks: "+avg);
}
