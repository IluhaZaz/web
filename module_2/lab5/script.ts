//task 2, task 1 is below 2nd
function multiply(a: number, b: number): number {
    return a * b;
}


function divide(a: number, b: number): number {
    return a / b;
}


function pow(degree: number): Function {
    //power function for integer degrees
    return function(y: number): number {
        let res: number = 1;
        let operation;

        if(degree == 0)
            return 0;
        if(degree < 0)
            operation = divide;
        else
            operation = multiply;
        degree = Math.abs(degree);

        for(let i = 0; i < degree; ++i){
            res = operation(res, y);
        }
        return res;
    };
};
    
    let mul8: Function = pow(2);
    let mul9: Function = pow(-3);
    
    console.log(mul8(7));
    console.log(mul9(4));


//task 1
const data: number[] = [12, 23, 34, 45];

async function removeOddNumbers(array: number[]){

    for(let i = 0; i < array.length; ++i){
        if(array[i] % 2 == 1){
            console.log(`Deleted element: ${array[i]}`);
            array.splice(i, 1)
            await new Promise(resolve => setTimeout(resolve, 1000));
            --i;
        }
    }
    console.log(`Rest of array: ${array}`);
};

removeOddNumbers(data);
