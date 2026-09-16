import sharp from 'sharp';
import {mkdir} from 'node:fs/promises';
const photos={121854:'thumb-covers',122006:'finger-covers',121557:'main-black',121729:'holders',121450:'main-white',121513:'main-yellow',122148:'kit-layout'};
await mkdir('site/assets/kit',{recursive:true});
for(const [time,name] of Object.entries(photos)){
  await sharp(`C:/Users/DM/Desktop/TMP/IMG_20260916_${time}.jpg`).rotate().resize({width:1400,height:1400,fit:'inside',withoutEnlargement:true}).webp({quality:85}).toFile(`site/assets/kit/${name}.webp`);
  console.log(name);
}
