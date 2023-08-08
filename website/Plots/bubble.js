Highcharts.chart('bubble', {
  chart: {
    type: 'packedbubble',
    height: '600',
    width:'600',
    marginLeft: 0
  },
  title: {
    text: 'Average Duration of UFO Sightings in the US by Region and Reported UFO Shape (1973-2022)',
    align: 'center'
  },
  tooltip: {
    useHTML: true,
    pointFormat: '<b>{point.name}:</b> {point.value} minutes'
  },
  plotOptions: {
    packedbubble: {
      minSize: '0%',
      maxSize: '50%',
      zMin: 0,
      zMax: 35,
      layoutAlgorithm: {
        gravitationalConstant: 0.05,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: true,
        parentNodeLimit: false
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        filter: {
          property: 'y',
          operator: '>',
          value: 250
        },
        style: {
          color: 'black',
          textOutline: 'none',
          fontWeight: 'normal'
        }
      }
    }
  },
  series: [{
    name: 'West',
    data: [{
      name: 'Circle',
      value: 14
    }, {
      name: 'Fireball',
      value: 8
    },
    {
      name: 'Light',
      value: 14
    },
    {
      name: 'Sphere',
      value: 15
    },
    {
      name: 'Star',
      value: 18
    }]
  }, {
    name: 'Midwest',
    data: [{
      name: 'Circle',
      value: 13.5
    },
    {
      name: 'Fireball',
      value: 6.4
    },
    {
      name: 'Light',
      value: 14
    },
    {
      name: 'Sphere',
      value: 11.8
    },
    {
      name: 'Star',
      value: 6.3
    }
    ]
  }, {
    name: 'South',
    data: [{
      name: 'Circle',
      value: 14.3
    },
    {
      name: 'Fireball',
      value: 6.2
    },
    {
      name: 'Light',
      value: 15
    },
           
    {
      name:'Sphere',
      value: 11.9
            
    },
    {
      name:'Star',
      value: 23
            
    }]
  }, {
    name: 'East',
    data: [{
      name: 'Circle',
      value: 13.5
    },
    {
      name: 'Fireball',
      value: 6.4
    },
    {
      name: 'Light',
      value: 15.5
    },
    {
      name: 'Sphere',
      value: 11
    },
    {
      name: 'Star',
      value: 6
    }]
  }, {
    name: 'North',
    data: [{
      name: 'Circle',
      value: 15.5
    },
    {
      name: 'Fireball',
      value: 5.1
    },
    {
      name: 'Light',
      value: 14.3
    },
    {
      name: 'Sphere',
      value: 12
    },
    {
      name: 'Star',
      value: 10
    }]
  }, {
    name: 'Other',
    data: [{
      name: 'Circle',
      value: 6.5
    },
    {
      name: 'Fireball',
      value: 6.5
    },
    {
      name: 'Light',
      value: 7.4
    },
    {
      name: 'Sphere',
      value: 7.4
    },
    {
      name: 'Star',
      value: 7.9
    }]
  }]
});