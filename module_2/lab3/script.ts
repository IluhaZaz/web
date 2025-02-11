//task 1
enum OwnerDocument {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    BirthCertificate = "Свидетельство о рождении"
}


interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    OwnerDocument: OwnerDocument;
    documentSeries: string;
    documentNumber: string;

    logInfo(): void;
}


interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;

    logInfo(): void;
}


class VehicleOwner implements Owner {
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


class VehicleImplementation implements Vehicle {
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


const owner = new VehicleOwner(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1990, 1, 1),
    OwnerDocument.Passport,
    "1234",
    "567890"
);

const car = new VehicleImplementation(
    "Toyota",
    "Camry",
    2020,
    "1HGBH41JXMN109186",
    "A123BC",
    owner
);

//task 2
enum BodyType {
    SEDAN = "Седан",
    COUPE = "Купе",
    HATCHBACK = "Хэтчбек",
    SUV = "Внедорожник",
    TRUCK = "Грузовик"
}


enum CarClass {
    ECONOMY = "Эконом",
    MIDDLE = "Средний",
    PREMIUM = "Премиум"
}


interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;

    logInfo(): void;
}


class CarImplementation extends VehicleImplementation implements Car {
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
}

  
interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;

    logInfo(): void;
}

  
class MotorbikeImplementation extends VehicleImplementation implements Motorbike {
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

const motorbike = new MotorbikeImplementation(
  "Honda",
  "CBR600RR",
  2022,
  "VIN0987654321",
  "К456ДЕ77",
  owner,
  "Trellis",
  true
);

motorbike.logInfo();

//task 3
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

  
class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
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
}

  
const car1 = new CarImplementation(
    "Toyota",
    "Camry",
    2020,
    "VIN1234567890",
    "А123БВ77",
    owner,
    BodyType.SEDAN,
    CarClass.PREMIUM
);
  
const car2 = new CarImplementation(
    "BMW",
    "X5",
    2023,
    "VIN9876543210",
    "Б456ГД77",
    owner,
    BodyType.SUV,
    CarClass.PREMIUM
);
  
const carStorage = new VehicleStorageImpl<Car>(new Date(), [car1, car2]);
const motorbikeStorage = new VehicleStorageImpl<Motorbike>(new Date(), [motorbike]);

console.log("--- Car Storage ---");
carStorage.getAllVehicles().forEach(car => car.logInfo());

console.log("--- Motorbike Storage ---");
motorbikeStorage.getAllVehicles().forEach(motorbike => motorbike.logInfo());
