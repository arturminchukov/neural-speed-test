const PINK = 'rgba(255,99,132,1)';
const GREEN = 'rgba(0,255,0,1)';
const BLUE = 'rgba(0,0,255,1)';
const COLORS = [PINK, GREEN, BLUE];
let COUNT_CHART = 1;

function showGraph(x, dataArr, labels, title) {
    let datasets = dataArr.map(function (el, index) {
        return dataFactory(el, COLORS[index], labels[index])
    });

    drawGraph(x, datasets, title);
}

function createChartNode() {
    let root = document.getElementById('root');
    let div = document.createElement('div');
    let canvas = document.createElement('canvas');
    let canvasId = 'chart' + COUNT_CHART;

    canvas.id = canvasId;
    COUNT_CHART++;

    div.appendChild(canvas);

    root.appendChild(div);

    return canvasId;
}

function drawGraph(x, datasets, title) {
    let canvasId = createChartNode();

    let ctx = document.getElementById(canvasId).getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x,
            datasets: datasets,
        },
        options: {
            title: {
                display: true,
                text: title,
            },
        }
    });
}

function dataFactory(y, color, label) {
    return {
        label: label,
        data: y,
        backgroundColor: [
            'rgba(255, 255, 255, 0.2)',
        ],
        borderColor: [
            color,
        ],
        borderWidth: 2
    }
}

// const myData = {
//     "errorTresh": [{
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.3,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 28, "iterations": 4468, "error": 0.06961905304342508}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.15,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 14, "iterations": 4128, "error": 0.06879974063485861}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.075,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 11, "iterations": 4352, "error": 0.06940473150461912}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.0375,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 12, "iterations": 4409, "error": 0.06935200840234756}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.01875,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 19, "iterations": 4311, "error": 0.06955266650766134}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.009375,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 11, "iterations": 4592, "error": 0.0694064823910594}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.0046875,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 12, "iterations": 4612, "error": 0.0695321811363101}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.00234375,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 11, "iterations": 4208, "error": 0.06875315681099892}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.001171875,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 11, "iterations": 4084, "error": 0.06950674764811993}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.0005859375,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 12, "iterations": 4753, "error": 0.06902620662003756}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.00029296875,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 11, "iterations": 4134, "error": 0.06950968969613314}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.000146484375,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 11, "iterations": 4364, "error": 0.06953953113406897}
//     }],
//     "learningRate": [{
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.7,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 12, "iterations": 4562, "error": 0.06916155572980642}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.35,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 11, "iterations": 4213, "error": 0.06964750401675701}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.175,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 10, "iterations": 4231, "error": 0.06883938331156969}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.0875,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 13, "iterations": 4451, "error": 0.069139095954597}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.04375,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 10, "iterations": 3648, "error": 0.06955746468156576}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.021875,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 12, "iterations": 4222, "error": 0.0695469481870532}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.0109375,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 12, "iterations": 4718, "error": 0.06811478175222874}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.00546875,
//             "inputSize": 2,
//             "hiddenLayers": [5],
//             "outputSize": 1
//         }, "output": {"time": 13, "iterations": 4438, "error": 0.06955041084438562}
//     }],
//     "layerNumber": [{
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [],
//             "outputSize": 1,
//             "layerNumber": 0
//         }, "output": {"time": 17, "iterations": 20000, "error": 0.5000013560056686}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//             "outputSize": 1,
//             "layerNumber": 10
//         }, "output": {"time": 479, "iterations": 20000, "error": 0.5}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//             "outputSize": 1,
//             "layerNumber": 20
//         }, "output": {"time": 933, "iterations": 20000, "error": 0.5}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//             "outputSize": 1,
//             "layerNumber": 30
//         }, "output": {"time": 1388, "iterations": 20000, "error": 0.5}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//             "outputSize": 1,
//             "layerNumber": 40
//         }, "output": {"time": 1813, "iterations": 20000, "error": 0.5}
//     }],
//     "neuronsNumber": [{
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [100],
//             "outputSize": 1,
//             "neuronsNumber": 10
//         }, "output": {"time": 18, "iterations": 4410, "error": 0.06880713161081076}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [100],
//             "outputSize": 1,
//             "neuronsNumber": 20
//         }, "output": {"time": 31, "iterations": 3855, "error": 0.06870593503117561}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [100],
//             "outputSize": 1,
//             "neuronsNumber": 30
//         }, "output": {"time": 54, "iterations": 4883, "error": 0.06919002719223499}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [100],
//             "outputSize": 1,
//             "neuronsNumber": 40
//         }, "output": {"time": 69, "iterations": 4492, "error": 0.0692648608237505}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [100],
//             "outputSize": 1,
//             "neuronsNumber": 50
//         }, "output": {"time": 89, "iterations": 4447, "error": 0.06862399913370609}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [100],
//             "outputSize": 1,
//             "neuronsNumber": 60
//         }, "output": {"time": 101, "iterations": 4260, "error": 0.06883244961500168}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [100],
//             "outputSize": 1,
//             "neuronsNumber": 70
//         }, "output": {"time": 94, "iterations": 3587, "error": 0.06877011712640524}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [100],
//             "outputSize": 1,
//             "neuronsNumber": 80
//         }, "output": {"time": 103, "iterations": 3244, "error": 0.06952572893351316}
//     }, {
//         "input": {
//             "iterations": 100000,
//             "activation": "sigmoid",
//             "errorTresh": 0.005,
//             "learningRate": 0.3,
//             "inputSize": 2,
//             "hiddenLayers": [100],
//             "outputSize": 1,
//             "neuronsNumber": 90
//         }, "output": {"time": 120, "iterations": 3502, "error": 0.06942126993089914}
//     }]
// };
const myData = makeExperiment();

function drawExperiment() {
    const myDataKeys = Object.keys(myData);


    myDataKeys.forEach(key => {
        const {inputs, outputs} = getArray(myData[key], key);
        this.showGraph(inputs, outputs, ['time, ms', 'error', 'iterations, *100'], key);
    });
}

function getArray(data, nameInput) {
    // const outs = ['time', 'error', 'iterations'];
    const inputs = data.map(el => el.input[nameInput]);
    const outputs = [data.map(el => el.output.time), data.map(el => el.output.error), data.map(el => el.output.iterations)];

    return {
        inputs,
        outputs
    };
}


drawExperiment();
