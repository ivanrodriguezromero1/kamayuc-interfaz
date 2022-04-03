var ctx3 = document.getElementById('graficaCE').getContext('2d');
var grafica3 = new Chart(ctx3, {
    type: 'line',
    data: {
        //labels: ['Tiempo'],
        datasets: [{
            label: 'Conductividad del suelo us/cm',
            backgroundColor:'rgba(180,200,198,1)',
            borderColor: 'rgba(180,200,198,1)',
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
                //	beginAtZero: true
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

let contGraf3=0;
let ale3;
var intervalo3;
function graficador3() {
    var time3 = performance.now() * 0.001;
    ale3=240+Math.random();

    if(contGraf3>5){
        grafica3.data.labels.shift();
    }

    grafica3.data.labels.push(Math.round(time3*10)/10);
    grafica3.data.datasets.forEach(dataset=>{

        if(contGraf3>5){
            dataset.data.shift();
        }
        dataset.data.push(Math.round(ale3*10)/10);
    });
    
    contGraf3+=0.5;
    grafica3.update();
                    
    }
    
function intervaloF3() {
    intervalo3=setInterval(graficador3,500);
}

intervaloF3();