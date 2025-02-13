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

        logInfo(): string;
    }


    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;

        logInfo(): string;
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

        logInfo(): string {
            return `Владелец:
                Фамилия: ${this.lastName}
                Имя: ${this.firstName}
                Отчество: ${this.middleName}
                Дата рождения: ${this.birthDate.toLocaleDateString()}
                Тип документа: ${this.OwnerDocument}
                Серия документа: ${this.documentSeries}
                Номер документа: ${this.documentNumber}`;
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

        logInfo(): string {
            return `Транспортное средство:
                Марка: ${this.brand}
                Модель: ${this.model}
                Год выпуска: ${this.year}
                VIN-номер: ${this.vin}
                Регистрационный номер: ${this.registrationNumber}`;
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

        logInfo(): string;
    }

    //task 2
    function preventModification<T extends { new(...args: any[]): {} }>(constructor: T) {
        Object.freeze(constructor.prototype);
        return constructor;
    }

    //task 3
    function toUpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
      
        descriptor.value = function (...args: any[]) {
          const result = originalMethod.apply(this, args);
            return result.toUpperCase();
          
        };
      
        return descriptor;
    }

    @preventModification
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
        
        @toUpperCase
        logInfo(): string {
            return super.logInfo() +
            `Body Type: ${this._bodyType}
            Car Class: ${this._carClass}`;
        }
    }
}
