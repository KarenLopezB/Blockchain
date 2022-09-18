import PKG from './package.json';
import Block from './src/blockchain/block';

/*const { name, version, description, author } = PKG;

console.log(`${name} ${version} ${description} ${author}`);

const { genesis } = Block;
console.log(genesis.toString());

const block = new Block(Date.now(), genesis.hash,'h4sh','d4t4');
console.log(block.toString());

const block2 = new Block(Date.now(), block.hash, 'h4sh-block2', 'd4t4-2');
console.log(block2.toString()); 

const block = Block.mine(genesis, 'd4t4-bn');
console.log(block.toString());

const block_2 = Block.mine(block, 'd4t4-2');
console.log(block_2.toString());*/

const { name, version } = PKG;
const { genesis } = Block;

const block1 = Block.mine(genesis, 'trasact1');
console.log(block1.toString());

const block2 = Block.mine(genesis, 'trasact2');
console.log(block2.toString());