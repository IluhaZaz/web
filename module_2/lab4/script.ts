import { Vehicles } from "./module";


const owner = new Vehicles.VehicleOwner(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1990, 1, 1),
    Vehicles.OwnerDocument.Passport,
    "1234",
    "567890"
);

const car1 = new Vehicles.CarImplementation(
    "Toyota",
    "Camry",
    2020,
    "VIN1234567890",
    "А123БВ77",
    owner,
    Vehicles.BodyType.SEDAN,
    Vehicles.CarClass.PREMIUM
);
  
const car2 = new Vehicles.CarImplementation(
    "BMW",
    "X5",
    2023,
    "VIN9876543210",
    "Б456ГД77",
    owner,
    Vehicles.BodyType.SUV,
    Vehicles.CarClass.PREMIUM
);
  
const carStorage = new Vehicles.VehicleStorageImpl<Vehicles.Car>(new Date(), [car1, car2]);
carStorage.getAllVehicles().forEach(car => car.logInfo());