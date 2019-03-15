const trainingSet = [{
    output: [0],
    input: [0, 0]
}, {
    output: [1],
    input: [1, 0]
}, {
    output: [1],
    input: [0, 1]
}, {
    output: [0],
    input: [1, 1]
}];

const defaultConfig = {
    iterations: 100000,
    activation: 'sigmoid',
    errorTresh: 0.005,
    learningRate: 0.3,
    inputSize: 2,
    hiddenLayers: [5],
    outputSize: 1
};

function forwardNet(netParams) {
    const net = new brain.NeuralNetwork(netParams);

    let timeTrain = Date.now();
    const {iterations} = net.train(trainingSet);
    timeTrain = Date.now() - timeTrain;
    console.log(iterations);

    let gError = 0;

    trainingSet.forEach(data => {
        gError += Math.abs(data.output - net.run(data.input)[0]);
    });


    console.log(gError);

    return {
        time: timeTrain,
        iterations: iterations / 100,
        error: gError / trainingSet.length
    };
}

function makeExperiment() {
    const results = {};

    function changeErrorTresh() {
        const params = {...defaultConfig};
        results.errorTresh = [];
        params.errorTresh = 0.3;

        while (params.errorTresh > 0.0001) {
            results.errorTresh.push({
                input: {...params},
                output: forwardNet(params)
            });

            params.errorTresh = (params.errorTresh / 2).toFixed(4);
        }
    }

    function changeTrainCoef() {
        const params = {...defaultConfig};
        results.learningRate = [];
        params.learningRate = 0.7;

        while (params.learningRate > 0.005) {
            results.learningRate.push({
                input: {...params},
                output: forwardNet(params)
            });

            params.learningRate = params.learningRate / 2;
        }
    }

    function changeNumberLayers() {
        const params = {...defaultConfig};
        results.layerNumber = [];
        params.hiddenLayers = [];
        let layerNumber = 0;

        while (params.hiddenLayers.length < 50) {
            results.layerNumber.push({
                input: {...params, layerNumber},
                output: forwardNet(params)
            });

            params.hiddenLayers = params.hiddenLayers.concat(new Array(10).fill(5));
            layerNumber += 10;
        }
    }

    function changeNumberNeurons() {
        const params = {...defaultConfig};
        results.neuronsNumber = [];
        params.hiddenLayers = [10];
        let neuronsNumber = 10;

        while (params.hiddenLayers[0] < 100) {
            results.neuronsNumber.push({
                input: {...params, neuronsNumber},
                output: forwardNet(params)
            });

            params.hiddenLayers[0] = params.hiddenLayers[0] + 10;
            neuronsNumber += 10;
        }
    }

    changeErrorTresh();
    changeTrainCoef();
    changeNumberLayers();
    changeNumberNeurons();

    console.log(JSON.stringify(results));
    return results;
}
