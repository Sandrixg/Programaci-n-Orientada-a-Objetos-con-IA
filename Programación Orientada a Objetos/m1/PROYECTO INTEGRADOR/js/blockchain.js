class Block {
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
    }
}

export class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "0", Date.now(), "Genesis Block", "0");
    }

    generateHash(block) {
        return `${block.index}-${block.previousHash}-${block.timestamp}-${JSON.stringify(block.data)}`;
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data) {
        const previousBlock = this.getLatestBlock();
        const newBlock = new Block(
            previousBlock.index + 1,
            previousBlock.hash,
            Date.now(),
            data,
            this.generateHash(previousBlock)
        );
        this.chain.push(newBlock);
    }
}
