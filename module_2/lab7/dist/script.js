"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
const owner1 = new module_1.Vehicles.VehicleOwner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), module_1.Vehicles.OwnerDocument.Passport, "1234", "567890");
const owner2 = new module_1.Vehicles.VehicleOwner("Зубенко", "Михаил", "Петрович", new Date(1986, 2, 3), module_1.Vehicles.OwnerDocument.Passport, "1431", "166790");
const car1 = new module_1.Vehicles.CarImplementation("Toyota", "Camry", 2020, "VIN1234567890", "А123БВ77", owner1, module_1.Vehicles.BodyType.SEDAN, module_1.Vehicles.CarClass.PREMIUM);
const car2 = new module_1.Vehicles.CarImplementation("BMW", "X5", 2023, "VIN9876543210", "Б456ГД77", owner2, module_1.Vehicles.BodyType.SUV, module_1.Vehicles.CarClass.PREMIUM);
const car3 = new module_1.Vehicles.CarImplementation("Chevrolet", "Impala", 1967, "VIN9876243210", "Б456ГЕ77", owner2, module_1.Vehicles.BodyType.SEDAN, module_1.Vehicles.CarClass.PREMIUM);
const carStorage = new module_1.Vehicles.VehicleStorageImpl(new Date(), [car1, car2, car3]);
//task 1
console.log("_____Initial order_____");
console.log(carStorage.getAllVehicles());
console.log("_____Increasing order_____");
console.log(carStorage.sortByMark(true));
console.log(carStorage.getAllVehicles());
console.log("_____Descreasing order_____");
console.log(carStorage.sortByMark(false));
console.log(carStorage.getAllVehicles());
//task 2
console.log("_____Search by documents_____");
console.log(carStorage.findByDocuments("1431", "166790"));
//task 3
carStorage.getAllVehicles().forEach(vehicle => { console.log(vehicle.toJson()); });
