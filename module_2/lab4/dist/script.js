"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
const owner = new module_1.Vehicles.VehicleOwner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), module_1.Vehicles.OwnerDocument.Passport, "1234", "567890");
const car1 = new module_1.Vehicles.CarImplementation("Toyota", "Camry", 2020, "VIN1234567890", "А123БВ77", owner, module_1.Vehicles.BodyType.SEDAN, module_1.Vehicles.CarClass.PREMIUM);
const car2 = new module_1.Vehicles.CarImplementation("BMW", "X5", 2023, "VIN9876543210", "Б456ГД77", owner, module_1.Vehicles.BodyType.SUV, module_1.Vehicles.CarClass.PREMIUM);
const carStorage = new module_1.Vehicles.VehicleStorageImpl(new Date(), [car1, car2]);
carStorage.getAllVehicles().forEach(car => car.logInfo());
