let allVehicles = [];

vehicleLog = () => {
    let vehicleType = document.getElementById("type").value;
    let vehicleMake = document.getElementById("make").value;
    let vehicleModel = document.getElementById("model").value;
    let vehicleNumber = document.getElementById("number").value;
    let vehicleCondition = document.getElementById("condition").value;

    if(){
        allVehicles.push({
            vehicleType: type,
            vehicleMake: make,
            vehicleModel: model,
            vehicleNumber: number,
            vehicleCondition: condition
        });

        alert("Vehicle: " + type + " ," + make + " ," + model + " , number: " + number + " has been logged");
    } else{
        alert("Vehicle has Not been logged!");
    }

    console.log(allVehicles)

    document.getElementById("inventoryLog").reset();
}