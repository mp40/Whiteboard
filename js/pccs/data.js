export const averageRifle762FMJ = {
  type: 'FMJ',
  pen: [19, 19, 17, 16, 14, 10, 7.3, 5.3],
  dc: [8, 8, 8, 7, 7, 7, 6, 5],
};

export const m14 = {
  name: 'M14',
  list: 'rifles',
  calibre: '7.62mm NATO',
  qty: 1,
  length: 44,
  baseWeight: 9.6,
  rt: 8,
  rof: '*6',
  mag: [{ type: 'Mag', weight: 1.6, cap: 20, qty: 0 }],
  kd: 10,
  sab: 5,
  aim: {
    ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    mod: [-24, -14, -10, -8, -6, -5, -4, -3, -2, -1, 0],
  },
  projectiles: [averageRifle762FMJ],
  trb: null,
  ma: [0.6, 1, 2, 4, 6, 12, 19, 25],
  ba: [61, 53, 45, 37, 32, 23, 17, 13],
  tof: [0, 0, 1, 2, 2, 5, 8, 11],
  offical: true,
}

export const famas = {
    name: 'FAMAS',
    list: 'rifles',
    calibre: '5.56mm NATO',
    qty: 1,
    length: 30,
    baseWeight: 8,
    rt: 10,
    rof: '**8',
    mag: [{ type: 'Mag', weight: 1, cap: 25, qty: 0 }],
    kd: 4,
    sab: 3,
    aim: {
        ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        mod: [-23, -12, -9, -7, -6, -4, -3, -2, -1],
    },
    projectiles: [
      {
        type: 'FMJ',
        pen: [15, 15, 13, 12, 10, 6.4, 4.1, 2.6],
        dc: [6, 6, 6, 6, 5, 4, 3, 2],
      },
      {
        type: 'JHP',
        pen: [15, 14, 13, 11, 9.7, 6.2, 3.9, 2.5],
        dc: [8, 8, 7, 7, 7, 6, 4, 3],
      },
      {
        type: 'AP',
        pen: [22, 21, 19, 16, 14, 9.1, 5.8, 3.7],
        dc: [6, 6, 6, 5, 5, 4, 3, 2],
      },
    ],
    trb: [-6, -1, 4, 8, 10, 15, 18, 20],
    ma: [0.4, 0.8, 2, 3, 4, 8, 12, 16],
    ba: [60, 51, 42, 35, 30, 20, 15, 11],
    tof: [0, 0, 1, 1, 2, 5, 8, 11],
    offical: true,
    bipod: true,
}

export const glock = {
  name: 'Glock Model 17',
  list: 'pistols',
  calibre: '9mm Parabellum',
  qty: 1,
  length: 7,
  baseWeight: 1.25,
  rt: 4,
  rof: '*',
  mag: [{ type: 'Mag', weight: 0.55, cap: 17, qty: 0 }],
  kd: 3,
  sab: 4,
  aim: {
    ac: [1, 2, 3, 4, 5, 6],
    mod: [-16, -11, -10, -9, -8, -7],
  },
  projectiles: [
    {
      type: 'FMJ',
      pen: [1.9, 1.8, 1.5, 1.1, 0.9, 0.4, 0.1, 0.1],
      dc: [3, 3, 2, 2, 1, 1, 1, 1],
    },
  ],
  ba: [45, 37, 28, 21, 16, 6, 1, -2],
  tof: [1, 1, 2, 4, 6, 15, 25, 36],
  offical: true,
}