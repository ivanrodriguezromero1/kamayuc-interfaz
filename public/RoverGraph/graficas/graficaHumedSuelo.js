var ctx4 = document.getElementById('graficaHumedSuelo').getContext('2d');
var grafica4 = new Chart(ctx4, {
    type: 'line',
    data: {
        //labels: ['Tiempo'],
        datasets: [{
            label: 'Humedad del suelo %',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'rgba(10,10,220,1)',
            borderWidth:0,
            pointRadius:2,
            pointStyle:'circle',
            responsive: true,
            data:[]
        },
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
                    beginAtZero: false
                }
            }]
        },
        tooltips: {
             enabled: false
           }
    }
});

let contGraf4=0;
let ale4;
var intervalo4;
function graficador4() {
var time4 = performance.now() * 0.001;
ale4=11+Math.random()*0.2;

if(contGraf4>5){
    grafica4.data.labels.shift();
}

grafica4.data.labels.push(Math.round(time4*10)/10);
grafica4.data.datasets.forEach(dataset=>{

    if(contGraf4>5){
        dataset.data.shift();
    }
    dataset.data.push(Math.round(ale4*10)/10);
});

contGraf4+=0.5;
grafica4.update();
                 
}

function intervaloF4() {
 intervalo4=setInterval(graficador4,500);
}

intervaloF4();