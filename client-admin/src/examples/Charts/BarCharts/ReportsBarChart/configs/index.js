/**
=========================================================
* Material Dashboard 2  React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function configs(labels, datasets) {
  var mang = [0, 0, 0, 0, 0, 0, 0];
  // console.log(datasets.data);
  datasets.data.map((item, index) => {
    // console.log(item[index].totalPrice, "datata");
    if (item[index].month == 6) {
      mang[0] = item[index].totalPrice;
    }

    if (item[index].month == 7) {
      mang[1] = item[index].totalPrice;
    }

    if (item[index].month == 8) {
      mang[2] = item[index].totalPrice;
    }

    if (item[index].month == 9) {
      mang[3] = item[index].totalPrice;
    }

    if (item[index].month == 10) {
      mang[4] = item[index].totalPrice;
    }

    if (item[index].month == 11) {
      mang[5] = item[index].totalPrice;
    }
    if (item[index].month == 12) {
      mang[6] = item[index].totalPrice;
    }
  });
  return {
    data: {
      labels,
      datasets: [
        {
          label: "Sale",
          tension: 0.4,
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          data: mang,
          maxBarThickness: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
            color: "#fff",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    },
  };
}

export default configs;
