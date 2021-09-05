let hashPairs=[];for(let e=0;e<32;e++)hashPairs.push(tokenData.hash.slice(2+2*e,4+2*e));const decPairs=hashPairs.map(e=>parseInt(e,16));let rns=hashPairs.map(e=>parseInt(e,16)%100),seed=parseInt(tokenData.hash.slice(0,16),16);class Random{constructor(e){this.seed=e}random_dec(){return this.seed^=this.seed<<13,this.seed^=this.seed>>17,this.seed^=this.seed<<5,(this.seed<0?1+~this.seed:this.seed)%1e3/1e3}random_between(e,o){return e+(o-e)*this.random_dec()}random_int(e,o){return Math.floor(this.random_between(e,o+1))}random_choice(e){return e[Math.floor(this.random_between(0,.99*e.length))]}}let os,tile,offset,rec,splitVal,struct,pals,R=new Random(seed),rots=[],pal=[],decoration=[],gridSize=[],divs=[],recursion=[],stripes=[2,3,4,5,6],allPal=["#176d17","#2b4b74","#EBC21D","#079A49","#f76b25","#ee8f3d","#c93918","#5e8074","#f47f7d","#a02e38","#0099cf","#f8aa1f","#005a9d","#f3aacc","#ea5241","#509066","#FF7376","#009575"],structCh=map_range(rns[0],0,100,0,1),palsCh=map_range(rns[1],0,100,0,1),splitValCh=map_range(rns[23],0,100,0,1);structCh<.4&&(struct=0),structCh<.15&&(struct=2),structCh<.03&&(struct=1),palsCh<.7&&(pals=4),palsCh<.56&&(pals=3),palsCh<.39&&(pals=2),palsCh<.22&&(pals=1),palsCh<.08&&(pals=0);let offW=2520,offH=3528;function setup(){let e=displayDensity();pixelDensity(e),rectMode(CORNER),windowHeight>=1.4*windowWidth?(ww=windowWidth,wh=1.4*windowWidth):(wh=windowHeight,ww=windowHeight/1.4),createCanvas(ww,wh,P2D);const o=offW;(os=createGraphics(offW,offH)).noStroke();let s=color(allPal[R.random_int(0,allPal.length-1)]);switch(struct){case 0:gridSize=[1],rots=[0],offset=rns[2]<40?o/5:0,divs=rns[3]<50?[.5]:rns[4]<75?[.25,.5,.75]:[.2,.4,.6,.8],splitVal=rns[5]<50?.5:map_range(rns[6],0,100,0,1),recursion=[2,3,4];break;case 1:gridSize=[4,5,6,7],rots=[0],offset=0,divs=[.5],splitVal=rns[7]<70?.5:map_range(rns[6],0,100,0,1),recursion=rns[8]<70?[3,4,5]:[5,6,7,8];break;case 2:gridSize=[2],rots=[0,90,180,270],offset=o/5,divs=rns[10]<50?[.5]:rns[11]<50?[.25,.5,.75]:[.2,.4,.6,.8],splitVal=rns[12]<50?.5:map_range(rns[6],0,100,0,1),recursion=[1,2,3];break;default:gridSize=[2,3,4],rots=[0],offset=rns[13]<50?o/5:0,divs=rns[14]<50?[.5]:rns[15]<75?[.25,.5,.75]:[.2,.4,.6,.8],splitVal=rns[16]<.5?.5:map_range(rns[6],0,100,0,1),recursion=rns[8]<60?[1,2,3]:[2,3,4]}switch(pals){case 0:rns[17]<20?((pal=["#1F2120","#ECE3D1"]).push(s),os.background(color(pal[R.random_int(0,pal.length-2)]))):(pal=["#1F2120","#ECE3D1"],os.background(color(pal[R.random_int(0,pal.length-1)])));break;case 1:pal=["#1F2120","#ECE3D1","#176d17","#2b4b74","#EBC21D","#079A49","#f76b25"],os.background(color(pal[R.random_int(1,pal.length-1)]));break;case 2:pal=["#1F2120","#ECE3D1","#ee8f3d","#c93918"],os.background(color(pal[R.random_int(1,pal.length-1)]));break;case 3:pal=["#14133F","#ECE3D1","#5e8074","#2b4b74","#f47f7d","#a02e38","#ef3f3c"],os.background(color(pal[R.random_int(1,pal.length-2)]));break;case 4:pal=["#1F2120","#ECE3D1","#FF7376","#009575"],os.background(color(pal[R.random_int(1,pal.length-1)]));break;default:pal=["#1F2120","#ECE3D1","#0099cf","#f8aa1f","#005a9d","#f3aacc","#ea5241","#509066"],os.background(color(pal[R.random_int(1,pal.length-1)]))}unit=gridSize[R.random_int(0,gridSize.length-1)],console.log("Unit: "+unit),tileH=(offW-offset)/unit,tileV=(offH-offset)/unit,console.log("TileH: "+tileH);for(let e=0;e<unit;e++)for(let o=0;o<unit;o++){let s=recursion[R.random_int(0,recursion.length-1)],r=rots[R.random_int(0,rots.length-1)],l=e*tileH+tileH/2+offset/2,t=o*tileV+tileV/2+offset/2;os.push(),os.translate(l,t),os.rotate(radians(r)),divider(s,-tileH/2,-tileV/2,tileH,tileV),os.pop()}image(os,0,0,ww,wh)}function divider(e,o,s,r,l){if(fx=round(o),fy=round(s),fw=round(r),fh=round(l),os.fill(color(pal[R.random_int(0,pal.length-1)])),0==e)if(R.random_dec()<=.8)if(os.fill(color(pal[R.random_int(0,pal.length-1)])),os.rect(fx,fy,fw,fh),l>r)if(R.random_dec()<=.5)os.fill(color(pal[R.random_int(0,pal.length-1)])),os.rectMode(CENTER),os.rect(fx+fw/2,fy+fh/2,fw/2),os.rectMode(CORNER);else if(rns[20]<=50)os.fill(color(pal[R.random_int(0,pal.length-1)])),os.ellipse(fx+fw/2,fy+fh/2,fw/2,fw/2,50);else{let e=stripes[R.random_int(0,stripes.length-1)];if(R.random_dec()<=.5)for(let o=0;o<e;o++)os.fill(color(pal[R.random_int(0,pal.length-1)])),os.rect(fx,round(fy+fh/e*o),fw,round(fh/e));else for(let o=0;o<e;o++)os.fill(color(pal[R.random_int(0,pal.length-1)])),os.rect(fx,fy+o*o,fw,fh/o)}else if(rns[20]<=50)R.random_dec()<=.5?(os.fill(color(pal[R.random_int(0,pal.length-1)])),os.beginShape(),os.vertex(fx+r/2,fy),os.vertex(fx+r/4,fy+l),os.vertex(fx+r-r/4,fy+l),os.endShape(CLOSE)):(os.fill(color(pal[R.random_int(0,pal.length-1)])),os.beginShape(),os.vertex(fx+r/4,fy),os.vertex(fx+r-r/4,fy),os.vertex(fx+r/2,fy+l),os.endShape(CLOSE));else if(os.fill(color(pal[R.random_int(0,pal.length-1)])),os.rect(fx,fy,fw,fh),splitVal<.2){os.fill(color(pal[R.random_int(0,pal.length-1)])),os.rect(fx,fy,fw,fh);let e=stripes[R.random_int(0,stripes.length-1)];for(let o=0;o<e;o++)os.fill(color(pal[R.random_int(0,pal.length-1)])),os.rect(fx,round(fy+fh/e*o),fw,round(fh/e))}else splitVal<.8?R.random_dec()<=.5?(os.fill(color(pal[R.random_int(0,pal.length-1)])),os.beginShape(),os.vertex(fx,fy),os.vertex(fx+fw,fy),os.vertex(fx,fy+fh),os.endShape(CLOSE)):(os.fill(color(pal[R.random_int(0,pal.length-1)])),os.beginShape(),os.vertex(fx,fy),os.vertex(fx,fy+fh),os.vertex(fx+fw,fy+fh),os.endShape(CLOSE)):(os.fill(color(pal[R.random_int(0,pal.length-1)])),os.rect(fx,fy,fw,fh));else rns[21]<=50||(os.fill(color(pal[R.random_int(0,pal.length-1)])),os.rect(fx,fy,fw,fh));else{let t=divs[R.random_int(0,divs.length-1)];R.random_dec()>=splitVal?(divider(e-1,fx,fy,fw,round(l*t)),divider(e-1,o,s+l*t,r,l*(1-t))):(divider(e-1,fx,fy,round(r*t)+1,fh),divider(e-1,o+r*t,s,r*(1-t),l))}}function map_range(e,o,s,r,l){return r+(l-r)*(e-o)/(s-o)}