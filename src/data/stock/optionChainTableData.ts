export interface OptionChainHeaderItem {
  id: number;
  date: string;
  daysCount: number;
  className?: string;
}

export interface OptionTableRow {
  id: number;
  callsBid: number;
  callsAsk: number;
  callsLast: number;
  callsDelta: number;
  callsGamma: number;
  strikePrice: number;
  putsBid: number;
  putsAsk: number;
  putsLast: number;
  putsDelta: number;
  putsGamma: number;
}

export interface StockDetailsOptionChainRow {
  id: number;
  callsBid: number;
  callsAsk: number;
  strikePrice: number;
  putsBid: number;
  putsAsk: number;
}

export const optionChainHeader: OptionChainHeaderItem[] = [
  {
    id: 1,
    date: 'May 17, 24',
    daysCount: 4,
    className: 'active'
  },
  {
    id: 2,
    date: 'May 24, 24',
    daysCount: 11
  },
  {
    id: 3,
    date: 'Jun 01, 24',
    daysCount: 18
  },
  {
    id: 4,
    date: 'Jun 08, 24',
    daysCount: 25
  },
  {
    id: 5,
    date: 'Jun 15, 24',
    daysCount: 32
  },
  {
    id: 6,
    date: 'Jun 24, 24',
    daysCount: 41
  },
  {
    id: 7,
    date: 'Jun 31, 24',
    daysCount: 48
  },
  {
    id: 8,
    date: 'Jul 07, 24',
    daysCount: 56
  }
];

export const StockDetailsOptionChainTableHeader: OptionChainHeaderItem[] = [
  {
    id: 1,
    date: 'May 20, 24',
    daysCount: 4,
    className: 'active'
  },
  {
    id: 2,
    date: 'Jun 01, 24',
    daysCount: 11
  },
  {
    id: 3,
    date: 'Jun 15, 24',
    daysCount: 32
  },
  {
    id: 4,
    date: 'Jun 29, 24',
    daysCount: 41
  },
  {
    id: 5,
    date: 'Jul 11, 24',
    daysCount: 48
  },
  {
    id: 6,
    date: 'Jun 28, 24',
    daysCount: 56
  }
];

export const appleTableData: OptionTableRow[] = [
  {
    id: 1,
    callsBid: 12.5,
    callsAsk: 12.75,
    callsLast: 12.3,
    callsDelta: 0.977,
    callsGamma: 0.008,
    strikePrice: 174,
    putsBid: 0.06,
    putsAsk: 0.07,
    putsLast: 0.06,
    putsDelta: -0.023,
    putsGamma: 0.008
  },
  {
    id: 2,
    callsBid: 10.15,
    callsAsk: 10.25,
    callsLast: 10.25,
    callsDelta: 0.964,
    callsGamma: 0.014,
    strikePrice: 5,
    putsBid: 0.07,
    putsAsk: 0.08,
    putsLast: 0.07,
    putsDelta: -0.035,
    putsGamma: 0.014
  },
  {
    id: 3,
    callsBid: 7.65,
    callsAsk: 8.05,
    callsLast: 7.8,
    callsDelta: 0.937,
    callsGamma: 0.024,
    strikePrice: 172.5,
    putsBid: 0.12,
    putsAsk: 0.13,
    putsLast: 0.12,
    putsDelta: -0.064,
    putsGamma: 0.046
  },
  {
    id: 4,
    callsBid: 5.3,
    callsAsk: 5.45,
    callsLast: 5.35,
    callsDelta: 0.871,
    callsGamma: 0.034,
    strikePrice: 175,
    putsBid: 0.26,
    putsAsk: 0.27,
    putsLast: 0.27,
    putsDelta: -0.13,
    putsGamma: 0.046
  },
  {
    id: 5,
    callsBid: 3.25,
    callsAsk: 3.3,
    callsLast: 3.28,
    callsDelta: 0.732,
    callsGamma: 0.044,
    strikePrice: 177.5,
    putsBid: 0.66,
    putsAsk: 0.67,
    putsLast: 0.66,
    putsDelta: -0.269,
    putsGamma: 0.078
  },
  {
    id: 6,
    callsBid: 1.65,
    callsAsk: 1.66,
    callsLast: 1.64,
    callsDelta: 0.51,
    callsGamma: 0.054,
    strikePrice: 180,
    putsBid: 1.53,
    putsAsk: 1.54,
    putsLast: 1.54,
    putsDelta: -0.498,
    putsGamma: 0.1
  },
  {
    id: 7,
    callsBid: 0.65,
    callsAsk: 0.66,
    callsLast: 0.65,
    callsDelta: 0.487,
    callsGamma: 0.063,
    strikePrice: 182.5,
    putsBid: 3.1,
    putsAsk: 3.0,
    putsLast: 3.1,
    putsDelta: -0.431,
    putsGamma: 0.1
  },
  {
    id: 8,
    callsBid: 0.22,
    callsAsk: 0.23,
    callsLast: 0.23,
    callsDelta: 0.234,
    callsGamma: 0.072,
    strikePrice: 185,
    putsBid: 5.05,
    putsAsk: 5.25,
    putsLast: 5.15,
    putsDelta: -0.987,
    putsGamma: 0.023
  },
  {
    id: 9,
    callsBid: 0.08,
    callsAsk: 0.09,
    callsLast: 0.08,
    callsDelta: 0.123,
    callsGamma: 0.084,
    strikePrice: 187.5,
    putsBid: 7.45,
    putsAsk: 7.7,
    putsLast: 7.9,
    putsDelta: -0.897,
    putsGamma: 0.087
  },
  {
    id: 10,
    callsBid: 0.04,
    callsAsk: 0.05,
    callsLast: 0.04,
    callsDelta: 0.012,
    callsGamma: 0.088,
    strikePrice: 190,
    putsBid: 9.9,
    putsAsk: 10.15,
    putsLast: 10.05,
    putsDelta: -0.988,
    putsGamma: 0.014
  },
  {
    id: 11,
    callsBid: 1.65,
    callsAsk: 1.66,
    callsLast: 1.64,
    callsDelta: 0.51,
    callsGamma: 0.054,
    strikePrice: 192,
    putsBid: 1.53,
    putsAsk: 1.54,
    putsLast: 1.54,
    putsDelta: -0.498,
    putsGamma: 0.1
  }
];

export const teslaTableData: OptionTableRow[] = [
  {
    id: 12,
    callsBid: 8.352,
    callsAsk: 4.987,
    callsLast: 10.115,
    callsDelta: 0.253,
    callsGamma: 0.061,
    strikePrice: 155.5,
    putsBid: 6.55,
    putsAsk: 2.133,
    putsLast: 7.98,
    putsDelta: -0.512,
    putsGamma: 0.085
  },
  {
    id: 13,
    callsBid: 10.91,
    callsAsk: 5.102,
    callsLast: 9.05,
    callsDelta: 0.39,
    callsGamma: 0.055,
    strikePrice: 175.8,
    putsBid: 8.89,
    putsAsk: 3.001,
    putsLast: 6.543,
    putsDelta: -0.588,
    putsGamma: 0.023
  },
  {
    id: 14,
    callsBid: 3.78,
    callsAsk: 2.541,
    callsLast: 11.89,
    callsDelta: 0.199,
    callsGamma: 0.033,
    strikePrice: 200.0,
    putsBid: 9.105,
    putsAsk: 6.5,
    putsLast: 4.021,
    putsDelta: -0.755,
    putsGamma: 0.048
  },
  {
    id: 15,
    callsBid: 6.21,
    callsAsk: 5.05,
    callsLast: 7.555,
    callsDelta: 0.167,
    callsGamma: 0.071,
    strikePrice: 193.3,
    putsBid: 3.987,
    putsAsk: 8.75,
    putsLast: 8.88,
    putsDelta: -0.652,
    putsGamma: 0.059
  },
  {
    id: 16,
    callsBid: 10.33,
    callsAsk: 13.95,
    callsLast: 6.89,
    callsDelta: 0.654,
    callsGamma: 0.081,
    strikePrice: 168.9,
    putsBid: 8.005,
    putsAsk: 8.112,
    putsLast: 2.345,
    putsDelta: -0.857,
    putsGamma: 0.022
  },
  {
    id: 17,
    callsBid: 11.25,
    callsAsk: 9.88,
    callsLast: 4.2,
    callsDelta: 0.333,
    callsGamma: 0.068,
    strikePrice: 152.7,
    putsBid: 6.999,
    putsAsk: 3.876,
    putsLast: 5.75,
    putsDelta: -0.411,
    putsGamma: 0.031
  },
  {
    id: 18,
    callsBid: 5.011,
    callsAsk: 7.234,
    callsLast: 5.001,
    callsDelta: 0.765,
    callsGamma: 0.03,
    strikePrice: 182.4,
    putsBid: 7.588,
    putsAsk: 6.901,
    putsLast: 1.234,
    putsDelta: -0.687,
    putsGamma: 0.014
  },
  {
    id: 19,
    callsBid: 12.001,
    callsAsk: 4.11,
    callsLast: 4.032,
    callsDelta: 0.603,
    callsGamma: 0.07,
    strikePrice: 189.5,
    putsBid: 5.99,
    putsAsk: 1.05,
    putsLast: 5.22,
    putsDelta: -0.955,
    putsGamma: 0.04
  },
  {
    id: 20,
    callsBid: 11.05,
    callsAsk: 10.15,
    callsLast: 3.99,
    callsDelta: 0.31,
    callsGamma: 0.072,
    strikePrice: 151.8,
    putsBid: 7.42,
    putsAsk: 3.65,
    putsLast: 6.05,
    putsDelta: -0.401,
    putsGamma: 0.029
  },
  {
    id: 21,
    callsBid: 4.66,
    callsAsk: 6.82,
    callsLast: 4.88,
    callsDelta: 0.78,
    callsGamma: 0.022,
    strikePrice: 184.0,
    putsBid: 8.03,
    putsAsk: 7.45,
    putsLast: 0.95,
    putsDelta: -0.702,
    putsGamma: 0.01
  },
  {
    id: 22,
    callsBid: 11.88,
    callsAsk: 3.95,
    callsLast: 3.85,
    callsDelta: 0.57,
    callsGamma: 0.073,
    strikePrice: 187.5,
    putsBid: 6.11,
    putsAsk: 0.75,
    putsLast: 5.05,
    putsDelta: -0.97,
    putsGamma: 0.038
  }
];

export const nvidiaTableData: OptionTableRow[] = [
  {
    id: 23,
    callsBid: 7.85,
    callsAsk: 4.123,
    callsLast: 11.005,
    callsDelta: 0.288,
    callsGamma: 0.058,
    strikePrice: 158.3,
    putsBid: 5.99,
    putsAsk: 2.45,
    putsLast: 7.55,
    putsDelta: -0.49,
    putsGamma: 0.081
  },
  {
    id: 24,
    callsBid: 9.11,
    callsAsk: 3.005,
    callsLast: 8.52,
    callsDelta: 0.421,
    callsGamma: 0.049,
    strikePrice: 179.9,
    putsBid: 9.03,
    putsAsk: 2.907,
    putsLast: 6.99,
    putsDelta: -0.603,
    putsGamma: 0.02
  },
  {
    id: 25,
    callsBid: 5.03,
    callsAsk: 2.101,
    callsLast: 13.5,
    callsDelta: 0.18,
    callsGamma: 0.03,
    strikePrice: 199.2,
    putsBid: 7.9,
    putsAsk: 6.88,
    putsLast: 3.907,
    putsDelta: -0.78,
    putsGamma: 0.052
  },
  {
    id: 26,
    callsBid: 6.009,
    callsAsk: 5.55,
    callsLast: 7.803,
    callsDelta: 0.155,
    callsGamma: 0.07,
    strikePrice: 192.5,
    putsBid: 4.171,
    putsAsk: 9.005,
    putsLast: 8.994,
    putsDelta: -0.66,
    putsGamma: 0.056
  },
  {
    id: 27,
    callsBid: 10.013,
    callsAsk: 13.084,
    callsLast: 7.004,
    callsDelta: 0.699,
    callsGamma: 0.087,
    strikePrice: 172.8,
    putsBid: 7.924,
    putsAsk: 7.953,
    putsLast: 1.549,
    putsDelta: -0.898,
    putsGamma: 0.017
  },
  {
    id: 28,
    callsBid: 10.9,
    callsAsk: 10.892,
    callsLast: 4.008,
    callsDelta: 0.307,
    callsGamma: 0.072,
    strikePrice: 153.2,
    putsBid: 7.038,
    putsAsk: 3.944,
    putsLast: 6.533,
    putsDelta: -0.399,
    putsGamma: 0.03
  },
  {
    id: 29,
    callsBid: 4.485,
    callsAsk: 6.088,
    callsLast: 4.616,
    callsDelta: 0.792,
    callsGamma: 0.028,
    strikePrice: 186.3,
    putsBid: 7.835,
    putsAsk: 7.58,
    putsLast: 0.96,
    putsDelta: -0.732,
    putsGamma: 0.011
  },
  {
    id: 30,
    callsBid: 11.074,
    callsAsk: 3.856,
    callsLast: 3.915,
    callsDelta: 0.582,
    callsGamma: 0.079,
    strikePrice: 187.7,
    putsBid: 6.065,
    putsAsk: 0.81,
    putsLast: 4.526,
    putsDelta: -0.977,
    putsGamma: 0.039
  },
  {
    id: 31,
    callsBid: 12.5,
    callsAsk: 7.013,
    callsLast: 13.932,
    callsDelta: 0.157,
    callsGamma: 0.045,
    strikePrice: 148.5,
    putsBid: 7.507,
    putsAsk: 1.585,
    putsLast: 9.03,
    putsDelta: -0.404,
    putsGamma: 0.088
  },
  {
    id: 32,
    callsBid: 9.007,
    callsAsk: 3.935,
    callsLast: 7.896,
    callsDelta: 0.484,
    callsGamma: 0.05,
    strikePrice: 181.2,
    putsBid: 9.866,
    putsAsk: 2.007,
    putsLast: 7.02,
    putsDelta: -0.683,
    putsGamma: 0.015
  },
  {
    id: 33,
    callsBid: 4.13,
    callsAsk: 1.523,
    callsLast: 13.99,
    callsDelta: 0.208,
    callsGamma: 0.025,
    strikePrice: 196.7,
    putsBid: 8.007,
    putsAsk: 7.091,
    putsLast: 3.897,
    putsDelta: -0.748,
    putsGamma: 0.051
  }
];

export const alphabetTableData: OptionTableRow[] = [
  {
    id: 34,
    callsBid: 1.234,
    callsAsk: 5.678,
    callsLast: 9.012,
    callsDelta: 0.345,
    callsGamma: 0.067,
    strikePrice: 165.5,
    putsBid: 6.789,
    putsAsk: 1.23,
    putsLast: 8.901,
    putsDelta: -0.567,
    putsGamma: 0.09
  },
  {
    id: 35,
    callsBid: 8.765,
    callsAsk: 2.345,
    callsLast: 7.89,
    callsDelta: 0.456,
    callsGamma: 0.054,
    strikePrice: 182.1,
    putsBid: 7.654,
    putsAsk: 2.987,
    putsLast: 5.432,
    putsDelta: -0.678,
    putsGamma: 0.032
  },
  {
    id: 36,
    callsBid: 6.543,
    callsAsk: 3.21,
    callsLast: 11.234,
    callsDelta: 0.234,
    callsGamma: 0.043,
    strikePrice: 201.9,
    putsBid: 9.876,
    putsAsk: 5.432,
    putsLast: 2.109,
    putsDelta: -0.89,
    putsGamma: 0.065
  },
  {
    id: 37,
    callsBid: 7.89,
    callsAsk: 6.543,
    callsLast: 9.012,
    callsDelta: 0.178,
    callsGamma: 0.081,
    strikePrice: 195.3,
    putsBid: 5.432,
    putsAsk: 8.765,
    putsLast: 7.654,
    putsDelta: -0.789,
    putsGamma: 0.045
  },
  {
    id: 38,
    callsBid: 11.123,
    callsAsk: 14.567,
    callsLast: 8.901,
    callsDelta: 0.701,
    callsGamma: 0.098,
    strikePrice: 175.6,
    putsBid: 8.765,
    putsAsk: 8.901,
    putsLast: 2.345,
    putsDelta: -0.901,
    putsGamma: 0.028
  },
  {
    id: 39,
    callsBid: 12.345,
    callsAsk: 11.234,
    callsLast: 5.678,
    callsDelta: 0.412,
    callsGamma: 0.083,
    strikePrice: 156.0,
    putsBid: 8.901,
    putsAsk: 4.567,
    putsLast: 7.89,
    putsDelta: -0.401,
    putsGamma: 0.043
  },
  {
    id: 40,
    callsBid: 5.678,
    callsAsk: 7.89,
    callsLast: 5.432,
    callsDelta: 0.803,
    callsGamma: 0.039,
    strikePrice: 189.7,
    putsBid: 9.012,
    putsAsk: 8.765,
    putsLast: 1.234,
    putsDelta: -0.743,
    putsGamma: 0.022
  },
  {
    id: 41,
    callsBid: 13.456,
    callsAsk: 4.567,
    callsLast: 4.321,
    callsDelta: 0.694,
    callsGamma: 0.08,
    strikePrice: 190.1,
    putsBid: 7.89,
    putsAsk: 1.901,
    putsLast: 5.678,
    putsDelta: -0.988,
    putsGamma: 0.05
  },
  {
    id: 42,
    callsBid: 14.678,
    callsAsk: 8.123,
    callsLast: 15.432,
    callsDelta: 0.268,
    callsGamma: 0.056,
    strikePrice: 151.3,
    putsBid: 8.901,
    putsAsk: 2.345,
    putsLast: 10.123,
    putsDelta: -0.515,
    putsGamma: 0.099
  },
  {
    id: 43,
    callsBid: 10.123,
    callsAsk: 4.321,
    callsLast: 8.765,
    callsDelta: 0.595,
    callsGamma: 0.061,
    strikePrice: 184.0,
    putsBid: 10.987,
    putsAsk: 3.012,
    putsLast: 7.89,
    putsDelta: -0.796,
    putsGamma: 0.026
  },
  {
    id: 44,
    callsBid: 5.234,
    callsAsk: 2.678,
    callsLast: 15.678,
    callsDelta: 0.319,
    callsGamma: 0.037,
    strikePrice: 199.9,
    putsBid: 9.123,
    putsAsk: 8.098,
    putsLast: 4.567,
    putsDelta: -0.859,
    putsGamma: 0.062
  }
];

export const amdTableData: OptionTableRow[] = [
  {
    id: 45,
    callsBid: 9.876,
    callsAsk: 3.456,
    callsLast: 12.345,
    callsDelta: 0.456,
    callsGamma: 0.078,
    strikePrice: 161.7,
    putsBid: 4.567,
    putsAsk: 1.987,
    putsLast: 9.012,
    putsDelta: -0.678,
    putsGamma: 0.089
  },
  {
    id: 46,
    callsBid: 7.654,
    callsAsk: 2.109,
    callsLast: 6.543,
    callsDelta: 0.567,
    callsGamma: 0.065,
    strikePrice: 180.5,
    putsBid: 8.901,
    putsAsk: 3.21,
    putsLast: 4.321,
    putsDelta: -0.789,
    putsGamma: 0.043
  },
  {
    id: 47,
    callsBid: 4.321,
    callsAsk: 1.876,
    callsLast: 10.123,
    callsDelta: 0.345,
    callsGamma: 0.054,
    strikePrice: 200.1,
    putsBid: 10.234,
    putsAsk: 6.789,
    putsLast: 3.456,
    putsDelta: -0.901,
    putsGamma: 0.076
  },
  {
    id: 48,
    callsBid: 8.901,
    callsAsk: 7.654,
    callsLast: 10.234,
    callsDelta: 0.289,
    callsGamma: 0.092,
    strikePrice: 193.9,
    putsBid: 6.789,
    putsAsk: 9.012,
    putsLast: 8.765,
    putsDelta: -0.89,
    putsGamma: 0.054
  },
  {
    id: 49,
    callsBid: 12.345,
    callsAsk: 15.678,
    callsLast: 9.012,
    callsDelta: 0.802,
    callsGamma: 0.109,
    strikePrice: 174.2,
    putsBid: 9.012,
    putsAsk: 9.123,
    putsLast: 3.456,
    putsDelta: -0.912,
    putsGamma: 0.039
  },
  {
    id: 50,
    callsBid: 13.456,
    callsAsk: 12.345,
    callsLast: 6.789,
    callsDelta: 0.523,
    callsGamma: 0.094,
    strikePrice: 157.4,
    putsBid: 10.123,
    putsAsk: 5.678,
    putsLast: 9.012,
    putsDelta: -0.523,
    putsGamma: 0.054
  },
  {
    id: 51,
    callsBid: 6.789,
    callsAsk: 8.901,
    callsLast: 6.543,
    callsDelta: 0.914,
    callsGamma: 0.04,
    strikePrice: 188.5,
    putsBid: 10.234,
    putsAsk: 9.012,
    putsLast: 2.345,
    putsDelta: -0.854,
    putsGamma: 0.033
  },
  {
    id: 52,
    callsBid: 14.567,
    callsAsk: 5.678,
    callsLast: 5.432,
    callsDelta: 0.705,
    callsGamma: 0.091,
    strikePrice: 191.3,
    putsBid: 9.012,
    putsAsk: 2.109,
    putsLast: 6.789,
    putsDelta: -0.999,
    putsGamma: 0.061
  },
  {
    id: 53,
    callsBid: 15.789,
    callsAsk: 9.234,
    callsLast: 16.543,
    callsDelta: 0.379,
    callsGamma: 0.067,
    strikePrice: 150.9,
    putsBid: 10.123,
    putsAsk: 3.456,
    putsLast: 11.234,
    putsDelta: -0.626,
    putsGamma: 0.1
  },
  {
    id: 54,
    callsBid: 11.234,
    callsAsk: 5.432,
    callsLast: 9.876,
    callsDelta: 0.706,
    callsGamma: 0.072,
    strikePrice: 183.4,
    putsBid: 11.345,
    putsAsk: 4.123,
    putsLast: 8.901,
    putsDelta: -0.807,
    putsGamma: 0.037
  },
  {
    id: 55,
    callsBid: 6.345,
    callsAsk: 3.789,
    callsLast: 17.89,
    callsDelta: 0.42,
    callsGamma: 0.048,
    strikePrice: 198.5,
    putsBid: 11.234,
    putsAsk: 9.123,
    putsLast: 5.678,
    putsDelta: -0.96,
    putsGamma: 0.073
  }
];

export const microsoftTableData: OptionTableRow[] = [
  {
    id: 56,
    callsBid: 10.987,
    callsAsk: 4.567,
    callsLast: 13.456,
    callsDelta: 0.567,
    callsGamma: 0.089,
    strikePrice: 163.9,
    putsBid: 3.456,
    putsAsk: 2.109,
    putsLast: 10.123,
    putsDelta: -0.789,
    putsGamma: 0.09
  },
  {
    id: 57,
    callsBid: 8.765,
    callsAsk: 3.21,
    callsLast: 7.654,
    callsDelta: 0.678,
    callsGamma: 0.076,
    strikePrice: 181.8,
    putsBid: 7.89,
    putsAsk: 4.321,
    putsLast: 5.432,
    putsDelta: -0.89,
    putsGamma: 0.054
  },
  {
    id: 58,
    callsBid: 5.432,
    callsAsk: 2.987,
    callsLast: 11.234,
    callsDelta: 0.456,
    callsGamma: 0.065,
    strikePrice: 202.5,
    putsBid: 11.345,
    putsAsk: 7.89,
    putsLast: 4.567,
    putsDelta: -0.912,
    putsGamma: 0.087
  },
  {
    id: 59,
    callsBid: 9.012,
    callsAsk: 8.765,
    callsLast: 11.345,
    callsDelta: 0.39,
    callsGamma: 0.103,
    strikePrice: 194.7,
    putsBid: 7.89,
    putsAsk: 10.123,
    putsLast: 9.876,
    putsDelta: -0.901,
    putsGamma: 0.065
  },
  {
    id: 60,
    callsBid: 13.456,
    callsAsk: 16.789,
    callsLast: 10.123,
    callsDelta: 0.913,
    callsGamma: 0.12,
    strikePrice: 176.8,
    putsBid: 10.234,
    putsAsk: 11.345,
    putsLast: 4.567,
    putsDelta: -0.923,
    putsGamma: 0.05
  },
  {
    id: 61,
    callsBid: 14.567,
    callsAsk: 13.456,
    callsLast: 7.89,
    callsDelta: 0.634,
    callsGamma: 0.105,
    strikePrice: 158.6,
    putsBid: 11.345,
    putsAsk: 6.789,
    putsLast: 10.123,
    putsDelta: -0.634,
    putsGamma: 0.065
  },
  {
    id: 62,
    callsBid: 7.89,
    callsAsk: 10.123,
    callsLast: 7.654,
    callsDelta: 1.005,
    callsGamma: 0.051,
    strikePrice: 190.9,
    putsBid: 11.345,
    putsAsk: 10.234,
    putsLast: 3.456,
    putsDelta: -0.965,
    putsGamma: 0.044
  },
  {
    id: 63,
    callsBid: 15.678,
    callsAsk: 6.789,
    callsLast: 6.543,
    callsDelta: 0.816,
    callsGamma: 0.102,
    strikePrice: 192.1,
    putsBid: 11.345,
    putsAsk: 3.21,
    putsLast: 7.89,
    putsDelta: -1.01,
    putsGamma: 0.072
  },
  {
    id: 64,
    callsBid: 16.789,
    callsAsk: 10.345,
    callsLast: 17.654,
    callsDelta: 0.49,
    callsGamma: 0.078,
    strikePrice: 152.7,
    putsBid: 11.345,
    putsAsk: 4.567,
    putsLast: 12.345,
    putsDelta: -0.737,
    putsGamma: 0.111
  },
  {
    id: 65,
    callsBid: 12.345,
    callsAsk: 6.543,
    callsLast: 10.987,
    callsDelta: 0.817,
    callsGamma: 0.083,
    strikePrice: 185.2,
    putsBid: 12.456,
    putsAsk: 5.678,
    putsLast: 9.012,
    putsDelta: -0.918,
    putsGamma: 0.048
  },
  {
    id: 66,
    callsBid: 7.456,
    callsAsk: 4.89,
    callsLast: 18.901,
    callsDelta: 0.531,
    callsGamma: 0.059,
    strikePrice: 200.7,
    putsBid: 12.345,
    putsAsk: 10.234,
    putsLast: 6.789,
    putsDelta: -0.971,
    putsGamma: 0.084
  }
];

export const intelTableData: OptionTableRow[] = [
  {
    id: 67,
    callsBid: 11.987,
    callsAsk: 5.678,
    callsLast: 14.567,
    callsDelta: 0.678,
    callsGamma: 0.09,
    strikePrice: 160.5,
    putsBid: 2.345,
    putsAsk: 1.234,
    putsLast: 11.234,
    putsDelta: -0.89,
    putsGamma: 0.101
  },
  {
    id: 68,
    callsBid: 9.876,
    callsAsk: 4.321,
    callsLast: 8.765,
    callsDelta: 0.789,
    callsGamma: 0.087,
    strikePrice: 182.9,
    putsBid: 6.789,
    putsAsk: 5.432,
    putsLast: 6.543,
    putsDelta: -0.901,
    putsGamma: 0.065
  },
  {
    id: 69,
    callsBid: 6.543,
    callsAsk: 3.21,
    callsLast: 12.345,
    callsDelta: 0.567,
    callsGamma: 0.076,
    strikePrice: 203.1,
    putsBid: 12.456,
    putsAsk: 8.901,
    putsLast: 5.678,
    putsDelta: -0.923,
    putsGamma: 0.098
  },
  {
    id: 70,
    callsBid: 10.123,
    callsAsk: 9.876,
    callsLast: 12.456,
    callsDelta: 0.401,
    callsGamma: 0.114,
    strikePrice: 195.3,
    putsBid: 8.901,
    putsAsk: 11.234,
    putsLast: 10.987,
    putsDelta: -0.912,
    putsGamma: 0.076
  },
  {
    id: 71,
    callsBid: 14.567,
    callsAsk: 17.89,
    callsLast: 11.234,
    callsDelta: 1.024,
    callsGamma: 0.131,
    strikePrice: 177.4,
    putsBid: 11.345,
    putsAsk: 12.456,
    putsLast: 5.678,
    putsDelta: -0.934,
    putsGamma: 0.061
  },
  {
    id: 72,
    callsBid: 15.678,
    callsAsk: 14.567,
    callsLast: 8.901,
    callsDelta: 0.745,
    callsGamma: 0.116,
    strikePrice: 159.8,
    putsBid: 12.456,
    putsAsk: 7.89,
    putsLast: 11.234,
    putsDelta: -0.745,
    putsGamma: 0.076
  },
  {
    id: 73,
    callsBid: 8.901,
    callsAsk: 11.234,
    callsLast: 8.765,
    callsDelta: 1.116,
    callsGamma: 0.062,
    strikePrice: 191.5,
    putsBid: 12.456,
    putsAsk: 11.345,
    putsLast: 4.567,
    putsDelta: -1.076,
    putsGamma: 0.055
  },
  {
    id: 74,
    callsBid: 16.789,
    callsAsk: 7.89,
    callsLast: 7.654,
    callsDelta: 0.927,
    callsGamma: 0.113,
    strikePrice: 193.7,
    putsBid: 12.456,
    putsAsk: 4.321,
    putsLast: 8.901,
    putsDelta: -1.121,
    putsGamma: 0.083
  },
  {
    id: 75,
    callsBid: 17.89,
    callsAsk: 11.456,
    callsLast: 18.765,
    callsDelta: 0.601,
    callsGamma: 0.089,
    strikePrice: 153.3,
    putsBid: 12.456,
    putsAsk: 5.678,
    putsLast: 13.456,
    putsDelta: -0.848,
    putsGamma: 0.122
  },
  {
    id: 76,
    callsBid: 13.456,
    callsAsk: 7.654,
    callsLast: 12.345,
    callsDelta: 0.928,
    callsGamma: 0.094,
    strikePrice: 186.4,
    putsBid: 13.567,
    putsAsk: 6.789,
    putsLast: 10.123,
    putsDelta: -1.029,
    putsGamma: 0.059
  },
  {
    id: 77,
    callsBid: 8.567,
    callsAsk: 5.901,
    callsLast: 19.012,
    callsDelta: 0.642,
    callsGamma: 0.07,
    strikePrice: 201.9,
    putsBid: 13.456,
    putsAsk: 11.345,
    putsLast: 7.89,
    putsDelta: -1.082,
    putsGamma: 0.095
  }
];

export const stockDetailOptionChainTableData: StockDetailsOptionChainRow[] = [
  {
    id: 1,
    callsBid: 25.15,
    callsAsk: 25.3,
    strikePrice: 1656,
    putsBid: 1.25,
    putsAsk: 1.27
  },
  {
    id: 2,
    callsBid: 20.8,
    callsAsk: 20.9,
    strikePrice: 1657,
    putsBid: 1.87,
    putsAsk: 1.89
  },
  {
    id: 3,
    callsBid: 18.9,
    callsAsk: 19,
    strikePrice: 1590,
    putsBid: 2.19,
    putsAsk: 2.26
  }
];
