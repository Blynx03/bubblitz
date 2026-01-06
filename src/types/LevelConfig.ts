export type LevelConfig = {
    numberOfBalls: number,
    minValue: number,
    maxValue: number,
    moving?: boolean,
    rotating?: boolean,
    changingSize?: boolean,
    ballValueOrder?: boolean,
    vanishingValue?: boolean,
    timer?: 60 | 45 | 30
} 

export const LEVEL_CONFIG: Record<number, LevelConfig> = {
    0: { numberOfBalls: 10, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true },
    1: { numberOfBalls: 6, minValue: 1, maxValue: 20 },
    2: { numberOfBalls: 10, minValue: 1, maxValue: 20 },
    3: { numberOfBalls: 14, minValue: 1, maxValue: 30 },
    4: { numberOfBalls: 8, minValue: 1, maxValue: 50 },
    5: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true },
    6: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true },
    7: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true },
    8: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true },
    9: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true },
    10: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true },
    11: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true },
    12: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true },    
    13: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true },
    14: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true },
    15: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true },
    16: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true },
    17: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true },
    18: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true },
    19: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, ballValueOrder: true }, // ball values are now either ascending or descending
    20: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, ballValueOrder: true }, // ball values are now either ascending or descending
    21: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, ballValueOrder: true }, 
    22: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, ballValueOrder: true }, 
    23: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, ballValueOrder: true }, // some balls are rotating counterclockwise
    24: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, ballValueOrder: true }, // some balls are rotating counterclockwise    
    25: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, ballValueOrder: true },
    26: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, ballValueOrder: true },
    27: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, ballValueOrder: true },
    28: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, ballValueOrder: true },
    29: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, ballValueOrder: true },
    30: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, ballValueOrder: true },

    //  With 60sec timer
    31: { numberOfBalls: 6, minValue: 1, maxValue: 20, timer: 60 },
    32: { numberOfBalls: 10, minValue: 1, maxValue: 20, timer: 60 },
    33: { numberOfBalls: 14, minValue: 1, maxValue: 30, timer: 60 },
    34: { numberOfBalls: 8, minValue: 1, maxValue: 50, timer: 60 },
    35: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 60 },
    36: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 60 },
    37: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 60 },
    38: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 60 },
    39: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 60 },
    40: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 60 },
    41: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 60 },
    42: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 60 },    
    43: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 60 },
    44: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 60 },
    45: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 60 },
    46: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 60 },
    47: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 60 },
    48: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 60 },
    49: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 60, ballValueOrder: true }, // some balls are rotating counterclockwise
    50: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 60, ballValueOrder: true }, // some balls are rotating counterclockwise
    51: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 60, ballValueOrder: true }, // some balls are rotating counterclockwise
    52: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 60, ballValueOrder: true }, // some balls are rotating counterclockwise
    53: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 60, ballValueOrder: true }, // some balls are rotating counterclockwise
    54: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 60, ballValueOrder: true }, // some balls are rotating counterclockwise    
    55: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 60, ballValueOrder: true },
    56: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 60, ballValueOrder: true },
    57: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 60, ballValueOrder: true },
    58: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 60, ballValueOrder: true },
    59: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 60, ballValueOrder: true },
    60: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 60, ballValueOrder: true },

        //  With 45sec timer
    61: { numberOfBalls: 6, minValue: 1, maxValue: 20, timer: 45 },
    62: { numberOfBalls: 10, minValue: 1, maxValue: 20, timer: 45 },
    63: { numberOfBalls: 14, minValue: 1, maxValue: 30, timer: 45 },
    64: { numberOfBalls: 8, minValue: 1, maxValue: 50, timer: 45 },
    65: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 45 },
    66: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 45 },
    67: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 45 },
    68: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 45 },
    69: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 45 },
    70: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 45 },
    71: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 45 },
    72: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 45 },    
    73: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 45 },
    74: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 45 },
    75: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 45 },
    76: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 45 },
    77: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 45 },
    78: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 45 },
    79: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 45, ballValueOrder: true }, // some balls are rotating counterclockwise
    80: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 45, ballValueOrder: true }, // some balls are rotating counterclockwise
    81: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 45, ballValueOrder: true }, // some balls are rotating counterclockwise
    82: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 45, ballValueOrder: true }, // some balls are rotating counterclockwise
    83: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 45, ballValueOrder: true }, // some balls are rotating counterclockwise
    84: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 45, ballValueOrder: true }, // some balls are rotating counterclockwise    
    85: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 45, ballValueOrder: true },
    86: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 45, ballValueOrder: true },
    87: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 45, ballValueOrder: true },
    88: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 45, ballValueOrder: true },
    89: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 45, ballValueOrder: true },
    90: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 45, ballValueOrder: true },

        //  With 30sec timer
    91: { numberOfBalls: 6, minValue: 1, maxValue: 20, timer: 30 },
    92: { numberOfBalls: 10, minValue: 1, maxValue: 20, timer: 30 },
    93: { numberOfBalls: 14, minValue: 1, maxValue: 30, timer: 30 },
    94: { numberOfBalls: 8, minValue: 1, maxValue: 50, timer: 30 },
    95: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    96: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    97: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    98: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    99: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 30 },
    100: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 30 },
    101: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 30 },
    102: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 30 },    
    103: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 30 },
    104: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 30 },
    105: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30 },
    106: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30 },
    107: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30 },
    108: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30 },
    109: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    110: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    111: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    112: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    113: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    114: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise    
    115: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    116: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    117: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    118: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    119: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    120: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 30, ballValueOrder: true },
}