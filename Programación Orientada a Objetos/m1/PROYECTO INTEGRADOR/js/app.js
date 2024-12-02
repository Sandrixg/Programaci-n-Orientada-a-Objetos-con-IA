import { Blockchain } from './blockchain.js';
import { updateUI } from './ui.js';

const blockchain = new Blockchain();

document.getElementById('actionButton').addEventListener('click', () => {
    blockchain.addBlock({ data: "Nuevo Movimiento" });
    updateUI(blockchain);
});
