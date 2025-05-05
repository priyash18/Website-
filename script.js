function calculateCost() {
    const travelers = parseInt(document.getElementById("travelers").value) || 0;
    const days = parseInt(document.getElementById("days").value) ||0;
    const destination = document.getElementById("destination").value;
    const packageType = document.getElementById("package").value;

    const costMatrix = {
        Paris: { moderate: 150, semi: 200, luxurious: 350},
        Bali: { moderate: 80, semi: 150, luxurious: 250},
        Italy: { moderate: 200, semi: 350, luxurious: 500},
        Switzerland: { moderate: 300, semi: 450, luxurious: 1000},
    }
    const costPerPersonPerDay = costMatrix[destination][packageType];
    const total = travelers * days * costPerPersonPerDay;

    document.getElementById("cost-result").innerHTML =
    `Destination: ${destination.charAt(0).toUpperCase() + destination.slice(1)}<br>
    Package: ${packageType.charAt(0).toUpperCase() + packageType.slice(1)}<br>
    Total Cost: $${total}`
    
  }
