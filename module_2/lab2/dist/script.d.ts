declare function findMaxNegative(arr: number[]): number | undefined;
declare function convertToIntMatrix(boolMatrix: boolean[][]): number[][];
type MyTuple = [number, string, string];
declare function concatenateStrings(tuple: MyTuple): string;
declare enum AminoAcid {
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
    Proline = "Proline"
}
declare const selectedAminoAcid: AminoAcid;
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function petInfo<T extends Pet>(pet: T): void;
interface AminoAcidInfo {
    common_name: string;
    molecularWeight: number;
    acidType: AminoAcid;
    codons: string[];
}
declare const alanineInfo: AminoAcidInfo;
