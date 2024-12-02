export function updateUI(blockchain) {
    const output = document.getElementById('output');
    output.innerHTML = blockchain.chain.map(block => `
        <div>
            <p><strong>Bloque ${block.index}</strong></p>
            <p>Hash: ${block.hash}</p>
            <p>Datos: ${JSON.stringify(block.data)}</p>
        </div>
    `).join('');
}
