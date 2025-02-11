//task 1
function findMaxNegative(arr: number[]): number | undefined {
    let res: number | undefined = undefined;
  
    for (const num of arr) {
      if (num < 0) {
        if (res === undefined || num > res) {
          res = num;
        }
      }
    }
  
    return res;
  }

  function convertToIntMatrix(boolMatrix: boolean[][]): number[][] {
    const rows = boolMatrix.length;
    if(rows == 0)
        return [];
    const cols = boolMatrix[0].length;
  
    const res: number[][] = [];
  
    for (let i = 0; i < rows; i++) {
      res[i] = [];
      for (let j = 0; j < cols; j++) {
        if(boolMatrix[i][j])
            res[i][j] = 1;
        else
        res[i][j] = 0;
      }
    }
    return res;
  }

//task 2
type MyTuple = [number, string, string];

function concatenateStrings(tuple: MyTuple): string {
  const [num, str0, str1] = tuple;

  return `${str1}: ${str0}`;
}

//task 3
enum AminoAcid {
    Glycine = "Glycine",
    Alanine = "Alanine",
    Valine = "Valine",
    Serine = "Serine",
    Threonine = "Threonine",
    Phenylalanine = "Phenylalanine",
    Tyrosine = "Tyrosine",
    Tryptophan = "Tryptophan",
    AsparticAcid = "AsparticAcid",
    GlutamicAcid = "GlutamicAcid",
    Arginine = "Arginine",
    Glutamine = "Glutamine",
    Proline = "Proline",
}
  
const selectedAminoAcid: AminoAcid = AminoAcid.Glutamine;
console.log(selectedAminoAcid);

//task 4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
}
    
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function petInfo<T extends Pet>(pet: T): void {
    console.log(`Type of pet: ${pet.constructor.name}:`);
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speaks: ${pet.speak()}`);
}

//task 5
interface AminoAcidInfo {
    common_name: string;
    molecularWeight: number;
    acidType: AminoAcid;
    codons: string[];
}

const alanineInfo: AminoAcidInfo = {
    common_name: "Alanine",
    molecularWeight: 89.09,
    acidType: AminoAcid.Alanine,
    codons: ["GCU", "GCC", "GCA", "GCG"]
};

console.log(JSON.stringify(alanineInfo));
