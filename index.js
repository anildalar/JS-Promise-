console.log("Hello GM");

//Now lets create a simple JS Class

//.1 Function Defination
function myFunction(){//camleCase
    console.log('Hello form MyFunctions1111');
}

//2. Function calling
myFunction();

class MyClass{  //PascalCase
    //1. Property

    //2. Constructor


    //3. Method
    myfunc(){ // 1. Defining
        console.log('Hello from myfunction');
    }
    log(){
        console.log('Hello from console.log')
    }

}

//You have to create object/instance of the class

//let object = new ClassName();
let object = new MyClass();

let console1 = new MyClass();

console1.log()

//object.method();
object.myfunc();


let x = function anil(){ //HOF
    //
}
x();



let po = new Promise((resolve, reject) => {
    //Producing Code
    setTimeout(()=>{
        resolve('OK'); // 'OK' actual argument
    },3000);
});


//Consuming code

//Promise object chain
po.then((d)=>{
    console.log('then block ',d);
}).then().then().catch((e)=>{
    console.log('catch block ', e);
}).finally((all)=>{
    console.log('All ',all)
});

