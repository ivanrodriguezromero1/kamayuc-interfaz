var ctx2 = document.getElementById('graficaHumed').getContext('2d');
var grafica2 = new Chart(ctx2, {
    type: 'line',
    data: {
        //labels: ['Tiempo'],
        datasets: [{
            label: 'Humedad %',
            backgroundColor:'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(51,216,51,204)',
            borderWidth:0,
            pointRadius:2,
            pointStyle:'circle',
            responsive: true,
            data:[]
        }
    ]
    },
    options: {
        legend: {
            labels:{
                fontColor:"white",
            }

        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        tooltips: {
             enabled: false
           }
    }
});

let contGraf2=0;
let ale2;
var intervalo2;
 function graficador2() {
    var time2 = performance.now() * 0.001;
    ale2=86+Math.random();

    if(contGraf2>5){
        grafica2.data.labels.shift();
    }

    grafica2.data.labels.push(Math.round(time2*10)/10);
    grafica2.data.datasets.forEach(dataset=>{

        if(contGraf2>5){
            dataset.data.shift();
        }
        dataset.data.push(Math.round(ale2*10)/10);
    });
    
    contGraf2+=0.5;
    grafica2.update();
                     
 }
 
 function intervaloF2() {
     intervalo2=setInterval(graficador2,500);
 }

intervaloF2();
