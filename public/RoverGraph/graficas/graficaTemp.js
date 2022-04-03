var ctx1 = document.getElementById('graficaTemp').getContext('2d');
var grafica1 = new Chart(ctx1, {
    type: 'line',
    data: {
        //labels: ['Tiempo'],
        datasets: [{
            label: 'Temperatura °C',
            backgroundColor:'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(216,71,51,1)',
            borderWidth:0,
            pointRadius:2,
            pointStyle:'circle',
            responsive: true,
            data:[]
        },
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },

        legend: {
            labels:{
                fontColor:"white",
            }

        },
        tooltips: {
             enabled: false
           }
    }
});

let contGraf1=0;
let ale1;
var intervalo1;
 function graficador1() {
    var time1 = performance.now() * 0.001;
    ale1=20+Math.random();

    if(contGraf1>5){
        grafica1.data.labels.shift();
    }

    grafica1.data.labels.push(Math.round(time1*10)/10);
    grafica1.data.datasets.forEach(dataset=>{

        if(contGraf1>5){
            dataset.data.shift();
        }
        dataset.data.push(Math.round(ale1*10)/10);
    });
    
    contGraf1+=0.5;
    grafica1.update();
                     
 }
 
 function intervaloF1() {
     intervalo1=setInterval(graficador1,500);
 }

intervaloF1();