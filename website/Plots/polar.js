Highcharts.chart('polar', {
    chart: {
        polar: true,
        type: 'column',
        width: 700,
        height: 670,
        backgroundColor: 'transparent'
    },
    title: {
        text: 'Total UFO Sightings per Hour of Day',
          style: {
        fontSize: '20px',
        fontWeight: 'bold',
           color:'black'
    }
    },
    xAxis: {
        tickInterval: 1,
        categories: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
        labels: {
            formatter: function () {
                return this.value ;
            },
            style: {
                color: 'black'
            }
        }
    },
  
  yAxis: { labels: {
            enabled: false}} , 

    series: [{
        name:'Number of Sightings',
        data: [
            {y: 6723, color: 'blue'},
            {y: 4414, color: 'blue'},
            {y: 3170, color: 'blue'},
            {y: 2937, color: 'black'},
            {y: 2382, color: 'black'},
            {y: 2800, color: 'black'},
            {y: 2173, color: 'black'},
            {y: 1482, color: 'black'},
            {y: 1284, color: 'black'},
            {y: 1567, color: 'black'},
            {y: 1796, color: 'black'},
            {y: 1695, color: 'black'},
            {y: 1920, color: 'black'},
            {y: 1827, color: 'black'},
            {y: 1812, color: 'black'},
            {y: 1937, color: 'black'},
            {y: 2357, color: 'black'},
            {y: 3772, color: '#8ACEF7'},
            {y: 6209, color: '#8ACEF7'},
            {y: 9052, color: '#8ACEF7'},
            {y: 13053, color: '#273E7B'},
            {y: 17241,color: '#273E7B'},
            {y: 15494,color: '#273E7B'},
            {y: 10732,color: '#273E7B'}
        ],
        pointPlacement: 'between',
      pointWidth: 0.19
    }],
  legend: {
        enabled: false
    }
});
