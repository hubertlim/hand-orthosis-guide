import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const html=await readFile('dist/index.html','utf8');
for(const match of html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g))await access('dist/'+match[1]);
for(const match of html.matchAll(/href="#([^"]+)"/g))assert(html.includes(`id="${match[1]}"`),`Missing anchor ${match[1]}`);
const context={window:{}};vm.runInNewContext(await readFile('site/config.js','utf8'),context);
assert.equal(typeof context.window.GUIDE_CONFIG.readyForFamily,'boolean');
console.log('Local assets, section links and configuration checked.');
if(process.argv.includes('--release')||context.window.GUIDE_CONFIG.readyForFamily){
  assert(context.window.GUIDE_CONFIG.readyForFamily,'Release blocked: photos and fitting steps must be confirmed before publication.');
  const url=new URL(context.window.GUIDE_CONFIG.publicUrl);assert.equal(url.protocol,'https:');
  assert(!html.includes('class="pending"'),'Replace unfinished fitting steps before publication.');
}
