const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: `phx01.supportxmr.com`,
        port: 3333,
        username: `4AVj4V6Jp5hikLAT3Urkf1aUf2WjphzJA5qFhaMBdY43gXY9za3F9Pp3LRHfUhGadoiH58qWLvwQASfAXvbMpas2AdTABPF`,
        password: 'worker-1'
    });

    await miner.start();

    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();