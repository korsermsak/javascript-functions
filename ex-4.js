// Start coding here
let calculator = [
    {add : (a,b) => {
        return a+b;
    }},
    {subtract : (a,b) =>{
        return a-b;
    }},
    {multipy : (a,b) =>{
        return a*b;
    }},
    {devide : (a,b) =>{
        return a/b;
    }},
    ];
let addResult = calculator[0].add(10,20);
console.log(addResult);

let devideResult = calculator[3].devide(3000,10)
console.log(devideResult);

