import sharp from 'sharp';
import jsQR from 'jsqr';
import assert from 'node:assert/strict';
const {data,info}=await sharp('artifacts/pomocna-dlon-qr.svg').resize(600,600).ensureAlpha().raw().toBuffer({resolveWithObject:true});
const decoded=jsQR(new Uint8ClampedArray(data),info.width,info.height);
assert.equal(decoded?.data,'https://hubertlim.github.io/hand-orthosis-guide/');
console.log('QR independently decoded to the permanent Pages URL.');
