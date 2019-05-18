var vietnamese = document.getElementById('languageVietnamese').getContext('2d');
var english = document.getElementById('languageEnglish').getContext('2d');
var finnish = document.getElementById('languageFinnish').getContext('2d');

var chartVietnamese = new Chart(vietnamese, {
    /** Chart type **/
    type: 'doughnut',
    /** Chart data **/
    data: {
        datasets: [{
            data:[100,0],

            backgroundColor: ['#A9A9A9','#FFFFFF']
        }],

    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        animation: {
            animateScale: true
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                //get the concerned dataset
                var dataset = data.datasets[tooltipItem.datasetIndex];
                //calculate the total of this data set
                var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                //get the current items value
                var currentValue = dataset.data[tooltipItem.index];
                //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                var percentage = Math.floor(((currentValue/total) * 100)+0.5);

                return percentage + "%";
                }
            }
        } 
    }
});

var chartEnglish = new Chart(english, {
    /** Chart type **/
    type: 'doughnut',

    /** Chart data **/
    data: {
        datasets: [{
            data:[90,10],

            backgroundColor: ['#A9A9A9','#FFFFFF']
        }],

    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        animation: {
            animateScale: true 
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                //get the concerned dataset
                var dataset = data.datasets[tooltipItem.datasetIndex];
                //calculate the total of this data set
                var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                //get the current items value
                var currentValue = dataset.data[tooltipItem.index];
                //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                var percentage = Math.floor(((currentValue/total) * 100)+0.5);

                return percentage + "%";
                }
            }
        }   
    }
});

var chartFinnish = new Chart(finnish, {
    /** Chart type **/
    type: 'doughnut',

    /** Chart data **/
    data: {
        datasets: [{
            data:[25,75],

            backgroundColor: ['#A9A9A9','#FFFFFF'],

        }],

    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        animation: {
            animateScale: true
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                //get the concerned dataset
                var dataset = data.datasets[tooltipItem.datasetIndex];
                //calculate the total of this data set
                var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                //get the current items value
                var currentValue = dataset.data[tooltipItem.index];
                //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                var percentage = Math.floor(((currentValue/total) * 100)+0.5);

                return percentage + "%";
                }
            }
        } 
    }
});