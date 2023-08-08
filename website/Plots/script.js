var chart1 = Highcharts.chart("line_social", {
  
    chart: {
    height: 450, // set the height to 500 pixels
    width: 650 // set the width to 800 pixels
  },
  title: {
    text: "UFO Sightings vs Technology and Media",
    style: {
      fontWeight: "bold"
    },
    align: "center"

  }
  ,

  yAxis: {
    title: {
      text: "Total (%)",
      style: {
        fontWeight: "bold"
      }
    }
    }
  ,

  xAxis: {
    title: {text:'Year' , style: {
      fontWeight: "bold"
    }},
    min: 1973,
    max: 2022,
    tickInterval: 5,
    scrollbar: {
      enabled: true,
      size: 10
    },
    labels: {
      formatter: function () {
        return this.value;
      }
    },
    accessibility: {
      rangeDescription: "Range: 1973 to 2022"
    }
  },
  events: {
    afterSetExtremes: function (e) {
      var chart = this.chart;
      if (e.trigger !== "syncExtremes") {
        chart.rangeSelector.value = e.min + 0.5;
        chart.rangeSelector.setSelected(0, null, false);
      }
    }
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1973
    }
  },

  series: [
    {
      name: "UFO Sightings",
      data: [
        0.01049533,
        0.01459107,
        0.02047869,
        0.01676693,
        0.01459107,
        0.02380648,
        0.01139127,
        0.01151926,
        0.00102393,
        0.00345578,
        0,
        0.00102393,
        0.00678357,
        0.00217586,
        0.00691156,
        0.00985537,
        0.01318316,
        0.01049533,
        0.00857545,
        0.01279918,
        0.01740689,
        0.03314988,
        0.04914885,
        0.05017279,
        0.13797517,
        0.2046589,
        0.32625112,
        0.31588378,
        0.35197747,
        0.35120952,
        0.42147703,
        0.4671701,
        0.45910662,
        0.41699731,
        0.49596826,
        0.57084347,
        0.51772687,
        0.51439908,
        0.63266351,
        0.91757328,
        0.8781518,
        1,
        0.7953411,
        0.6546781,
        0.58082683,
        0.36925637,
        0.65224626,
        0.73992065,
        0.33009087,
        0.43632408
      ]
    },
    {
      name: "Internet Usage",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        0.01282051,
        0.03846154,
        0.07692308,
        0.11538462,
        0.19230769,
        0.30769231,
        0.41025641,
        0.5,
        0.53846154,
        0.56410256,
        0.6025641,
        0.65384615,
        0.66666667,
        0.70512821,
        0.74358974,
        0.76923077,
        0.82051282,
        0.84615385,
        0.91025641,
        0.92307692,
        0.93589744,
        0.96153846,
        1
      ]
    },
    {
      name: "Social Media Usage",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        0,
        0.08,
        0.13333333,
        0.21333333,
        0.42666667,
        0.57333333,
        0.6,
        0.72,
        0.77333333,
        0.76,
        0.8,
        0.85333333,
        1,
        0.96,
        0.98666667
      ],
      color: "red"
    }
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom"
          }
        }
      }
    ]
  }
});

var slider = document.querySelector("#width");
slider.addEventListener("change", () => {
  chart1.update({
    xAxis: {
      max: parseInt(slider.value),
      tickInterval: 4, // set the tick interval to 5
      labels: {
        formatter: function () {
          return this.value;
        }
      }
    }
  });
});