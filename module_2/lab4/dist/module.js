"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicles = void 0;
var Vehicles;
(function (Vehicles) {
    let OwnerDocument;
    (function (OwnerDocument) {
        OwnerDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        OwnerDocument["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        OwnerDocument["BirthCertificate"] = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
    })(OwnerDocument = Vehicles.OwnerDocument || (Vehicles.OwnerDocument = {}));
    class VehicleOwner {
        constructor(lastName, firstName, middleName, birthDate, OwnerDocument, documentSeries, documentNumber) {
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
        logInfo() {
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
    Vehicles.VehicleOwner = VehicleOwner;
    class VehicleImplementation {
        constructor(brand, model, year, vin, registrationNumber, owner) {
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
        logInfo() {
            console.log(`Транспортное средство:
                Марка: ${this.brand}
                Модель: ${this.model}
                Год выпуска: ${this.year}
                VIN-номер: ${this.vin}
                Регистрационный номер: ${this.registrationNumber}`);
        }
    }
    Vehicles.VehicleImplementation = VehicleImplementation;
    let BodyType;
    (function (BodyType) {
        BodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["COUPE"] = "\u041A\u0443\u043F\u0435";
        BodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        BodyType["TRUCK"] = "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A";
    })(BodyType = Vehicles.BodyType || (Vehicles.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["ECONOMY"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["MIDDLE"] = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439";
        CarClass["PREMIUM"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
    })(CarClass = Vehicles.CarClass || (Vehicles.CarClass = {}));
    class CarImplementation extends VehicleImplementation {
        constructor(make, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            super(make, model, year, vin, registrationNumber, owner);
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
        get bodyType() { return this._bodyType; }
        set bodyType(value) { this._bodyType = value; }
        get carClass() { return this._carClass; }
        set carClass(value) { this._carClass = value; }
        logInfo() {
            super.logInfo();
            console.log(`Body Type: ${this._bodyType}`);
            console.log(`Car Class: ${this._carClass}`);
        }
    }
    Vehicles.CarImplementation = CarImplementation;
    class MotorbikeImplementation extends VehicleImplementation {
        constructor(make, model, year, vin, registrationNumber, owner, frameType, isSport) {
            super(make, model, year, vin, registrationNumber, owner);
            this._frameType = frameType;
            this._isSport = isSport;
        }
        get frameType() { return this._frameType; }
        get isSport() { return this._isSport; }
        set frameType(value) { this._frameType = value; }
        set isSport(value) { this._isSport = value; }
        logInfo() {
            super.logInfo();
            console.log(`Frame Type: ${this._frameType}`);
            console.log(`Is Sport: ${this._isSport}`);
        }
    }
    Vehicles.MotorbikeImplementation = MotorbikeImplementation;
    class VehicleStorageImpl {
        constructor(creationDate, vehicles) {
            this._creationDate = creationDate;
            this._vehicles = vehicles;
        }
        get creationDate() { return this._creationDate; }
        get vehicles() { return this._vehicles; }
        set creationDate(value) { this._creationDate = value; }
        set vehicles(value) { this._vehicles = value; }
        getAllVehicles() {
            return this._vehicles;
        }
    }
    Vehicles.VehicleStorageImpl = VehicleStorageImpl;
})(Vehicles || (exports.Vehicles = Vehicles = {}));
