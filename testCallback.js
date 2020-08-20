function area(n){
    return n*n;
}

function test(callbackfunction){
    return callbackfunction(20);
}

let x = test(area);
console.log(x);