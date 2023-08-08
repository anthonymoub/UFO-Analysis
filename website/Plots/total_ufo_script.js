(async () => {

  const topology = await fetch(
    'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
  ).then(response => response.json());

  var data = [
    {
        "value": 2574,
        "code": "nj"
    },
    {
        "value": 558,
        "code": "ri"
    },
    {
        "value": 2413,
        "code": "ma"
    },
    {
        "value": 1731,
        "code": "ct"
    },
    {
        "value": 1642,
        "code": "md"
    },
    {
        "value": 5242,
        "code": "ny"
    },
    {
        "value": 378,
        "code": "de"
    },
    {
        "value": 7437,
        "code": "fl"
    },
    {
        "value": 3923,
        "code": "oh"
    },
    {
        "value": 4493,
        "code": "pa"
    },
    {
        "value": 3864,
        "code": "il"
    },
    {
        "value": 14657,
        "code": "ca"
    },
    {
        "value": 614,
        "code": "hi"
    },
    {
        "value": 2406,
        "code": "va"
    },
    {
        "value": 3262,
        "code": "mi"
    },
    {
        "value": 2192,
        "code": "in"
    },
    {
        "value": 3383,
        "code": "nc"
    },
    {
        "value": 2445,
        "code": "ga"
    },
    {
        "value": 2071,
        "code": "tn"
    },
    {
        "value": 1044,
        "code": "nh"
    },
    {
        "value": 2055,
        "code": "sc"
    },
    {
        "value": 1016,
        "code": "la"
    },
    {
        "value": 1530,
        "code": "ky"
    },
    {
        "value": 2283,
        "code": "wi"
    },
    {
        "value": 6194,
        "code": "wa"
    },
    {
        "value": 1231,
        "code": "al"
    },
    {
        "value": 2481,
        "code": "mo"
    },
    {
        "value": 5504,
        "code": "tx"
    },
    {
        "value": 809,
        "code": "wv"
    },
    {
        "value": 562,
        "code": "vt"
    },
    {
        "value": 1924,
        "code": "mn"
    },
    {
        "value": 705,
        "code": "ms"
    },
    {
        "value": 1102,
        "code": "ia"
    },
    {
        "value": 1066,
        "code": "ar"
    },
    {
        "value": 1328,
        "code": "ok"
    },
    {
        "value": 4542,
        "code": "az"
    },
    {
        "value": 2891,
        "code": "co"
    },
    {
        "value": 1069,
        "code": "me"
    },
    {
        "value": 3173,
        "code": "or"
    },
    {
        "value": 1042,
        "code": "ks"
    },
    {
        "value": 1381,
        "code": "ut"
    },
    {
        "value": 624,
        "code": "ne"
    },
    {
        "value": 1525,
        "code": "nv"
    },
    {
        "value": 1183,
        "code": "id"
    },
    {
        "value": 1485,
        "code": "nm"
    },
    {
        "value": 341,
        "code": "sd"
    },
    {
        "value": 225,
        "code": "nd"
    },
    {
        "value": 881,
        "code": "mt"
    },
    {
        "value": 368,
        "code": "wy"
    },
    {
        "value": 572,
        "code": "ak"
    }
]

  

    // Make codes uppercase to match the map data
    data.forEach(function (p) {
      p.code = p.code.toUpperCase();
    });

    // Instantiate the map
    geospatial1 = Highcharts.mapChart('geo1', {

      chart: {
        map: topology,
        borderWidth: 0
      },

      title: {
        text: 'Total UFO Sightings across the United States (1973-2023)'
      },

      exporting: {
        sourceWidth: 600,
        sourceHeight: 500
      },

      legend: {
        layout: 'horizontal',
        borderWidth: 0,
        backgroundColor: 'rgb(255,255,255)',
        floating: true,
        verticalAlign: 'top',
        y: 40
      },

      mapNavigation: {
        enabled: true
      },

      colorAxis: {
        min: 1,
        type: 'linear',
        minColor: '#A4C3DA',
        maxColor: '#05163B',
        stops: [
          [0.1, '#A4C3DA'],
          [0.3, '#5285A2'],
          [0.6, '#0A4784'],
          [0.8, '#092959'],
          [1, '#05163B']
      ]
      },

      series: [{
        accessibility: {
          point: {
            valueDescriptionFormat: '{xDescription}, {point.value} people per square kilometer.'
          }
        },
        animation: {
          duration: 1000
        },
        data: data,
        joinBy: ['postal-code', 'code'],
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          format: '{point.code}'
        },
        name: 'UFO Sightings',
        tooltip: {
          pointFormat: '{point.code}: {point.value} total sightings'
        }
      }]
    });
  
})();