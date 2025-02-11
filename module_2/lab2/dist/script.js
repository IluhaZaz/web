//task 1
function findMaxNegative(arr) {
    let res = undefined;
    for (const num of arr) {
        if (num < 0) {
            if (res === undefined || num > res) {
                res = num;
            }
        }
    }
    return res;
}
function convertToIntMatrix(boolMatrix) {
    const rows = boolMatrix.length;
    if (rows == 0)
        return [];
    const cols = boolMatrix[0].length;
    const res = [];
    for (let i = 0; i < rows; i++) {
        res[i] = [];
        for (let j = 0; j < cols; j++) {
            if (boolMatrix[i][j])
                res[i][j] = 1;
            else
                res[i][j] = 0;
        }
    }
    return res;
}
function concatenateStrings(tuple) {
    const [num, str0, str1] = tuple;
    return `${str1}: ${str0}`;
}
//task 3
var AminoAcid;
(function (AminoAcid) {
    AminoAcid["Glycine"] = "Glycine";
    AminoAcid["Alanine"] = "Alanine";
    AminoAcid["Valine"] = "Valine";
    AminoAcid["Serine"] = "Serine";
    AminoAcid["Threonine"] = "Threonine";
    AminoAcid["Phenylalanine"] = "Phenylalanine";
    AminoAcid["Tyrosine"] = "Tyrosine";
    AminoAcid["Tryptophan"] = "Tryptophan";
    AminoAcid["AsparticAcid"] = "AsparticAcid";
    AminoAcid["GlutamicAcid"] = "GlutamicAcid";
    AminoAcid["Arginine"] = "Arginine";
    AminoAcid["Glutamine"] = "Glutamine";
    AminoAcid["Proline"] = "Proline";
})(AminoAcid || (AminoAcid = {}));
const selectedAminoAcid = AminoAcid.Glutamine;
console.log(selectedAminoAcid);
//task 4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function petInfo(pet) {
    console.log(`Type of pet: ${pet.constructor.name}:`);
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speaks: ${pet.speak()}`);
}
const alanineInfo = {
    common_name: "Alanine",
    molecularWeight: 89.09,
    acidType: AminoAcid.Alanine,
    codons: ["GCU", "GCC", "GCA", "GCG"]
};
console.log(JSON.stringify(alanineInfo));
