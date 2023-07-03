const ctx1 = document.getElementById("myChart");
const ctx2 = document.getElementById("myChart2");
const ctx3 = document.getElementById("myChart3");

const graphChart = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["ARE YOU THERE GOD? IT'S ME, MARGARET", "ARE YOU THERE GOD? IT'S ME, MARGARET", "BLACKBERRY", "RYE LANE", "JOYLAND", "FULL TIME"],
    datasets: [
      {
        label: "Filmes mais votados",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const pieChart = new Chart(ctx3, {
  type: "pie",
  data: {
    labels: ["EUA", "JAPAN", "OUTROS"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 100, 20],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const lineChart = new Chart(ctx2, {
  type: "bar",
  data: (data = {
    labels: ["RUIM", "REGULAR", "BOM", "OTIMO"],
    datasets: [
      {
        label: "Opnões a respeito dos filmes",
        data: [25, 59, 80, 81, 56, 35, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  }),

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
