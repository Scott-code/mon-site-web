//AOS.init();

let toogle = document.querySelector(".toogle");

let body = document.querySelector("body");

toogle.addEventListener("click", function () {
  body.classList.toggle("open");

});





let text=anime({

targets:".letter_1",

opacity:1,

translateX:90,
duration:2000, 

scale: 
  anime.stagger([1.7,1],),

  

delay:anime.stagger(100),


endDelay:300,

loop:true,

direction:'alternate',


})

let text1=anime({


targets:".letter_2",
opacity:1,
translateX:90,

duration:2000, 


rotate:{

value:360,

duration:1000,


delay:anime.stagger(500),

},

loop:true,

direction:'alternate',

delay:1000,

endDelay:100




})




let text3=anime({


  targets:".letter_3",
  opacity:1,
  translateX:100,
  duration:1000, 
  
  rotate:{
  
  value:360,
  
  duration:2000,
  
  delay:anime.stagger(500),
  
  },


  direction:'alternate',
  
 
  delay:1200,


endDelay:120,

loop:true,
  

  
  
  })


  const graph = document.getElementById("graph").getContext("2d");

Chart.defaults.global.defaultFontSize = 18;

let massPopChart = new Chart(graph, {
  type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [
      "html",
      "css",
      "javascript",
      "react",
      "vue.js",
      "chart.js",
      "anime.js",
     
    ],
    datasets: [
      {
        label: "mes competences ",
        data: [16, 80, 30, 10, 40, 17, 40,],
        // backgroundColor: "blue",
        backgroundColor: [
          "red",
          "orange",
          "salmon",
          "blue",
          "yellow",
          "purple",
          "green",
        ],
        hoverBorderWidth: 3,
      },
    ],
  },
  options: {
    title: {
      display: false,
      text: "mes formations et competences",
      fontSize: 94,
    },
    legend: {
      display: true,
    },
    // start at 0
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 900,
        right: 100,
        top: 190,
      },
    },
  },
});





