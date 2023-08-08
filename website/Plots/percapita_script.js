(async () => {

  const topology = await fetch(
    'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
  ).then(response => response.json());

  var data = [
    {
        "value": 1.879658,
        "code": "nj"
    },
    {
        "value": 0.481345,
        "code": "ri"
    },
    {
        "value": 2.448352,
        "code": "ma"
    },
    {
        "value": 2.043111,
        "code": "ct"
    },
    {
        "value": 2.440624,
        "code": "md"
    },
    {
        "value": 11.174047,
        "code": "ny"
    },
    {
        "value": 0.673596,
        "code": "de"
    },
    {
        "value": 17.945140,
        "code": "fl"
    },
    {
        "value": 12.501549,
        "code": "oh"
    },
    {
        "value": 13.615856,
        "code": "pa"
    },
    {
        "value": 15.535726,
        "code": "il"
    },
    {
        "value": 55.751935,
        "code": "ca"
    },
    {
        "value": 2.509544,
        "code": "hi"
    },
    {
        "value": 10.517354,
        "code": "va"
    },
    {
        "value": 16.808389,
        "code": "mi"
    },
    {
        "value": 10.844110,
        "code": "in"
    },
    {
        "value": 15.144004,
        "code": "nc"
    },
    {
        "value": 12.814107,
        "code": "ga"
    },
    {
        "value": 11.744608,
        "code": "tn"
    },
    {
        "value": 6.047287,
        "code": "nh"
    },
    {
        "value": 11.482047,
        "code": "sc"
    },
    {
        "value": 8.722003,
        "code": "la"
    },
    {
        "value": 12.403501,
        "code": "ky"
    },
    {
        "value": 19.260972,
        "code": "wi"
    },
    {
        "value": 53.415639,
        "code": "wa"
    },
    {
        "value": 11.588365,
        "code": "al"
    },
    {
        "value": 26.257265,
        "code": "mo"
    },
    {
        "value": 51.017060,
        "code": "tx"
    },
    {
        "value": 9.550901,
        "code": "wv"
    },
    {
        "value": 7.133744,
        "code": "vt"
    },
    {
        "value": 24.946730,
        "code": "mn"
    },
    {
        "value": 10.394777,
        "code": "ms"
    },
    {
        "value": 17.839279,
        "code": "ia"
    },
    {
        "value": 17.096352,
        "code": "ar"
    },
    {
        "value": 21.001064,
        "code": "ok"
    },
    {
        "value": 72.517192,
        "code": "az"
    },
    {
        "value": 49.661849,
        "code": "co"
    },
    {
        "value": 21.405129,
        "code": "me"
    },
    {
        "value": 67.303236,
        "code": "or"
    },
    {
        "value": 26.629789,
        "code": "ks"
    },
    {
        "value": 33.871872,
        "code": "ut"
    },
    {
        "value": 23.296207,
        "code": "ne"
    },
    {
        "value": 57.102971,
        "code": "nv"
    },
    {
        "value": 48.708189,
        "code": "id"
    },
    {
        "value": 79.253349,
        "code": "nm"
    },
    {
        "value": 26.939629,
        "code": "sd"
    },
    {
        "value": 20.129437,
        "code": "nd"
    },
    {
        "value": 115.214912,
        "code": "mt"
    },
    {
        "value": 56.915236,
        "code": "wy"
    },
    {
        "value": 240.173160,
        "code": "ak"
    }
]

  

    // Make codes uppercase to match the map data
    data.forEach(function (p) {
      p.code = p.code.toUpperCase();
    });

    // Instantiate the map
    Highcharts.mapChart('geo2', {

      chart: {
        map: topology,
        borderWidth: 0
      },

      title: {
        text: 'UFO Encounter Rate per State (Sightings per Capita from 1973-2022)',
        
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
          [0.2, '#5285A2'],
          [0.5, '#0A4784'],
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
          pointFormat: '{point.code}: {point.value} sightings per capita'
        }
      }]
    });
  
})();