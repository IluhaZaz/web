"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
//task 2
try {
    module_1.Vehicles.CarImplementation.prototype.newProperty = "test";
}
catch (error) {
    console.error("Ошибка при попытке изменения прототипа:", error);
}
try {
    Object.defineProperty(module_1.Vehicles.CarImplementation.prototype, 'logInfo', {
        value: function () { console.log("Измененный logInfo"); },
        writable: false,
        configurable: false
    });
}
catch (error) {
    console.error("Ошибка при попытке изменения существующего свойства прототипа:", error);
}
const owner = new module_1.Vehicles.VehicleOwner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), module_1.Vehicles.OwnerDocument.Passport, "1234", "567890");
const car = new module_1.Vehicles.CarImplementation("Toyota", "Camry", 2020, "VIN1234567890", "А123БВ77", owner, module_1.Vehicles.BodyType.SEDAN, module_1.Vehicles.CarClass.PREMIUM);
console.log(car);
console.log(car.logInfo());
