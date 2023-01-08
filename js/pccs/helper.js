const mapAims = ( aimObject ) => {
    const result = [];
    const count = aimObject.ac[aimObject.ac.length - 1];

    for(let i = 0; i < count; i++) {
        if(aimObject.ac[i] === i + 1) {
            result.push(aimObject.mod[i])
        } else {
            result.push(aimObject.mod[i - 1])
        }
    }

    return result;
}

export const serializeGunData = (firearm) => {
    const { name, kd, sab } = firearm;

    const data = {
        name,
        aims: mapAims(firearm.aim),
        kd,
        sab
    }

    return data;
}