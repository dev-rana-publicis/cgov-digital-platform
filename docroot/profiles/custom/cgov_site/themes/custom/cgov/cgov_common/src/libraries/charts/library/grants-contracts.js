{/* <style type='text/css'>
  @media only screen and (max-width: 640px) {#container2{height:600px !important}}
  .ui-dialog {max-width: 93vw}
  .ui-dialog .ui-dialog-content {padding:0;overflow:hidden; max-width: 100%}
  .highcharts-container hr {margin:0}
  .highcharts-data-label,.highcharts-point {cursor: pointer}
  .no-results-message {margin: 1.25em}

  @media only print {
    .highcharts-map-navigation,.highcharts-contextbutton {display:none}
    .highcharts-legend-item text {font-weight: normal !important}
  }
  </style>
  <div style="min-width: 310px; height: 450px; margin: 0 auto;" id="NCI-Chart__grants-contracts"></div> */}
import $ from 'jQuery';

const id = 'NCI-Chart__grants-contracts';

var mapData = [{
  "code": "ak",
  "state": "Alaska",
  "grants": {
    "number": 1,
    "amount": 784322
  },
  "contracts": {
    "number": 0,
    "amount": 0
  }
},
{
  "code": "al",
  "state": "Alabama",
  "grants": {
    "number": 67,
    "amount": 36714200
  },
  "contracts": {
    "number": 2,
    "amount": 609176
  },
  "institutions": [{
    "name": "University of Alabama at Birmingham",
    "y": 32933926,
    "drilldown": "AL_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'AL_1',
      "data": [
        ["grants", 32379750],
        ["contracts", 554176]
      ]
    }
  }]
},
{
  "code": "ar",
  "state": "Arkansas",
  "grants": {
    "number": 22,
    "amount": 7633357
  },
  "contracts": {
    "number": 2,
    "amount": 56000
  }
},
{
  "code": "az",
  "state": "Arizona",
  "grants": {
    "number": 56,
    "amount": 40056159
  },
  "contracts": {
    "number": 2,
    "amount": 345067
  },
  "institutions": [{
    "name": "University of Arizona",
    "y": 19233162,
    "drilldown": "AZ_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'AZ_1',
      "data": [
        ["grants", 18990250],
        ["contracts", 242912]
      ]
    }
  }]
},
{
  "code": "ca",
  "state": "California",
  "grants": {
    "number": 965,
    "amount": 588434300
  },
  "contracts": {
    "number": 20,
    "amount": 23757753
  },
  "institutions": [{
    "name": "City of Hope's Beckman Research Institute",
    "y": 44700793,
    "drilldown": "CA_1",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_1",
      "data": [
        ["grants", 44700793]
      ]
    }
  }, {
    "name": "Stanford University",
    "y": 25224059,
    "drilldown": "CA_2",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_2",
      "data": [
        ["grants", 25224059]
      ]
    }
  }, {
    "name": "University of  California San Francisco",
    "y": 46493738,
    "drilldown": "CA_3",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_3",
      "data": [
        ["grants", 46493738]
      ]
    }
  }, {
    "name": "University of California Davis",
    "y": 65257423,
    "drilldown": "CA_4",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_4",
      "data": [
        ["grants", 60921453],
        ["contracts", 4335970]
      ]
    }
  }, {
    "name": "University of California Los Angeles",
    "y": 69445862,
    "drilldown": "CA_5",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_5",
      "data": [
        ["grants", 69337211],
        ["contracts", 108651]

      ]
    }
  }, {
    "name": "University of California San Diego",
    "y": 23261790,
    "drilldown": "CA_6",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_6",
      "data": [
        ["grants", 23261790]
      ]
    }
  },
  {
    "name": "University of Southern California",
    "y": 47185137,
    "drilldown": "CA_7",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_7",
      "data": [
        ["grants", 47185137]
      ]
    }
  },
  {
    "name": "University of California-Irvine",
    "y": 104782706,
    "drilldown": "CA_8",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_7",
      "data": [
        ["grants", 100097873],
        ["contracts", 4684833]

      ]
    }
  },
  {
    "name": "Cedars-Sinai Medical Center",
    "y": 16850072,
    "drilldown": "CA_9",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_7",
      "data": [
        ["grants", 16850072]]
    }
  },
  {
    "name": "Kaiser Foundation Research Institute",
    "y": 20944317,
    "drilldown": "CA_10",
    "drilldown_data": {
      "name": "Total",
      "id": "CA_8",
      "data": [
        ["grants", 20944317]
      ]
    }
  }]
},
{
  "code": "co",
  "state": "Colorado",
  "grants": {
    "number": 98,
    "amount": 37769184
  },
  "contracts": {
    "number": 1,
    "amount": 1000
  },
  "institutions": [{
    "name": "University of Colorado Denver",
    "y": 36289399,
    "drilldown": "CO_1",
    "drilldown_data": {
      "name": "Total",
      "id": "CO_1",
      "data": [
        ["grants", 32246684],
        ["contracts", 4042715]

      ]
    }
  }]
},
{
  "code": "ct",
  "state": "Connecticut",
  "grants": {
    "number": 124,
    "amount": 57681665
  },
  "contracts": {
    "number": 2,
    "amount": 3170248
  },
  "institutions": [{
    "name": "Yale University",
    "y": 28593146,
    "drilldown": "CT_1",
    "drilldown_data": {
      "name": "Total",
      "id": "CT_1",
      "data": [
        ["grants", 28593146]
      ]
    }
  }]
},
{
  "code": "dc",
  "state": "District Of Columbia",
  "grants": {
    "number": 69,
    "amount": 34215156
  },
  "contracts": {
    "number": 9,
    "amount": 3294378
  }
},
{
  "code": "de",
  "state": "Delaware",
  "grants": {
    "number": 6,
    "amount": 5157832
  },
  "contracts": {
    "number": 0,
    "amount": 0
  }
},
{
  "code": "fl",
  "state": "Florida",
  "grants": {
    "number": 200,
    "amount": 91778257
  },
  "contracts": {
    "number": 4,
    "amount": 2465477
  },
  "institutions": [{
    "name": "H. Lee Moffitt Cancer Center & Research Institute",
    "y": 48995508,
    "drilldown": "FL_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'FL_1',
      "data": [
        ["grants", 48995508]
      ]
    }
  }, {
    "name": "University of Miami School of Medicine",
    "y": 16388564,
    "drilldown": "FL_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'FL_2',
      "data": [
        ["grants", 16388564]
      ]
    }
  }],
},
{
  "code": "ga",
  "state": "Georgia",
  "grants": {
    "number": 122,
    "amount": 55011549
  },
  "contracts": {
    "number": 5,
    "amount": 5284513
  },
  "institutions": [{
    "name": "Emory University",
    "y": 41282544,
    "drilldown": "GA_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'GA_1',
      "data": [
        ["grants", 41282544]]
    }
  }]
},
{
  "code": "hi",
  "state": "Hawaii",
  "grants": {
    "number": 17,
    "amount": 14729016
  },
  "contracts": {
    "number": 1,
    "amount": 1557557
  }
},
{
  "code": "id",
  "state": "Idaho",
  "grants": {
    "number": 0,
    "amount": 0
  },
  "contracts": {
    "number": 1,
    "amount": 521188
  }
},
{
  "code": "il",
  "state": "Illinois",
  "grants": {
    "number": 250,
    "amount": 136009783
  },
  "contracts": {
    "number": 12,
    "amount": 7626037
  },
  "institutions": [{
    "name": "Northwestern University at Chicago",
    "y": 16429459,
    "drilldown": "IL_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'IL_1',
      "data": [
        ["grants", 16429459]]
    }
  }, {
    "name": "University of Chicago",
    "y": 33104681,
    "drilldown": "IL_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'IL_2',
      "data": [
        ["grants", 29997018],
        ["contracts", 3107663]
      ]
    }
  }]
},
{
  "code": "in",
  "state": "Indiana",
  "grants": {
    "number": 82,
    "amount": 36646382
  },
  "contracts": {
    "number": 1,
    "amount": 136666
  },
  "institutions": [{
    "name": "Indiana University - Purdue Univ at Indianapolis",
    "y": 51021265,
    "drilldown": "IN_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'IN_1',
      "data": [
        ["grants", 50193950],
        ["contracts", 827315]
      ]
    }
  }]
},
{
  "code": "ia",
  "state": "Iowa",
  "grants": {
    "number": 34,
    "amount": 22562761
  },
  "contracts": {
    "number": 1,
    "amount": 4162658
  },
  "institutions": [{
    "name": "University of Iowa",
    "y": 38531208,
    "drilldown": "IA_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'IA_1',
      "data": [
        ["grants", 38531208]
      ]
    }
  }]
},
{
  "code": "ks",
  "state": "Kansas",
  "grants": {
    "number": 15,
    "amount": 9743738
  },
  "contracts": {
    "number": 0,
    "amount": 0
  }
},
{
  "code": "ky",
  "state": "Kentucky",
  "grants": {
    "number": 54,
    "amount": 22427109
  },
  "contracts": {
    "number": 2,
    "amount": 2723444
  },
  "institutions": [{
    "name": "University of Kentucky",
    "y": 21538078,
    "drilldown": "KY_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'KY_1',
      "data": [
        ["grants", 21401412],
        ["contracts", 136666]
      ]
    }
  }]
},
{
  "code": "la",
  "state": "Louisiana",
  "grants": {
    "number": 28,
    "amount": 10763030
  },
  "contracts": {
    "number": 1,
    "amount": 1772202
  }
},
{
  "code": "ma",
  "state": "Massachusetts",
  "grants": {
    "number": 725,
    "amount": 406169072
  },
  "contracts": {
    "number": 6,
    "amount": 5940126
  },
  "institutions": [{
    "name": "Beth Israel Deaconess Medical Center",
    "y": 22432106,
    "drilldown": "MA_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'MA_1',
      "data": [
        ["grants", 19763662],
        ["contracts", 2668444]
      ]
    }
  }, {
    "name": "Brigham and Women's Hospital",
    "y": 77210034,
    "drilldown": "MA_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'MA_2',
      "data": [
        ["grants", 71709048],
        ["contracts", 5500986]
      ]
    }
  }, {
    "name": "Dana-Farber Cancer Institute",
    "y": 19604561,
    "drilldown": "MA_3",
    "drilldown_data": {
      "name": "Total",
      "id": 'MA_3',
      "data": [
        ["grants", 19604561]
      ]
    }
  }, {
    "name": "Harvard University",
    "y": 48628956,
    "drilldown": "MA_4",
    "drilldown_data": {
      "name": "Total",
      "id": 'MA_4',
      "data": [
        ["grants", 48628956]
      ]
    }
  }, {
    "name": "Massachusetts General Hospital",
    "y": 18787866,
    "drilldown": "MA_5",
    "drilldown_data": {
      "name": "Total",
      "id": 'MA_5',
      "data": [
        ["grants", 16480773],
        ["contracts", 2307093]
      ]
    }
  }, {
    "name": "Massachusetts Institute of Technology",
    "y": 121567021,
    "drilldown": "MA_6",
    "drilldown_data": {
      "name": "Total",
      "id": 'MA_6',
      "data": [
        ["grants", 121567021]
      ]
    }
  }, {
    "name": "Broad Institute",
    "y": 17883464,
    "drilldown": "MA_7",
    "drilldown_data": {
      "name": "Total",
      "id": 'MA_7',
      "data": [
        ["grants", 17883464]
      ]
    }
  }]
},
{
  "code": "md",
  "state": "Maryland",
  "grants": {
    "number": 190,
    "amount": 96482876
  },
  "contracts": {
    "number": 46,
    "amount": 518828181
  },
  "institutions": [{
    "name": "The Johns Hopkins University",
    "y": 20275620,
    "drilldown": "MD_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'MD_1',
      "data": [
        ["grants", 16112962],
        ["contracts", 4162658]
      ]
    }
  }]
},
{
  "code": "me",
  "state": "Maine",
  "grants": {
    "number": 20,
    "amount": 11845729
  },
  "contracts": {
    "number": 0,
    "amount": 0
  }
},
{
  "code": "mi",
  "state": "Michigan",
  "grants": {
    "number": 205,
    "amount": 105286540
  },
  "contracts": {
    "number": 3,
    "amount": 53087
  },
  "institutions": [{
    "name": "University of Michigan at Ann Arbor",
    "y": 68551984,
    "drilldown": "MI_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'MI_1',
      "data": [
        ["grants", 68551984]
      ]
    }
  }]
},
{
  "code": "mn",
  "state": "Minnesota",
  "grants": {
    "number": 163,
    "amount": 97970990
  },
  "contracts": {
    "number": 7,
    "amount": 1575739
  },
  "institutions": [{
    "name": "Mayo Clinic in Rochester",
    "y": 21706011,
    "drilldown": "MN_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'MN_1',
      "data": [
        ["grants", 21706011]]
    }
  }, {
    "name": "University of Minnesota",
    "y": 71603851,
    "drilldown": "MN_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'MN_2',
      "data": [
        ["grants", 71603851]
      ]
    }
  }]
},
{
  "code": "mo",
  "state": "Missouri",
  "grants": {
    "number": 135,
    "amount": 72196144
  },
  "contracts": {
    "number": 4,
    "amount": 4391995
  },
  "institutions": [{
    "name": "Washington University",
    "y": 51046843,
    "drilldown": "MO_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'MO_1',
      "data": [
        ["grants", 50490089],
        ["contracts", 556754]
      ]
    }
  }]
},
{
  "code": "ms",
  "state": "Mississippi",
  "grants": {
    "number": 1,
    "amount": 397445
  },
  "contracts": {
    "number": 0,
    "amount": 0
  }
},
{
  "code": "mt",
  "state": "Montana",
  "grants": {
    "number": 3,
    "amount": 1388885
  },
  "contracts": {
    "number": 0,
    "amount": 0
  }
},
{
  "code": "nc",
  "state": "North Carolina",
  "grants": {
    "number": 269,
    "amount": 138090932
  },
  "contracts": {
    "number": 5,
    "amount": 1615708
  },
  "institutions": [{
    "name": "Duke University",
    "y": 39364923,
    "drilldown": "NC_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'NC_1',
      "data": [
        ["grants", 39364923]
      ]
    }
  }, {
    "name": "University of North Carolina at Chapel Hill",
    "y": 41408879,
    "drilldown": "NC_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'NC_2',
      "data": [
        ["grants", 41408879]
      ]
    }
  }, {
    "name": "Wake Forest University Health Sciences",
    "y": 61624708,
    "drilldown": "NC_3",
    "drilldown_data": {
      "name": "Total",
      "id": 'NC_3',
      "data": [
        ["grants", 60567877],
        ["contracts", 1056831]
      ]
    }
  }]
},
{
  "code": "nd",
  "state": "North Dakota",
  "grants": {
    "number": 258,
    "amount": 129653558
  },
  "contracts": {
    "number": 5,
    "amount": 1433807
  }
},
{
  "code": "ne",
  "state": "Nebraska",
  "grants": {
    "number": 43,
    "amount": 20863288
  },
  "contracts": {
    "number": 0,
    "amount": 0
  },
  "institutions": [{
    "name": "University of Nebraska Medical Center",
    "y": 39206663,
    "drilldown": "NE_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'NE_1',
      "data": [
        ["grants", 38977851],
        ["contracts", 228812]
      ]
    }
  }]
},
{
  "code": "nh",
  "state": "New Hampshire",
  "grants": {
    "number": 34,
    "amount": 17839375
  },
  "contracts": {
    "number": 2,
    "amount": 56000
  },
  "institutions": [{
    "name": "Dartmouth College",
    "y": 62502393,
    "drilldown": "NH_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'NH_1',
      "data": [
        ["grants", 62502393]
      ]
    }
  }]
},
{
  "code": "nj",
  "state": "New Jersey",
  "grants": {
    "number": 78,
    "amount": 39267743
  },
  "contracts": {
    "number": 4,
    "amount": 11212602
  },
  "institutions": [{
    "name": "RBHS - Cancer Institute of New Jersey",
    "y": 19667679,
    "drilldown": "NJ_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'NJ_1',
      "data": [
        ["grants", 19667679]
      ]
    }
  }]
},

{
  "code": "nm",
  "state": "New Mexico",
  "grants": {
    "number": 19,
    "amount": 13076176
  },
  "contracts": {
    "number": 1,
    "amount": 2649530
  }
},
{
  "code": "nv",
  "state": "Nevada",
  "grants": {
    "number": 3,
    "amount": 2259468
  },
  "contracts": {
    "number": 0,
    "amount": 0
  }
},
{
  "code": "ny",
  "state": "New York",
  "grants": {
    "number": 851,
    "amount": 477886910
  },
  "contracts": {
    "number": 6,
    "amount": 9243747
  },
  "institutions": [{
    "name": "Albert Einstein College of Medicine",
    "y": 19962861,
    "drilldown": "NY_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'NY_1',
      "data": [
        ["grants", 19962861]
      ]
    }
  }, {
    "name": "Columbia University Health Sciences",
    "y": 21126382,
    "drilldown": "NY_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'NY_2',
      "data": [
        ["grants", 21126382]
      ]
    }
  }, {
    "name": "Icahn School of Medicine at Mount Sinai",
    "y": 15441328,
    "drilldown": "NY_3",
    "drilldown_data": {
      "name": "Total",
      "id": 'NY_3',
      "data": [
        ["grants", 15441328]
      ]
    }
  }, {
    "name": "New York University School of Medicine",
    "y": 59410916,
    "drilldown": "NY_4",
    "drilldown_data": {
      "name": "Total",
      "id": 'NY_4',
      "data": [
        ["grants", 59410916]
      ]
    }
  }, {
    "name": "Roswell Park Cancer Institute Corporation",
    "y": 62777199,
    "drilldown": "NY_5",
    "drilldown_data": {
      "name": "Total",
      "id": 'NY_5',
      "data": [
        ["grants", 62777199]
      ]
    }
  }, {
    "name": "Sloan-Kettering Institute for Cancer Research",
    "y": 43204894,
    "drilldown": "NY_6",
    "drilldown_data": {
      "name": "Total",
      "id": 'NY_6',
      "data": [
        ["grants", 43204894]
      ]
    }
  }, {
    "name": "Weill Medical College of Cornell Univ",
    "y": 31866963,
    "drilldown": "NY_7",
    "drilldown_data": {
      "name": "Total",
      "id": 'NY_7',
      "data": [
        ["grants", 31866963]
      ]
    }
  }, {
    "name": "Montefiore Medical Center - Bronx, NY",
    "y": 128425418,
    "drilldown": "NY_7",
    "drilldown_data": {
      "name": "Total",
      "id": 'NY_7',
      "data": [
        ["grants", 128425418]
      ]
    }
  }, {
    "name": "University of Rochester",
    "y": 16024954,
    "drilldown": "NY_8",
    "drilldown_data": {
      "name": "Total",
      "id": 'NY_8',
      "data": [
        ["grants", 16024954]
      ]
    }
  },]
},
{
  "code": "oh",
  "state": "Ohio",
  "grants": {
    "number": 34,
    "amount": 16255858
  },
  "contracts": {
    "number": 2,
    "amount": 2289369
  },
  "institutions": [{
    "name": "Case Western Reserve University",
    "y": 19710872,
    "drilldown": "OH_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'OH_1',
      "data": [
        ["grants", 19681021],
        ["contracts", 29851]
      ]
    }
  }, {
    "name": "Ohio State University",
    "y": 33787259,
    "drilldown": "OH_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'OH_2',
      "data": [
        ["grants", 33787259]]
    }
  }]
},
{
  "code": "ok",
  "state": "Oklahoma",
  "grants": {
    "number": 80,
    "amount": 53986726
  },
  "contracts": {
    "number": 1,
    "amount": 1000
  },
  "institutions": [{
    "name": "University of Oklahoma Health Sciences",
    "y": 45258708,
    "drilldown": "OK_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'OK_1',
      "data": [
        ["grants", 45072648],
        ["contracts", 186060]
      ]
    }
  }]
},
{
  "code": "or",
  "state": "Oregon",
  "grants": {
    "number": 463,
    "amount": 262633102
  },
  "contracts": {
    "number": 4,
    "amount": 366422
  },
  "institutions": [{
    "name": "Oregon Health and Science University",
    "y": 16879994,
    "drilldown": "OR_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'OR_1',
      "data": [
        ["grants", 16731444],
        ["contracts", 148550]
      ]
    }
  }]
},
{
  "code": "pa",
  "state": "Pennsylvania",
  "grants": {
    "number": 17,
    "amount": 6553180
  },
  "contracts": {
    "number": 0,
    "amount": 0
  },
  "institutions": [{
    "name": "Children's Hosp of Philadelphia",
    "y": 45317286,
    "drilldown": "PA_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'PA_1',
      "data": [
        ["grants", 45317286]
      ]
    }
  }, {
    "name": "ECOG-ACRIN Medical Research Foundation",
    "y": 24491948,
    "drilldown": "PA_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'PA_2',
      "data": [
        ["grants", 24491948]
      ]
    }
  }, {
    "name": "NRG Oncology Foundation, INC",
    "y": 26635389,
    "drilldown": "PA_3",
    "drilldown_data": {
      "name": "Total",
      "id": 'PA_3',
      "data": [
        ["grants", 26635389]
      ]
    }
  }, {
    "name": "University of Pennsylvania",
    "y": 18683318,
    "drilldown": "PA_4",
    "drilldown_data": {
      "name": "Total",
      "id": 'PA_4',
      "data": [
        ["grants", 18683318]
      ]
    }
  }, {
    "name": "University of Pittsburgh",
    "y": 67837135,
    "drilldown": "PA_5",
    "drilldown_data": {
      "name": "Total",
      "id": 'PA_5',
      "data": [
        ["grants", 67837135]]
    }
  }, {
    "name": "Wistar Institute",
    "y": 53938629,
    "drilldown": "PA_6",
    "drilldown_data": {
      "name": "Total",
      "id": 'PA_6',
      "data": [
        ["grants", 53682393],
        ["contracts", 256236]
      ]
    }
  }, {
    "name": "Thomas Jefferson University",
    "y": 20974090,
    "drilldown": "PA_7",
    "drilldown_data": {
      "name": "Total",
      "id": 'PA_7',
      "data": [
        ["grants", 20974090]
      ]
    }
  }]
},
{
  "code": "ri",
  "state": "Rhode Island",
  "grants": {
    "number": 62,
    "amount": 34396472
  },
  "contracts": {
    "number": 0,
    "amount": 0
  }
},
{
  "code": "sc",
  "state": "South Carolina",
  "grants": {
    "number": 3,
    "amount": 1416538
  },
  "contracts": {
    "number": 0,
    "amount": 0
  },
  "institutions": [{
    "name": "Medical University of South Carolina",
    "y": 23495116,
    "drilldown": "SC_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'SC_1',
      "data": [
        ["grants", 23495116]
      ]
    }
  }]
},
{
  "code": "sd",
  "state": "South Dakota",
  "grants": {
    "number": 183,
    "amount": 108001670
  },
  "contracts": {
    "number": 5,
    "amount": 3958571
  }
},
{
  "code": "tn",
  "state": "Tennessee",
  "grants": {
    "number": 558,
    "amount": 274446762
  },
  "contracts": {
    "number": 4,
    "amount": 4723822
  },
  "institutions": [{
    "name": "St. Jude Children's Research Hospital",
    "y": 39556023,
    "drilldown": "TN_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'TN_1',
      "data": [
        ["grants", 39556023]
      ]
    }
  }, {
    "name": "Vanderbilt University Medical Center",
    "y": 17211625,
    "drilldown": "TN_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'TN_2',
      "data": [
        ["grants", 17211625]
      ]
    }
  }, {
    "name": "Vanderbilt University",
    "y": 41703913,
    "drilldown": "TN_3",
    "drilldown_data": {
      "name": "Total",
      "id": 'TN_3',
      "data": [
        ["grants", 41703913]
      ]
    }
  }]
},
{
  "code": "tx",
  "state": "Texas",
  "grants": {
    "number": 80,
    "amount": 31261237
  },
  "contracts": {
    "number": 2,
    "amount": 2585808
  },
  "institutions": [{
    "name": "Baylor College of Medicine",
    "y": 48124319,
    "drilldown": "TX_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'TX_1',
      "data": [
        ["grants", 48124319]
      ]
    }
  }, {
    "name": "University of Texas, MD Anderson Cancer Center",
    "y": 122903947,
    "drilldown": "TX_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'TX_2',
      "data": [
        ["grants", 119042246],
        ["contracts", 3861701]
      ]
    }
  },
  {
    "name": "University of Texas Health Sciences Center",
    "y": 16858349,
    "drilldown": "TX_3",
    "drilldown_data": {
      "name": "Total",
      "id": 'TX_3',
      "data": [
        ["grants", 16858349],
      ]
    }
  }, {
    "name": "UT Southwestern Medical Center",
    "y": 47091819,
    "drilldown": "TX_4",
    "drilldown_data": {
      "name": "Total",
      "id": 'TX_4',
      "data": [
        ["grants", 47091819]
      ]
    }
  }]
},
{
  "code": "ut",
  "state": "Utah",
  "grants": {
    "number": 9,
    "amount": 6303528
  },
  "contracts": {
    "number": 2,
    "amount": 419715
  },
  "institutions": [{
    "name": "University of Utah",
    "y": 33297045,
    "drilldown": "UT_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'UT_1',
      "data": [
        ["grants", 31111237],
        ["contracts", 2185808]
      ]
    }
  }]
},
{
  "code": "va",
  "state": "Virginia",
  "grants": {
    "number": 217,
    "amount": 150377688
  },
  "contracts": {
    "number": 5,
    "amount": 6209625
  },
  "institutions": [{
    "name": "University of Virginia",
    "y": 19552038,
    "drilldown": "VA_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'VA_1',
      "data": [
        ["grants", 19552038]
      ]
    }
  }]
},
{
  "code": "vt",
  "state": "Vermont",
  "grants": {
    "number": 95,
    "amount": 53081747
  },
  "contracts": {
    "number": 20,
    "amount": 50676441
  }
},
{
  "code": "wa",
  "state": "Washington",
  "grants": {
    "number": 6,
    "amount": 1386871
  },
  "contracts": {
    "number": 0,
    "amount": 0
  },
  "institutions": [{
    "name": "Fred Hutchinson Cancer Research Center",
    "y": 15760039,
    "drilldown": "WA_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'WA_1',
      "data": [
        ["grants", 15760039]]
    }
  }, {
    "name": "University of Washington",
    "y": 98582731,
    "drilldown": "WA_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'WA_2',
      "data": [
        ["grants", 93455655],
        ["contracts", 5127076]
      ]
    }
  }]
},
{
  "code": "wi",
  "state": "Wisconsin",
  "grants": {
    "number": 1,
    "amount": 186018
  },
  "contracts": {
    "number": 0,
    "amount": 0
  },
  "institutions": [{
    "name": "University of Wisconsin - Madison",
    "y": 29078266,
    "drilldown": "WI_1",
    "drilldown_data": {
      "name": "Total",
      "id": 'WI_1',
      "data": [
        ["grants", 29078266]]
    }
  }, {
    "name": "Medical College of Wisconsin",
    "y": 19656558,
    "drilldown": "WI_2",
    "drilldown_data": {
      "name": "Total",
      "id": 'WI_2',
      "data": [
        ["grants", 19656558]
      ]
    }
  }]
},
{
  "code": "wv",
  "state": "West Virginia",
  "grants": {
    "number": 106,
    "amount": 71302138
  },
  "contracts": {
    "number": 3,
    "amount": 1611525
  }
},
{
  "code": "wy",
  "state": "Wyoming",
  "grants": {
    "number": 0,
    "amount": 0
  },
  "contracts": {
    "number": 0,
    "amount": 0
  }
}
];

// store all our modal popups for manipulation later
var popups = [];

function repositionModals(e) {
  var windowWidth = window.document.body.getBoundingClientRect().width;
  popups.forEach(function (popup) {
    var popupElement = popup.get(0);
    var popupDimensions = popupElement.getBoundingClientRect();
    var overflowRight = windowWidth - popupDimensions.right;
    if (overflowRight < 0) {
      popup.css({ right: 0, left: 'auto' });
    }
    else {
      popup.css({ right: '', left: Math.floor(popupDimensions.left) + 'px' });
    }
  })
}

window.addEventListener('resize', repositionModals);

function initChart(Chart) {
  $.each(mapData, function () {
    this.code = this.code.toUpperCase();
    // TODO: logarithmic values cannot be 0 or negative numbers
    this.value = this.grants.amount + this.contracts.amount || 0.00001;
  });

  var dialogOffset = 0;

  new Chart(id, {
    chart: {
      type: 'map',
      map: 'countries/us/us-all',
      borderWidth: 1
    },

    title: {
      text: 'Grant and Contract Awards by State and Institution, FY 2021'
    },

    credits: {
      mapText: '',
      mapTextFull: ''
    },

    exporting: {
      sourceWidth: 600,
      sourceHeight: 500
    },

    legend: {
      layout: 'horizontal',
      borderWidth: 0,
      backgroundColor: '#fff',
      floating: false,
      verticalAlign: 'top',
      margin: 0
    },

    mapNavigation: {
      enabled: true
    },

    colorAxis: {
      min: 10000000,
      type: 'logarithmic',
      minColor: '#E2F0F4',
      maxColor: '#00181D',
      stops: [
        [0, '#E2F0F4'],
        [0.6, '#24748B'],
        [1, '#00181D']
      ]
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 640
        },
        chartOptions: {
          mapNavigation: {
            enabled: false
          }
        }
      }]
    },
    tooltip: {
      //pointFormat_old: '{point.code}: ${point.value}',
      useHTML: true,
      formatter: function () {
        var header = '<div><div style="font-size: 13px;margin-bottom:3px">' + this.point
          .options.state +
          '</div><table style="border-collapse:collapse;margin: 0 auto">';
        var template = '<tr><td>Grants (' + this.point.grants.number +
          '): </td><td align="right"><b>$' + Highcharts.numberFormat(this.point.grants
            .amount, 0) + '</b></td></tr><tr><td>Contracts (' + this.point.contracts
            .number + '): </td><td align="right"><b>$' + Highcharts.numberFormat(this
              .point.contracts.amount, 0) +
          '</b></td></tr><tr><td style="border-top: 1px solid #000;">' + this.series
            .name +
          ':</td><td style="border-top: 1px solid #000;" align="right"><b>$' +
          Highcharts.numberFormat(this.point.value, 0) + '</b></td></tr>';
        var footer = '</table></div>';

        return header + template + footer
      }
    },

    series: [{
      animation: {
        duration: 1000
      },
      data: mapData,
      joinBy: ['postal-code', 'code'],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        format: '{point.code}'
      },
      name: 'Total Awarded',
      point: {
        events: {
          // mouseOver: function (event) {
          //   if (this.options.institutions) {
          //     this.graphic.element.style.cursor = 'pointer';
          //   }
          // },
          click: function () {

            // if there are institutions for this state then render a PIE chart
            if (this.options.institutions) {

              function renderPieChart(options) {
                // pie chart drill down showing institutions
                var modalChart = new Highcharts.Chart({
                  chart: {
                    renderTo: $modal[0],
                    type: 'pie'
                  },
                  colors: [
                    '#40bfa2',
                    '#c434b7',
                    '#fb7830',
                    '#01acc8',
                    '#2A71A4',
                    '#82378C',
                    '#BB0E3C',
                    '#FE9F65',
                    '#7F99B4',
                    '#80DDC2',
                    '#329FBE',
                    '#706E6F',
                    '#1C4A79'
                  ],
                  plotOptions: {
                    pie: {
                      allowPointSelect: isInteractive,
                      cursor: isInteractive ? 'pointer' : 'default',
                      dataLabels: {
                        enabled: true,
                        format: '{point.percentage:.1f}%',
                        distance: 15
                      },
                      point: {
                        events: {
                          legendItemClick: function () {
                            return false; // <== returning false will cancel the default action
                          }
                        }
                      },
                      events: {
                        afterAnimate: function () {
                          var chart = this.chart;
                          var legend = chart.legend;
                          var tooltip = this.chart.tooltip;
                          Object.keys(legend.allItems).forEach(function (
                            key) {
                            var item = legend.allItems[key];
                            item.legendItem.on('mouseover', function (
                              e) {
                              var data = item.series.data[item.index];
                              tooltip.refresh(data);
                            }).on('mouseout', function (e) {
                              tooltip.hide();
                            });
                          });
                        }
                      }
                    }
                  },
                  legend: {
                    enabled: true
                  },
                  title: {
                    text: "Institutions"
                  },
                  subtitle: {
                    text: "Receiving More Than $15 Million in NCI Support",
                    style: {
                      fontFamily: "DIN Regular, Arial, sans-serif",
                      fontSize: '14px',
                      fontWeight: 'normal'
                    }
                  },
                  tooltip: {
                    //pointFormat_old: '{point.code}: ${point.value}',
                    useHTML: true,
                    formatter: function () {
                      var data = this.point.options.drilldown_data.data;
                      var header =
                        '<div style="text-align:center"><div style="font-size:13px;font-weight:bold;margin-bottom:3px">' +
                        this.point.options.name +
                        '</div><table style="border-collapse:collapse;margin:0 auto">';
                      var grants = data[0] && data[0][1] || 0;
                      var contracts = data[1] && data[1][1] || 0;

                      var template =
                        '<tr><td>Grants:</td><td align="right"><b>$' +
                        Highcharts.numberFormat(
                          grants, 0) +
                        '</b></td></tr><tr><td>Contracts:</td><td align="right"><b>$' +
                        Highcharts.numberFormat(
                          contracts, 0) +
                        '</b></td></tr><tr><td style="border-top: 1px solid #000;">Total:</td><td style="border-top: 1px solid #000;" align="right"><b>$' +
                        Highcharts.numberFormat(this.y, 0) +
                        '</b></td></tr>';
                      var footer = '</table></div>';

                      return header + template + footer
                    }

                  },
                  series: [{
                    name: "Total",
                    data: options.institutions,
                    showInLegend: true
                  }]
                });
                return modalChart;
              }

              var $modal;
              var modalId = 'institution_' + this.options.code;

              if ($("#" + modalId)[0]) {
                $modal = $("#" + modalId);
                if ($modal.dialog("isOpen")) {
                  $modal.dialog("moveToTop");
                } else {
                  $modal.dialog("open");
                  // window.chart.redraw() not working as expected;
                  //renderPieChart(this.options);
                  //$modal.data("chart").reflow();
                }

              } else {
                var $modal = $('<div id="' + modalId + '"></div>')
                  .dialog({
                    title: this.name,
                    minWidth: 400,
                    minHeight: 530,
                    position: {
                      my: "center",
                      at: "center+" + dialogOffset + "px center+" +
                        dialogOffset + "px",
                      of: window
                    },
                    resize: function (event, ui) {
                      $modal.data("chart").reflow();
                    },
                    open: function (event, ui) {
                      if (window.matchMedia("(min-width: 600px)").matches) {
                        dialogOffset += 20;
                      } else {
                        dialogOffset = 0;
                      }
                    }
                  });

                this.options.institutions.map(function (item) {
                  item.drilldown = null
                });
                var isInteractive = this.options.institutions.length > 2;

                $modal.data("chart", renderPieChart(this.options));
                var $modalWrapper = $modal.closest('.ui-dialog');
                popups.push($modalWrapper);
              }
            } else {
              // there are no institutions so render a popup notification
              console.log("no institutions!");
              var $modal;
              var modalId = 'no_institutions';

              if ($("#" + modalId)[0]) {
                $modal = $("#" + modalId);
                $modal.dialog("option", { title: this.name });
                if ($modal.dialog("isOpen")) {
                  $modal.dialog("moveToTop");
                } else {
                  $modal.dialog("open");
                }
              } else {
                var message = "This state does not have any individual university or center receiving more than $15 million in NCI support.";
                var $modal = $('<div id="' + modalId + '"><p class="no-results-message">' + message + '</p></div>')
                  .dialog({
                    title: this.name,
                    minWidth: 400,
                    minHeight: 200,
                    position: {
                      my: "center",
                      at: "center+" + dialogOffset + "px center+" + dialogOffset + "px",
                      of: window
                    },
                    open: function (event, ui) {
                      if (window.matchMedia("(min-width: 600px)").matches) {
                        dialogOffset += 20;
                      } else {
                        dialogOffset = 0;
                      }
                    }
                  });
              }
            }
          }
        }
      }
    }]
  }); //END new Chart
}


export default {
  id,
  initChart
};
