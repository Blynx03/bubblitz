export type LevelConfig = {
    numberOfBalls: number,
    minValue: number,
    maxValue: number,
    moving?: boolean,
    rotating?: boolean,
    changingSize?: boolean,
    ballValueOrder?: boolean,
    vanishingValue?: boolean,
    timer?: 40 | 30 | 20 | 15
} 

export const LEVEL_CONFIG: Record<number, LevelConfig> = {
    0: { numberOfBalls: 10, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 20 },
    1: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 40 },
    2: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 40 },
    3: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 40 },
    4: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    5: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    6: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    7: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    8: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    9: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 40 },
    10: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 40 },
    11: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 40 },
    12: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 40 },    
    13: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 40 },
    14: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 40 },
    15: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 40 },
    16: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 40 },
    17: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 40 },
    18: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 40 },
    19: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, ballValueOrder: true, timer: 40 }, // ball values are now either ascending or descending
    20: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, ballValueOrder: true, timer: 40 }, // ball values are now either ascending or descending
    21: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, ballValueOrder: true, timer: 40 }, 
    22: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, ballValueOrder: true, timer: 40 }, 
    23: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, ballValueOrder: true, timer: 40 }, // some balls are rotating counterclockwise
    24: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, ballValueOrder: true, timer: 40 }, // some balls are rotating counterclockwise    
    25: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    26: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    27: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    28: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    29: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    30: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, ballValueOrder: true, timer: 40 },

    //  With 40sec timer
    31: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 30 },
    32: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 30 },
    33: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 30 },
    34: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    35: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    36: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    37: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    38: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    39: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 30 },
    40: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 30 },
    41: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 30 },
    42: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 30 },    
    43: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 30 },
    44: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 30 },
    45: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30 },
    46: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30 },
    47: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30 },
    48: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30 },
    49: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    50: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    51: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    52: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    53: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    54: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise    
    55: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    56: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    57: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    58: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    59: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    60: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 30, ballValueOrder: true },

        //  With 45sec timer
    61: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 20 },
    62: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 20 },
    63: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 20 },
    64: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    65: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    66: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    67: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    68: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    69: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 20 },
    70: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 20 },
    71: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 20 },
    72: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 20 },    
    73: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 20 },
    74: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 20 },
    75: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 20 },
    76: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 20 },
    77: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 20 },
    78: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 20 },
    79: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    80: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    81: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    82: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    83: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    84: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise    
    85: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    86: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    87: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    88: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    89: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    90: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 20, ballValueOrder: true },

        //  With 30sec timer
    91: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 15 },
    92: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 15 },
    93: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 15 },
    94: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    95: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    96: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    97: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    98: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    99: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 15 },
    100: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 15 },
    101: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 15 },
    102: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 15 },    
    103: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 15 },
    104: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 15 },
    105: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 15 },
    106: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 15 },
    107: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 15 },
    108: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 15 },
    109: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    110: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    111: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    112: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    113: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    114: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise    
    115: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    116: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    117: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    118: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    119: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    120: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 15, ballValueOrder: true },
}