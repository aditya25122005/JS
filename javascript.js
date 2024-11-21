// let abc=12;
// console.log(abc);

//numbers
// let a=10;
// let b=10.15;
// let c=+Infinity;
// let d=-Infinity;
// console.log(a, b, c, d);

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));


//String --> 3 way to define
//  ''
//  ""
//  ``
//---------------------------------------------------------------------
// let a='aditya';
// let b="maheshwari";
// let c=`adi`;
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
//--------------------------------------------------------------------

//concatenation

// let naam="aditya";
// let kaam="time pass";
// let state="UP";

// let out='hi I am ' + naam+' My job is to do ' +kaam+ ' and I put up in ' +state;
// console.log(out);


//string template literals

// let out2= `hi I am  ${naam} My job is to do ${kaam} and I put up in  ${state}`;
// console.log(out2);


//-----------------------------------------------------------------------

//mumbers

// let a=5;
// let b=6;
// console.log(6%5);
// console.log(5/6); 
// console.log(100**10);

//PEMDAS

// let a=true==1;
// console.log(a);
//== general equality
//=== strict equality

// let a=10;
// console.log(a==="10");   //datatype is checked
// console.log(a=="10");    // datatype is not checked

// let b=1==true;
// console.log(b);  //true

// let c=1==false;
// console.log(c);

// let d=1==="10";
// console.log(d);

// let e=20=="20";
// console.log(e);
// let a=1;
// let b=10;
// if(a==10){
//     console.log("I am 10");
// }
// else if(b==10){
//     console.log("b is 10");
// }
// else{
//     console.log("not");
// }
// let agree=prompt("Enter your age");
// console.log(agree);
//
// let num=prompt("Enter a number:");
// if(num<18){
//     console.log("try next time(jee wale log)");
// }
// else if(num>=18 && num <=25){
//     console.log("padhne ki umr");
// }
// else{
//     console.log("You are aged");
// }
// let marks=50;

// if(marks>=33 || attendance>=75){
//     console.log("pappu pass");
// }
// else{
//     console.log("pappu fail");
// }
// loops: for while do while ---------------------------------

// for(let i=0;i<=10;i++){
//     console.log(i*i);
// }

// let j=0;
// while(j<=10){
//     console.log(j);
//     j++;
// }

// let k=0;
// do{              // do while loop runs atleast once
//     console.log(k);
//     k++;
    
// }
// while(k<=10);
//array_________________________________________________________________________________________________________________________________________
//collection of  data(similar or dissimilar)  Heterogenous
//ordered
// let arr=[2,3,4,1,5];
// console.log(typeof(arr));
// console.log(arr[2]);

// let arr2=["Aditya","Maheshwari",19,"Btech",3];
// console.log(arr2);

// let arr2d=[["Adi",19],["abhay",18],["abc",0,[1,2,3,4,5]]];
// console.log(arr2d);
// console.log(arr2d[0][1]);
// console.log(arr2d[1]);
// console.log(arr2d[2][2][3]);
// --------------------------------------------------------------------------------------------------------------------------------------------------------
// key : value pair
// let obj={  //collection of properties
// name: "Aditya",
// age:19,
// fav_color:"pink",
// isMale:"true"

// }

// console.log(obj);
// console.log(obj["fav_color"]);  // yaha string kyo likhna pad raha hai
// console.log(obj.isMale);
// console.log(obj.name);
//-------------------------------------------------------------------------------------------------------------------------------------------------
// let person={
//     name:"aditya",
//     age:20,
//     favColor:"pink"
// }
// Object.freeze(person);
// // console.log(person.name);
// // console.log(person.favColor);
// // console.log(person.age);

// person.favColor="saffron";
// // console.log(person.favColor);
// delete person.age;

// // person.ismale=true;
// console.log(person);

// let person={
//     name:"aditya",
//     age:20,              // these 3 are properties
//     favColor:"pink",
//     greet: function(){
//         console.log("hello"); //method
//     }
// }

// function f1(){


//    console.log("Jai Shri Ram");
//     return "returned";
// }
// console.log(f1());
// f1();
// f1();
// f1();
// f1();
//------------------------------------------------------------------------------------------------------------------------------------------
// function sunio(x,y) {
//     console.log(y);
//     return y;
// }
// console.log(sunio(10,"Ram"),"y");

// function f1(x,y){
//     return x+y;
    
// }
// console.log(f1(0.2,0.3));
// console.log(0.1 + 0.3);

// function sunio(x=100, y=200){
//     console.log(x);
//     console.log(y);
//     console.log(x+y);
// }
// sunio(50)  //

// let person={
//     naam:"mitthu don",
//     kaam:"juice pilana",
//     profession: "boxing",
//     greet: function mitthu(){
//         console.log(`ye gareeb ---`);
//     }
// }
// console.log(person.kaam);
// console.log(person.greet());

// let person={
//     naam:"mitthu don",
//     kaam:"juice pilana",
//     profession: "boxing",
//     greet: function(){
//         console.log(`hello from ${this.naam}`);
//     }
// }
// person.greet();
//-----------------------------------------------------------------------------------------------------------------
//null vs undefined
// let start;
// let start1=null;
// console.log(start);
// console.log(start1);

// let email;
//login->
// email="abc@gmail.com";
//logout->
// email=null;
// console.log(email);


// let arr=[10,20,30,40];

// for(let item of arr){
//     console.log(item);
// }


// let obj={
//     a: "10",
//     b: 20,
//     c:50

// }
// for(let item in obj){
//     // console.log(item);
//     console.log(obj[item]);
// }
//--------------------------------------------------------------------------------------------------------------------------------------------
// var a=10;
// var a="sam";  //redeclaration
// a=true;
// console.log(a);

// let a=10;

// console.log(a);

//1 memory creation phase.
//2 
// 3 MCP runs when zero line of code is executed That is, that is before the CEP phase. That is before the CEP with the phase view them The role of MCP is to allocate. on subpoint. No support. OK. Memory Bella to all the variables. to all the variables Seconds or point to all the functions. to all the variables to all the functions. 
//4the role of cep is to execute after mcp and to run the code line by line//Some point
//5 all the js code is getting executed because of call stack  GEC is actually running inside the call stack
//6 whenever a function executes a new context is created is same as that name of the function.
//7 whenever GEC is created along with that global object(window) is also created.

// var a=100;

// console.log(a);

// function abc(){
//     console.log("I am adi");
// }
// abc();

var a=100;
function abc(){
    var b=200;
    console.log(b);
    function lol(){
        var c=300;
        console.log(c);
    }
    lol()
}

console.log(a);
abc();
