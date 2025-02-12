"use strict";
//task 1
var OwnerDocument;
(function (OwnerDocument) {
    OwnerDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    OwnerDocument["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    OwnerDocument["BirthCertificate"] = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
})(OwnerDocument || (OwnerDocument = {}));
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
class Car {
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
const owner = new VehicleOwner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), OwnerDocument.Passport, "1234", "567890");
const car = new Car("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner);
