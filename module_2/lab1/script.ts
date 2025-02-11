//task 2
const difference = (a: number, b: number): number => a - b;

//task 3
let isSuperuser: boolean = false;

const MAX_STR_LEN: number = 30;

let temperature: number = 36.6;

const GREETING: string = "Hi everyone";

const nums: number[] = [1, 2, 3, 4, 5];

let names: string[] = ["Alice", "Bob", "Charlie"];

//task 4
interface Entity {
id: number;
}
interface ToJsonStringify extends
Entity {
e1: number;
e2: number;
}
const data: ToJsonStringify = {
id: 5,
e1: 12345,
e2: 999,
}
    
const jsonData: string = JSON.stringify(data);

console.log(jsonData);