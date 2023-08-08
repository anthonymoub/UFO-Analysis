// Create the chart
Highcharts.chart('drilldown', {
  chart: {
    type: 'column'
  },
  title: {
    align: 'center',
    text: 'UFO Sightings During Different Weather Conditions'
  },
  subtitle: {
    align: 'center',
    text: 'Graph represents top 10 cities in terms of number of sightings'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category',
    title: {
  text: 'Weather Type',
  style: {
    fontWeight: 'bold'
  }
}

  },
  yAxis: {
    title: {
      text: 'Total UFO Sightings',
        style: {
    fontWeight: 'bold'
  }
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: false,
        // format: '{point.y}',
        textDecoration: 'none' // remove underline from number labels
      }
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}'
  },
  series: [
    {
      name: 'Weather Conditions',
      colorByPoint: true,
      data: [
        {
          name: 'Clear',
          y: 67905,
          drilldown: 'Clear',
          color: '#280DA9'
        },
        {
          name: 'Unclear',
          y: 18967,
          drilldown: 'Unclear',
          color: '#6DC5FA'
        }
      ]
    }
  ],
  drilldown: {
    breadcrumbs: {
      position: {
        align: 'right'
      }
    },
    series: [
      {
        name: 'Unclear',
        id: 'Unclear',
        data: [
          [
            'Windy',
            440
          ],
          [
            'Dusty',
            588
          ],
          [
            'Foggy',
            1345
          ],
          [
            'Hazy',
            7370
          ],
          [
            'Rainy',
            9224
          ] 
        ]
      },
    ]
  }
});
