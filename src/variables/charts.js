export const barChartDataDashboard = [
  {
    name: "query",
    data: [10, 50, 10, 30, 90, 20, 70, 30, 25],
  },
];

export const barChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: "Plus Jakarta Display",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: "Plus Jakarta Display",
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    show: false,
    labels: {
      show: false,
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "#fff",
    labels: {
      show: true,
      style: {
        colors: "#fff",
        fontSize: "12px",
        fontFamily: "Plus Jakarta Display",
      },
    },
  },
  grid: {
    show: false,
  },
  fill: {
    colors: "#fff",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "12px",
      barHeight: "50px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

export const lineChartDataDashboard = [
  {
    name: "complaints",
    data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  },
  {
    name: "suggestion",
    data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
  },
];

const today = new Date();
const lastSevenDays = [...Array(7)].map((_, i) => {
  const d = new Date(today);
  d.setDate(today.getDate() - i);
  return d.toISOString().slice(0, 10);
});
// console.log(lastSevenDays);


export const lineChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },

  
  xaxis: {
    type: "datetime",
    categories: lastSevenDays ,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A"
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#2CD9FF", "#582CFF"],
  },
  colors: ["#2CD9FF", "#582CFF"],
};

export const lineChartDataProfile1 = [
  {
    name: "complaints",
    data: [100, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  },
];

export const lineChartOptionsProfile1 = {
  chart: {
    height: "50px",
    toolbar: {
      show: false,
    },
    redrawOnParentResize: true,

  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: false,
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: "#56577A"
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#01B574"],
  },
  colors: ["#01B574"],
};

export const lineChartDataProfile2 = [
  {
    name: "Complaints",
    data: [100, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  },
];

export const lineChartOptionsProfile2 = {
  chart: {
    height: "50px",
    toolbar: {
      show: false,
    },
    redrawOnParentResize: true
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: false,
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: "#56577A"
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#582CFF"],
  },
  colors: ["#582CFF"],
};





// export const PieChartDataDashboard = [
//   {
//     name: "complaints",
//     data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
//   },
//   {
//     name: "suggestion",
//     data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
//   },
// ];

// export const PieChartOptionsDashboard = {
//   chart: {
//     toolbar: {
//       show: false,
//     },
//   },
//   tooltip: {
//     theme: "dark",
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   xaxis: {
//     type: "datetime",
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     labels: {
//       style: {
//         colors: "#c8cfca",
//         fontSize: "12px",
//       },
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     labels: {
//       style: {
//         colors: "#c8cfca",
//         fontSize: "12px",
//       },
//     },
//   },
//   legend: {
//     show: false,
//   },
//   grid: {
//     strokeDashArray: 5,
//     borderColor: "#56577A"
//   },
//   fill: {
//     type: "gradient",
//     gradient: {
//       shade: "dark",
//       type: "vertical",
//       shadeIntensity: 0,
//       gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
//       inverseColors: true,
//       opacityFrom: 0.8,
//       opacityTo: 0,
//       stops: [],
//     },
//     colors: ["#2CD9FF", "#582CFF"],
//   },
//   colors: ["#2CD9FF", "#582CFF"],
// };

// export const PieChartDataProfile1 = [
//   {
//     name: "complaints",
//     data: [100, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
//   },
// ];

// export const PieChartOptionsProfile1 = {
//   chart: {
//     height: "50px",
//     toolbar: {
//       show: false,
//     },
//     redrawOnParentResize: true,

//   },
//   tooltip: {
//     theme: "dark",
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   xaxis: {
//     type: "datetime",
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     labels: {
//       show: false,
//       style: {
//         colors: "#c8cfca",
//         fontSize: "12px",
//       },
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//     labels: {
//       style: {
//         colors: "#c8cfca",
//         fontSize: "12px",
//       },
//     },
//   },
//   legend: {
//     show: false,
//   },
//   grid: {
//     show: false,
//     strokeDashArray: 5,
//     borderColor: "#56577A"
//   },
//   fill: {
//     type: "gradient",
//     gradient: {
//       shade: "dark",
//       type: "vertical",
//       shadeIntensity: 0,
//       gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
//       inverseColors: true,
//       opacityFrom: 0.8,
//       opacityTo: 0,
//       stops: [],
//     },
//     colors: ["#01B574"],
//   },
//   colors: ["#01B574"],
// };

// export const PieChartDataProfile2 = [
//   {
//     name: "Complaints",
//     data: [100, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
//   },
// ];

// export const PieChartOptionsProfile2 = {
//   chart: {
//     height: "50px",
//     toolbar: {
//       show: false,
//     },
//     redrawOnParentResize: true
//   },
//   tooltip: {
//     theme: "dark",
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   xaxis: {
//     type: "datetime",
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     labels: {
//       show: false,
//       style: {
//         colors: "#c8cfca",
//         fontSize: "12px",
//       },
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//     labels: {
//       style: {
//         colors: "#c8cfca",
//         fontSize: "12px",
//       },
//     },
//   },
//   legend: {
//     show: false,
//   },
//   grid: {
//     show: false,
//     strokeDashArray: 5,
//     borderColor: "#56577A"
//   },
//   fill: {
//     type: "gradient",
//     gradient: {
//       shade: "dark",
//       type: "vertical",
//       shadeIntensity: 0,
//       gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
//       inverseColors: true,
//       opacityFrom: 0.8,
//       opacityTo: 0,
//       stops: [],
//     },
//     colors: ["#582CFF"],
//   },
//   colors: ["#582CFF"],
// };
