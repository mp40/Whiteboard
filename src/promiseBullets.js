const createRifle = function () {
    return {
        loaded: false,
        reloadTime: 8,
        magazineCap: 20,
        rateOfFire: 5
    }
}

const reloadRifle = function (reloadTime) {
    let actionCount = 0;
    for (let i = 0; i < reloadTime; i++) {
        setTimeout(function () {
            actionCount++
        }, 500);
    }

    return actionCount
}

const operateRifle = function () {
    let rifle = createRifle();
    //let reloadActions = 0;
    if (rifle.loaded === false) {
        const promiseBullets = new Promise(function (resolve, reject) {
            const loadActions = reloadRifle(rifle.reloadTime)
            resolve(loadActions)
        })
        promiseBullets.then((reloadActions) => {
            if (reloadActions === rifle.reloadTime) {
                rifle.loaded === true
            }
        })
        //reloadActions = reloadRifle(rifle.reloadTime)
    }
    // if (reloadActions === rifle.reloadTime) {
    //     rifle.loaded === true
    // }
    return rifle.loaded ? "loaded" : "unloaded"
}

module.exports = operateRifle