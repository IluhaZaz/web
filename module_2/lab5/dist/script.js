var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//task 2, task 1 is below 2nd
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function pow(degree) {
    return function (y) {
        let res = 1;
        let operation;
        if (degree == 0)
            return 0;
        if (degree < 0)
            operation = divide;
        else
            operation = multiply;
        degree = Math.abs(degree);
        for (let i = 0; i < degree; ++i) {
            res = operation(res, y);
        }
        return res;
    };
}
;
let mul8 = pow(2);
let mul9 = pow(-3);
console.log(mul8(7));
console.log(mul9(4));
//task 1
const data = [12, 23, 34, 45];
function removeOddNumbers(array) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < array.length; ++i) {
            if (array[i] % 2 == 1) {
                console.log(`Deleted element: ${array[i]}`);
                array.splice(i, 1);
                yield new Promise(resolve => setTimeout(resolve, 1000));
                --i;
            }
        }
        console.log(`Rest of array: ${array}`);
    });
}
;
removeOddNumbers(data);
