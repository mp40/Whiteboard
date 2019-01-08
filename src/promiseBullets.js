const createRifle = function () {
    return {
        loaded: false,
        reloadTime: 8,
        magazineCap: 20,
        rateOfFire: 5
    }
}

const operateRifle = function () {
    return new Promise(function (resolve, reject) {
        const rifle = createRifle()
        setTimeout(function(){
            resolve("loaded")
        },500*rifle.reloadTime)
    })
}

module.exports = {operateRifle}