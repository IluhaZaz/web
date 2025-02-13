import { Vehicles } from "./module";


//task 2

try {
    (Vehicles.CarImplementation.prototype as any).newProperty = "test";
} catch (error) {
    console.error("Ошибка при попытке изменения прототипа:", error);
}

try {
  Object.defineProperty(Vehicles.CarImplementation.prototype, 'logInfo', {
    value: function() { console.log("Измененный logInfo"); },
    writable: false,
    configurable: false
  });
} catch (error) {
  console.error("Ошибка при попытке изменения существующего свойства прототипа:", error);
}

const owner = new Vehicles.VehicleOwner(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1990, 1, 1),
    Vehicles.OwnerDocument.Passport,
    "1234",
    "567890"
);

const car = new Vehicles.CarImplementation(
    "Toyota",
    "Camry",
    2020,
    "VIN1234567890",
    "А123БВ77",
    owner,
    Vehicles.BodyType.SEDAN,
    Vehicles.CarClass.PREMIUM
);
console.log(car);

console.log(car.logInfo());
