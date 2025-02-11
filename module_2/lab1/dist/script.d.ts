declare const difference: (a: number, b: number) => number;
declare let isSuperuser: boolean;
declare const MAX_STR_LEN: number;
declare let temperature: number;
declare const GREETING: string;
declare const nums: number[];
declare let names: string[];
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1: number;
    e2: number;
}
declare const data: ToJsonStringify;
declare const jsonData: string;
