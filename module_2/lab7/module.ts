export namespace Vehicles{
    export enum OwnerDocument {
        Passport = "Паспорт",
        DriverLicense = "Водительское удостоверение",
        BirthCertificate = "Свидетельство о рождении"
    }


    export interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        OwnerDocument: OwnerDocument;
        documentSeries: string;
        documentNumber: string;

        logInfo(): void;
    }


    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;

        logInfo(): void;
    }


    export class VehicleOwner implements Owner {
        private _lastName: string;
        private _firstName: string;
        private _middleName: string;
        private _birthDate: Date;
        private _documentType: OwnerDocument;
        private _documentSeries: string;
        private _documentNumber: string;

        constructor(
            lastName: string,
            firstName: string,
            middleName: string,
            birthDate: Date,
            OwnerDocument: OwnerDocument,
            documentSeries: string,
            documentNumber: string
        ) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._documentType = OwnerDocument;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }

        get lastName() { return this._lastName; }
        get firstName() { return this._firstName; }
        get middleName() { return this._middleName; }
        get birthDate() { return this._birthDate; }
        get OwnerDocument() { return this._documentType; }
        get documentSeries() { return this._documentSeries; }
        get documentNumber() { return this._documentNumber; }

        logInfo(): void {
            console.log(`Владелец:
                Фамилия: ${this.lastName}
                Имя: ${this.firstName}
                Отчество: ${this.middleName}
                Дата рождения: ${this.birthDate.toLocaleDateString()}
                Тип документа: ${this.OwnerDocument}
                Серия документа: ${this.documentSeries}
                Номер документа: ${this.documentNumber}`);
        }
    }


    export class VehicleImplementation implements Vehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }

        get brand() { return this._brand; }
        get model() { return this._model; }
        get year() { return this._year; }
        get vin() { return this._vin; }
        get registrationNumber() { return this._registrationNumber; }
        get owner() { return this._owner; }

        logInfo(): void {
            console.log(`Транспортное средство:
                Марка: ${this.brand}
                Модель: ${this.model}
                Год выпуска: ${this.year}
                VIN-номер: ${this.vin}
                Регистрационный номер: ${this.registrationNumber}`);
        }
    }


    export enum BodyType {
        SEDAN = "Седан",
        COUPE = "Купе",
        HATCHBACK = "Хэтчбек",
        SUV = "Внедорожник",
        TRUCK = "Грузовик"
    }


    export enum CarClass {
        ECONOMY = "Эконом",
        MIDDLE = "Средний",
        PREMIUM = "Премиум"
    }


    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;

        logInfo(): void;
        toJson(): string;
    }


    export class CarImplementation extends VehicleImplementation implements Car {
        private _bodyType: BodyType;
        private _carClass: CarClass;
    
        constructor(
            make: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            bodyType: BodyType,
            carClass: CarClass
        ) {
            super(make, model, year, vin, registrationNumber, owner);
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
    
        get bodyType(): BodyType { return this._bodyType; }
        set bodyType(value: BodyType) { this._bodyType = value; }
        get carClass(): CarClass { return this._carClass; }

        set carClass(value: CarClass) { this._carClass = value; }
    
        logInfo(): void {
            super.logInfo();
            console.log(`Body Type: ${this._bodyType}`);
            console.log(`Car Class: ${this._carClass}`);
        }

        //task 3
        toJson(): string {
            const data = {
                bodyType: this._bodyType,
                carClass: this._carClass
            };
            return JSON.stringify(data);
        }
    }

    
    export interface Motorbike extends Vehicle {
        frameType: string;
        isSport: boolean;

        logInfo(): void;
    }

    
    export class MotorbikeImplementation extends VehicleImplementation implements Motorbike {
        private _frameType: string;
        private _isSport: boolean;
    
        constructor(
            make: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            frameType: string,
            isSport: boolean
    ){
            super(make, model, year, vin, registrationNumber, owner);
            this._frameType = frameType;
            this._isSport = isSport;
        }

        get frameType(): string { return this._frameType; }
        get isSport(): boolean { return this._isSport; }

        set frameType(value: string) { this._frameType = value; }
        set isSport(value: boolean) { this._isSport = value; }

        logInfo(): void {
            super.logInfo();
            console.log(`Frame Type: ${this._frameType}`);
            console.log(`Is Sport: ${this._isSport}`);
        }
    }


    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];

        getAllVehicles(): T[];
        sortByMark(increaseingOrder: boolean): void;
        findByDocuments(series: string, number: string): T[];
    }

    
    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private _creationDate: Date;
        private _vehicles: T[];
    
        constructor(creationDate: Date, vehicles: T[]) {
            this._creationDate = creationDate;
            this._vehicles = vehicles;
        }
    
        get creationDate(): Date { return this._creationDate; }
        get vehicles(): T[] { return this._vehicles; }

        set creationDate(value: Date) { this._creationDate = value; }  
        set vehicles(value: T[]) { this._vehicles = value; }
    
        getAllVehicles(): T[] {
        return this._vehicles;
        }

        //task 1
        sortByMark(increaseingOrder: boolean = true){
            if(increaseingOrder)
                this.getAllVehicles().sort((a, b) => a.brand.localeCompare(b.brand));
            else
                this.getAllVehicles().sort((a, b) => b.brand.localeCompare(a.brand));
        }

        //task 2
        findByDocuments(series: string, number: string): T[] {
            let results: T[] = [];
            series = series.toLowerCase();
            number = number.toLowerCase();
          
            for (const vehicle of this._vehicles) {
                if (vehicle.owner.documentSeries.toLowerCase() == series &&
                    vehicle.owner.documentNumber.toLowerCase() == number) {
                    results.push(vehicle);
                }
            }
          
            return results;
        }
    }
}
