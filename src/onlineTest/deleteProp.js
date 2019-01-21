const deleteProp =function(obj, prop){
    if (obj[prop]){
        delete obj[prop]
        return true
    }
    return false
}

const findProp = function(obj, prop){
    if(obj[prop]){
        return true
    }
    return false
}

module.exports = {deleteProp, findProp}