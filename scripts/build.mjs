import {cp,mkdir,copyFile,writeFile,readFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await cp('site','dist',{recursive:true});
await mkdir('dist/vendor',{recursive:true});
await copyFile('node_modules/qrcode-generator/qrcode.js','dist/vendor/qrcode.js');
const qrSource=await readFile('node_modules/qrcode-generator/qrcode.js','utf8');
await writeFile('dist/vendor/QR-LICENSE.txt',qrSource.slice(0,qrSource.indexOf('var qrcode')));
console.log('Static GitHub Pages site built in dist/');
