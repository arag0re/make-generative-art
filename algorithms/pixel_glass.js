function init(){const e=document.getElementsByTagName("canvas")[0];e.width=document.body.clientWidth,e.height=document.body.clientHeight,drawToken(e,tokenData.hasOwnProperty("hash")?tokenData.hash:tokenData),getMetadata(tokenData.hasOwnProperty("hash")?tokenData.hash:tokenData)}function drawToken(e,a){const t=e.getContext("2d");t.webkitImageSmoothingEnabled=!1;let l=Math.min(e.width,e.height),n=l/64,i=!(parseInt(a.substr(-1,1),16)>0),s=i?360:60,o=parseInt(a.substr(-3,2),16)/256,u=parseInt(a.substr(-5,2),16)/256;t.fillStyle=i?"hsl(42,100%,95%)":"hsl(192,100%,90%)",t.fillRect(0,0,l,l);let h={hue:204+parseInt(o*s-s/2),sat:100,baseLum:parseInt(20*u+80),lum:0,baseAlpha:i?.3:.2,alpha:0,index:5,direction:!0,remaining:0,value:0};h.lum=h.baseLum,h.alpha=h.baseAlpha,h.update=(()=>{if(h.remaining>0)h.remaining--;else{h.index++;let e=parseInt(a.substr(-1*h.index,1),16)-8;h.direction=e>0,h.remaining=Math.abs(e)}if(h.value=h.direction?h.value+1:h.value-1,h.direction=h.value>24||h.value<-12?!h.direction:h.direction,h.lum=4*h.value+h.baseLum,h.value>12){let e=Math.abs(h.value)-12;h.alpha=.1*e+h.baseAlpha}else h.alpha=h.baseAlpha;h.lum=h.lum>50?h.lum:50,h.lum=h.lum<100?h.lum:100,h.alpha=h.alpha>.2?h.alpha:.2,h.alpha=h.alpha<1?h.alpha:1});for(let e=0;e<64;e++){h.update();let a=`hsla(${h.hue},${h.sat}%,${h.lum}%,${h.alpha})`;for(let t=0;t<=e;t++)r(e-t,t,a)}for(let e=1;e<64;e++){h.update();let a=`hsla(${h.hue},${h.sat}%,${h.lum}%,${h.alpha})`,t=e,l=63;for(let n=0;n<64-e;n++)r(t,l,a),t++,l--}function r(e,a,l){t.fillStyle=l,t.fillRect(e*n,a*n,n,n)}}function getMetadata(e){let a=!(parseInt(e.substr(-1,1),16)>0),t=a?360:60,l=parseInt(e.substr(-3,2),16)/256,n=204+parseInt(l*t-t/2),i=n<36?"Fire":"";i=n>=36&&n<=63?"Goldenrod":i,i=n>=64&&n<=133?"Electric":i,i=73===n?"Emerald Dragon":i,i=n>=134&&n<=171?"Froggy":i,i=n>=172&&n<=181?"Turquoise":i,i=n>=182&&n<=191?"Sky":i,i=n>=192&&n<=211?"Cobalt":i,i=n>=212&&n<=255?"Royal":i,i=n>=256&&n<=281?"Regal":i,i=n>=282&&n<=323?"Neon":i,i=n>=324&&n<=333?"Sexbomb":i;let s={infused:a?"Yes":"No",tint:i=n>333?"Lipstick":i};return console.table(s),s}window.addEventListener("load",init,!1);