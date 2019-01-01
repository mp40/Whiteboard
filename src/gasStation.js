const findStartingStation = function (gas, cost) {
    const totalGas = gas.reduce((num, sum) => {
        return num + sum
    })
    const totalCost = cost.reduce((num, sum) => {
        return num + sum
    })
    if (totalGas - totalCost < 1) {
        return -1
    }
    let bestStart = gas[0] - cost[0];
    gas.forEach((val, dex) => {
        if (val - cost[dex] > bestStart) {
            bestStart = dex
        }
    })
    return bestStart;
}

module.exports = {
    findStartingStation
}