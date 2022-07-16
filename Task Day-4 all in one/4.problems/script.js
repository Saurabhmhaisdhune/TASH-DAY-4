//Task-1
//1)
var variable1;
var variable2;
var variable3;
var variable4;
//2)
var myvar= 1;
console.log(myvar);
//3)
var FirstName;
var LastName;
var MaritalStatus;
var Country;
var Age;
//4)
var FirstName,LastName,MaritalStatus,Country,Age;
//5)
var str=[{
          "FirstName":"shubham",
          "lastname":"patil",
          "age":25,
          "address":"nashik"
}];
console.log(str);

var boolean=true;
console.log(boolean);

var undefined;
console.log(undefined);

var value= null;
console.log(value);
//6)
//parseint
var num1=22.22;
var num2=parseInt(num1);
console.log(num2);
//number
var num3=66.55;
var num4=Number(num3);
console.log(num4);

//7)

//task-2
//1)Square of a number
var number = 2;
var number1= number*number;
console.log(number1);
//2)Swapping 2 numbers
let a = 5, b = 6;
[a, b] = [b, a];
console.log(a,b);
//3)Addition of 3 numbers
let aa=5,bb=6,cc=9;
let sum=aa+bb+cc;
console.log(sum);
//4)Celsius to Fahrenheit conversion
let celsius=25;
let fehrenheit=(celsius*(9/5)+32);
console.log(fehrenheit);
//5)Meter to miles
let meter = 36;  
 let miles=(meter*0.000621371);  
 console.log(miles);
 //6)Pounds to kg
 let pounds = 36;  
 let kg=(pounds*0.453592);  
 console.log(kg); 
 //7)Calculate Batting Average
 let runs = 36;  
 let average=(runs*200);  
 console.log(average); 
 //8)Calculate five test scores and print their average
 let test1 = 36;
 let test2 = 45;  
 let test3 = 23;  
 let test4 = 55;  
 let test5 = 66;
 let total=test1+test2+test3+test4+test5;  
 let average1=(total/5);  
 console.log(average1); 
 //9)Power of any number x ^ y.
 let x=2,y=3;
 let z=Math.pow(x,y);
 console.log(z);
 //10)Calculate Simple Interest
 let principle=1000000;
 let rate=5.3;
 let duration=5;
 let SI=(principle*(1+(duration*rate)))-principle;
 console.log(SI);
//11)Calculate area of an equilateral triangle
 let side =12;  
 let area=((1.73/4)*(side*side));  
 console.log(area); 
//20)Program To Calculate CGPA
 let English = 9.1,
 Hindi = 8.5,
 Maths = 9.5, 
 Science =9.6,  
 SocialStudy = 8.6;
 CGPA = (English+Hindi+Maths+Science+SocialStudy)/5.0;  
 CGPAper = 9.5*CGPA; 
 console.log(CGPAper);
//17)Given their radius of a circle and find its diameter, circumference and area.
 let radius=11;
 console.log("Diameter of circle is=",2*radius);
 console.log("Circumference of circle is=",2*3.14*radius);
 console.log("Area of circle is=",3.14*radius*radius);


//Task 3: Simple Programs todo for Condition , Looping and Arrays
//1)Write a loop that makes seven calls to console.log to output the following triangle:
 for(let SB="#";SB.length<8;SB+="#")
    console.log(SB);
// next
//1)
var myarray=[11,22,33,44,55];
console.log(myarray.length);


var food=[ "coconut oil", "green tea", "mustard", "olive oil", "almonds", "apples", "chickpeas", "dried plums", "prunes", "leafy greens", "lentils", "peanut butter", "pistachios", "raisins", "yogurt", "eggs", "cod", "rye", "tofu"];
console.log(food[4]);
console.log(food.length);

