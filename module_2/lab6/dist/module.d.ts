export declare namespace Vehicles {
    enum OwnerDocument {
        Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
        DriverLicense = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",
        BirthCertificate = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
    }
    interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        OwnerDocument: OwnerDocument;
        documentSeries: string;
        documentNumber: string;
        logInfo(): string;
    }
    interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        logInfo(): string;
    }
    class VehicleOwner implements Owner {
        private _lastName;
        private _firstName;
        private _middleName;
        private _birthDate;
        private _documentType;
        private _documentSeries;
        private _documentNumber;
        constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, OwnerDocument: OwnerDocument, documentSeries: string, documentNumber: string);
        get lastName(): string;
        get firstName(): string;
        get middleName(): string;
        get birthDate(): Date;
        get OwnerDocument(): OwnerDocument;
        get documentSeries(): string;
        get documentNumber(): string;
        logInfo(): string;
    }
    class VehicleImplementation implements Vehicle {
        private _brand;
        private _model;
        private _year;
        private _vin;
        private _registrationNumber;
        private _owner;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
        get brand(): string;
        get model(): string;
        get year(): number;
        get vin(): string;
        get registrationNumber(): string;
        get owner(): Owner;
        logInfo(): string;
    }
    enum BodyType {
        SEDAN = "\u0421\u0435\u0434\u0430\u043D",
        COUPE = "\u041A\u0443\u043F\u0435",
        HATCHBACK = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
        SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
        TRUCK = "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A"
    }
    enum CarClass {
        ECONOMY = "\u042D\u043A\u043E\u043D\u043E\u043C",
        MIDDLE = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439",
        PREMIUM = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C"
    }
    interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
        logInfo(): string;
    }
    class CarImplementation extends VehicleImplementation implements Car {
        private _bodyType;
        private _carClass;
        constructor(make: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: CarClass);
        get bodyType(): BodyType;
        set bodyType(value: BodyType);
        get carClass(): CarClass;
        set carClass(value: CarClass);
        logInfo(): string;
    }
}
