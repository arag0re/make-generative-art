// CC BY-NC 4.0  https://github.com/aaronpenne/
let dim=Math.min(window.innerWidth,window.innerHeight),mil=0,sd=gs(tokenData.hash),hi=hti(tokenData.hash),cw="#F2F3EE",cb="#222",p_pal=[{w:10,n:"Riley",v:["#E8E2D6","#333"]},{w:5,n:"Light",v:["#E8E2D6","#eee","#fff",cw]},{w:5,n:"Darkness",v:["#111","#333","#313035","#000",cb]},{w:5,n:"Phoenix",v:["#8F3935","#D94","#E8E2D6"]},{w:10,n:"Sands",v:["#BA7182","#C99","#DA9","#D94"]},{w:20,n:"Bacon",v:["#A33","#89292D"]},{w:20,n:"South Beach",v:["#253122","#f9c1ce","#fdd4bd","#78cdd0"]},{w:20,n:"Young Again",v:["#a36aa5","#fcb315","#006eb8","#e31f26"]},{w:10,n:"Laguna",v:["#9bc","#cee","#099","#78cdd0"]},{w:10,n:"Slayer",v:["#6d4145","#ca92a8","#713b4c","#f9c1ce"]},{w:20,n:"Thaddeus",v:["#064f6e","#f68c50","#40456a","#f3a257"]},{w:10,n:"Squidgit",v:["#7a4456","#c2ae93","#c27544","#762c19"]},{w:10,n:"BB",v:["#12354e","#c2ae93","#bb7125","#eea78c"]},{w:20,n:"Cat's Game",v:["#45A","#336","#A33","#f3a257"]},{w:20,n:"Cat's Cradle",v:["#45A","#336","#358","#5493B6"]},{w:20,n:"Sycamore",v:["#6E4E37","#B73","#CCC","#C54","#C95","#D57C30","#D94"]},{w:40,n:"Zephyr",v:["#336","#358","#365","#45A","#4C3F5D","#4E6E61","#576","#5493B6","#7AC","#89292D","#87A","#8F3935","#A33","#B8513B","#B78","#CCC","#C54","#C95","#D57C30","#D94","#DA9","#C99","#DEC254","#E8E2D6"]}],out=gj(p_pal,"Zephyr",!0);p_pal.push({w:20,n:"Oracle",v:[cb,cw,rndC(...out)]});let p_bg=[{w:250,n:"Light",v:cw},{w:50,n:"Darkness",v:cb}],p_form=[{w:25,n:"Hard",v:"-1."},{w:225,n:"Circle",v:".3"},{w:50,n:"Soft",v:".03"}],p_sp=[{w:25,n:"Meditative",v:1},{w:275,n:"Conceptual",v:20}],p_ns=[{w:2,v:4},{w:5,v:5},{w:5,v:6},{w:2,v:10},{w:4,v:15},{w:4,v:20},{w:2,v:25}],p_sk=[{w:5,n:"Cross",v:"(((uv.y>-inv)&&(uv.y<inv))||((uv.x>-inv)&&(uv.x<inv)))"},{w:20,n:"Slice",v:"((uv.y>-inv*2.)&&(uv.y<inv*2.))"},{w:10,n:"Quarter",v:"(((uv.y>0.)&&(uv.x>0.))||((uv.y<0.) && (uv.x<0.)))"},{w:240,n:"Hidden",v:"(uv.y>1.)"},{w:25,n:"Half",v:"(uv.y<0.)"}],p_rd=[{w:180,n:"Balanced",v:"-90."},{w:100,n:"Tilted",v:"45."},{w:20,n:"Tilted Mirror",v:"-45."}],p_d=[{w:290,n:"Out",v:"-"},{w:10,n:"In",v:"+"}],bgi=cw,bgo=rndCJ(p_bg),sp=rndCJ(p_sp),pal=rndCJ(p_pal),nstp=rndCJ(p_ns);nstp="Light"==pal.n||"Darkness"==pal.n?rndC([15,20,25]):nstp.v;let stp=hi.map((n,e)=>mvs(e)).slice(32-nstp).sort();stp.push("0.","1."),stp.sort();let nb=nstp<5?0:parseInt(rndB(0,stp.length/4)),nw=nstp<5?0:parseInt(rndB(1,stp.length/4)),form=rndCJ(p_form),sk=rndCJ(p_sk),rd=rndCJ(p_rd),dr=rndCJ(p_d),col=pnc(pal.v,stp.length),scm="1.",sct=".25";"Balanced"!=rd.n&&"Circle"!=form.n&&(scm="1.325",sct=".005"),"Circle"==form.n&&"Hidden"==sk.n&&(rd=gj(p_rd,"Balanced"));let pz="Meditative"==sp.n?0:5;"Light"!=pal.n&&"Darkness"!=pal.n||(nb=0,nw=0,bgi=pal.v[0],sk=gj(p_sk,"Hidden")),"Light"==pal.n&&(bgo=gj(p_bg,"Light")),"Darkness"==pal.n&&(bgo=gj(p_bg,"Darkness"));let coli="";for(i=0;i<col.length;i++)coli+=`uniform vec3 c${i};`;let mixes="",mx=[];stp.forEach((n,e)=>{e<stp.length-1?mixes+=e%2==0?`c = mix(c, c${e}, smoothstep(${n}, ${stp[e+1]}, d));`:`c = mix(c, c${e}, step(${n}, d));`:e==stp.length-1&&(mixes+=`c = mix(c, c${e}, smoothstep(${n}, 1., d));`),mx.push(`c${e},`)}),mx.pop(),mx.shift();let mx_c=[...mx],mx_bw=[...mx];for(sh(mx_c),i=0;i<nb;i++)mixes=mixes.replace(mx_c.pop(),"uBK,");for(i=0;i<nw;i++)mixes=mixes.replace(mx_c.pop(),"uWT,");let mixes_bw=mixes;mx_bw.forEach((n,e)=>{bw=e%2==0?"uBK,":"uWT,",mixes_bw=mixes_bw.replace(n,bw)});let sv="attribute vec3 aPosition;attribute vec2 aTexCoord;varying vec2 vTC;void main(){vTC=aTexCoord;vec4 p4=vec4(aPosition,1.);p4.xy=p4.xy*2.-1.;gl_Position=p4;}",sf=`
precision highp float;varying vec2 vTC;uniform float uT;uniform vec2 uR;uniform vec3 uWT,uBK,final_color,uBGI,uBGO;${coli}float sdf(vec2 p,vec2 b,vec4 r){r.xy=(p.x>0.)?r.xy:r.zw;r.x =(p.y>0.)?r.x :r.y;vec2 q=abs(p)-b+r.x;return min(max(q.x,q.y),0.)+length(max(q,0.))-r.x;}vec3 sh(float d){vec3 c=vec3(uBGO*.25);c=mix(c,vec3(uBGO),smoothstep(${sct}-.3,${sct}+.1,d));return c;}vec3 px(vec2 uv){float sc=2.5*${scm};float bx=sdf(uv,vec2(.3,.3),vec4(${form.v}));float d=mod(bx*sc ${dr.v} uT-.25,1.);if(bx*sc > ${sct}){return sh(bx*sc);}vec3 c=vec3(uBGI);float inv=.02;if ${sk.v}{${mixes_bw}}else{${mixes}}return c;}mat2 rot(float a){a *= 3.14159/180.;float s=sin(a),c=cos(a);return mat2( c,-s,s,c );}void main(){float ps=1./uR.y;vec2 uv=vTC-.5;uv *= rot(${rd.v});
const vec2 H2=vec2(.5698402909980532,.7548776662466927);const float aa=1.5, ns=8.;vec3 col=vec3(0.);for(float i=0.;i<ns;i+=1.){vec2 d=fract(H2*i+.5)-.5;col += px(uv+d*ps*aa);}col/=ns;
gl_FragColor=vec4(col,1.);} // ty @piterpasma for the anti-aliasing routine
`;function setup(){createCanvas(dim,dim,WEBGL),s=createShader(sv,sf),shader(s),console.log(tokenData.hash),col.forEach((n,e)=>{s.setUniform(`c${e}`,htv(n))}),document.body.style.backgroundColor=bgo.v}function draw(){frameCount%sp.v==0&&frameCount>60*pz&&(mil+=2e-4),s.setUniform("uBGI",htv(bgi)),s.setUniform("uBGO",htv(bgo.v)),s.setUniform("uT",mil),s.setUniform("uR",[width,height]),s.setUniform("uWT",htv(cw)),s.setUniform("uBK",htv(cb)),rect(0,0,width,height)}function keyTyped(){switch(key){case"s":save(`${get_timestamp()}.jpg`);break;case"1":sp.v=1;break;case"2":sp.v=2;break;case"3":sp.v=7.25;break;case"4":sp.v=43;break;case"5":sp.v=260;break;case"6":sp.v=520;break;case"7":sp.v=1040;break;case"0":sp.v=0}}function windowResized(){dim=Math.min(window.innerWidth,window.innerHeight),resizeCanvas(dim,dim)}function hti(n){let e=[];for(let n=0;n<32;n++)e.push(tokenData.hash.slice(2+2*n,4+2*n));return e.map(n=>parseInt(n,16))}function gs(n){return parseInt(tokenData.hash.slice(0,16),16)}function mv(n){return mr(hi[n],0,255,0,1)}function mvs(n){return mv(n,0,1).toFixed(6).toString()}function mr(n,e,t,s,r){return(n-e)/(t-e)*(r-s)+s}function rnd(){return sd^=sd<<13,sd^=sd>>17,sd^=sd<<5,(sd<0?1+~sd:sd)%1e3/1e3}function rndB(n,e){return n+(e-n)*rnd()}function rndC(n){return n[Math.floor(rndB(0,.99*n.length))]}function rndCJ(n){return a=[],n.forEach((n,e)=>{for(i=0;i<n.w;i++)a.push(n)}),rndC(a)}function sh(e){for(let n=e.length-1;0<n;n--){var t=Math.floor(rnd()*(n+1));[e[n],e[t]]=[e[t],e[n]]}}function rme(n,e){for(var t=0;t<n.length;)n[t]===e?n.splice(t,1):++t;return n}function pnc(n,e){for(aa=[],idx=0;idx<e;idx++)cc=[...n],0==idx||1==n.length||(last_elem=aa[aa.length-1],cc=rme(cc,last_elem)),aa.push(rndC(cc));return aa}function htv(n){return h=/^\#([A-Fa-f\d]+)$/.exec(n)[1],3===h.length?[parseInt(h[0]+h[0],16)/255,parseInt(h[1]+h[1],16)/255,parseInt(h[2]+h[2],16)/255]:6===h.length?[parseInt(h[0]+h[1],16)/255,parseInt(h[2]+h[3],16)/255,parseInt(h[4]+h[5],16)/255]:void 0}function gj(n,e,t=!1){let s=n.filter(({n})=>n==e);return t?(s=s.map(({v:n})=>n),[...s]):s[0]}