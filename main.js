//function

myFun1=(a=10*25)=>a+10;
console.log(myFun1());

myFun2=(a=15*myFun1())=>a-56;
console.log(myFun2());

myFun3=(a=34-myFun2())=>a+60;
console.log(myFun3());

myFun4=(a=79+myFun3())=>a/10;
console.log(myFun4());

myFun5=(a=10*myFun4())=>a%2;
console.log(myFun5());

myFun6=(a=24/myFun5())=>a-16;
console.log(myFun6());

myFun7=(a=45%myFun6())=>a+23;
console.log(myFun7());

myFun8=(a=36+myFun7())=>a/23;
console.log(myFun8());

myFun9=(a=90*myFun8())=>a*45;
console.log(myFun9());

myFun10=(a=26/myFun9())=>a-56;
console.log(myFun10());