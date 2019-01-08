const createRifle = function () {
    return {
        loaded: false,
        reloadTime: 8,
        magazineCap: 20,
        rateOfFire: 5
    }
}

const loadRifle = function () {
    return new Promise(function (resolve, reject) {
        const rifle = createRifle()
        setTimeout(function(){
            resolve("loaded")
        },500*rifle.reloadTime)
    })
}

const fireBurst = function () {
    return new Promise(function (resolve, reject) {
        const rifle = createRifle()
        setTimeout(function(){
            resolve("BANG\n".repeat(rifle.rateOfFire))
        },500)
    })
}
module.exports = {loadRifle, fireBurst}