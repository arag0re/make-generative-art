let nL,nP,mW,rE=!1,fE,st=null;const sY={L:"L",N:"N",R:"R"};let sDB=!1,uF=!1,ra,fN;const po=[],lI=[];let oS=[],sT=[];const dL=[],dS=[];let ro=0,rS=0;const rI=1e-4,mRS=.08,mL=20,maL=200,mB=0,maB=25;let nRa=30;const miSW=.8,maSW=2;let mH,maH,nO=0,nI=.0125,nM=!1,mD=!1,nMa=0,nR=0,baC,bC,oBC,yO=0,xO=0,pE,sS;const sSs={U:"U",RA:"RA",R:"R"};let cS;const cSs={G:"G",M:"M",F:"F"};let cAS,cASP,fBCC,cO=0;const cASs={X:"X",R:"R",RA:"RA",H:"H"};let nSR,nSP1,nSP2;const nSs={X:"X",S:"S",O:"O",T:"T",C:"C",A:"*"};let mNR,nRS;const nRSs={X:"X",N:"N"},hP=[];for(let n=0;n<32;n++)hP.push(tokenData.hash.slice(2+2*n,4+2*n));const dP=hP.map(n=>parseInt(n,16));let seed=parseInt(tokenData.hash.slice(0,16),16);function setup(){noiseSeed(seed);var n=windowWidth<windowHeight?windowWidth:windowHeight;createCanvas(n,n),frameRate(30),baC=rnd(mB,maB),background(baC),translate(width/2,height/2),deS(),uF||noFill();for(let n=0;n<=TWO_PI;n+=TWO_PI/nP){var s=map(sin(n),-1,1,-ra,ra),e=map(cos(n),-1,1,-ra,ra);po.push({x:s,y:e})}for(let n=0;n<nL;n++)sT.push(gRC()),gP(n);bC=gRC(),oS=[...sT],oBC=bC}function draw(){background(baC),translate(width/2+xO,height/2+yO),rotate(ro),sDB&&(push(),newBorderColor=gBC(),cAC(newBorderColor),circle(0,0,2*ra),pop()),lI.forEach((n,s)=>{var e=gLC(s);switch(cAC(e),st){case sY.R:var a={x:n.p1.x+aN(n.p1.x),y:n.p1.y+aN(n.p1.y)},t={x:n.p2.x+aN(n.p2.x),y:n.p2.y+aN(n.p2.y)};line(a.x,a.y,t.x,t.y),dNs(a,t,e);break;case sY.L:case sY.N:bezier(n.p1.x,n.p1.y,n.p2.x+aN(n.p2.x),n.p2.y+aN(n.p2.y),n.p3.x+aN(n.p3.x),n.p3.y+aN(n.p3.y),n.p4.x,n.p4.y),dNs(n.p1,n.p4,e)}}),mD||(cAS===cASs.R&&frameCount%fBCC==0&&(cO=0===sT.length?0:(cO+1)%sT.length),cAS===cASs.H&&(n=(mH>maH?255-mH+maH:maH-mH)*cASP,cO=(cO+2*PI/n)%(2*PI)),nM&&(nO+=nI,nMa<1&&(nMa+=1/150))),keyIsDown(46)&&0<lI.length&&(dL.push(lI.pop()),dS.push(sT.pop())),keyIsDown(32)&&lI.length<nL&&(lI.push(dL.pop()),sT.push(dS.pop())),keyIsDown(RIGHT_ARROW)&&rS<mRS&&(rS+=rI),keyIsDown(LEFT_ARROW)&&rS>-mRS&&(rS-=rI),ro+=rS;var n=height/540;keyIsDown(87)&&yO>-height/2&&(yO-=n),keyIsDown(83)&&yO<height/2&&(yO+=n),keyIsDown(65)&&xO>-width/2&&(xO-=n),keyIsDown(68)&&xO<width/2&&(xO+=n)}function cAC(n){if(cS!==cSs.G)return stroke(n.h,n.s,n.b),void(uF&&fill(n.h,n.s,n.b));stroke(n),uF&&fill(n)}function gBC(){switch(cAS){case cASs.RA:mD||0===frameCount||frameCount%fBCC!=0||(bC=gRC());break;case cASs.H:return gSH(bC)}return bC}function gLC(n){let s=n;switch(cAS){case cASs.R:s=(n+cO)%sT.length;break;case cASs.RA:mD||0===frameCount||frameCount%fBCC!=0||(sT[s]=gRC());break;case cASs.H:return gSH(sT[s])}return sT[s]}function gSH(n){var s=cS!==cSs.G?n.h:n,s=mH<maH?map(s,mH,maH,-1,1):map(s<mH?s+255:s,mH,maH+255,-1,1),s=(map(asin(s),-PI/2,PI/2,0,2*PI)+cO)%(2*PI),s=mH<maH?map(sin(s),-1,1,mH,maH):map(sin(s),-1,1,mH,mH+maH)%255;return cS===cSs.G?s:{h:s,s:n.s,b:n.b}}function dNs(n,s,e){push(),fN?cS!==cSs.G?fill(e.h,e.s,e.b):fill(e):noFill(),dN(n.x,n.y,noS(n),nSP1),dN(s.x,s.y,noS(s),nSP2),pop()}function dN(n,s,e,a){var t,r,c,o,S,p,i,m,h;switch(push(),translate(n,s),nRS===nRSs.N&&rotate(nRo(n,s)),a){case nSs.O:circle(0,0,e);break;case nSs.S:push(),rectMode(CENTER),square(0,0,e),pop();break;case nSs.T:m=i=0,h=e,triangle(i-h/2,m-h/2,i+h/2,m-h/2,i,m+h/2);break;case nSs.C:S=o=0,p=e,line(o-p/2,S-p/2,o+p/2,S+p/2),line(o-p/2,S+p/2,o+p/2,S-p/2);break;case nSs.A:r=t=0,c=e,line(t-c/2,r-c/2,t+c/2,r+c/2),line(t-c/2,r+c/2,t+c/2,r-c/2),line(t-c/2,r,t+c/2,r),line(t,r-c/2,t,r+c/2)}pop()}function keyPressed(){82===keyCode&&(rotate(-ro),cO=0,ro=0,rS=0,yO=0,xO=0,nO=0,nMa=0,sT=[...oS],bC=oBC),78===keyCode&&(mD=!mD)}function deS(){var n=rnd(width*(miSW/1080),width*(maSW/1080));switch(strokeWeight(n),mW=width/rnd(st===sY.N?2:4,8),nL=floor(mapV(0,mL,maL)),nP=floor(mapV(1,10,500)),floor(mapV(2,1,4))){case 1:st=sY.L;break;case 2:st=sY.N;break;default:st=sY.R}mapV(3)<.2&&(rE=!0),mapV(4)<.38&&(sDB=!0),mapV(5)<.15&&(uF=!0),ra=width/mapV(6,2.1,3),mapV(7)<.05&&(nM=!0,nI=mapV(8,.0075,.015)),nRa=mapV(9,25,35),nR=mapV(10,1,10),sS=sSs.R;n=mapV(11);n<=.2?sS=sSs.U:n<=.4&&(sS=sSs.RA),cS=cSs.G;n=mapV(12);maH=n<=.35?(cS=cSs.M,mH=rnd(0,255),(mH+51)%255):n<=.5?(cS=cSs.F,mH=0,255):(mH=50,300),nSP1=gNS(13),nSP2=gNS(14),nRS=mapV(15)<.3?nRSs.N:nRSs.X,mNR=mapV(16,PI,4*PI),fN=mapV(17)<.5,nSR=mapV(18,3,25),cAS=cASs.X;n=mapV(19);n<=.05?cAS=cASs.H:n<=.1?cAS=cASs.RA:n<=.15&&(cAS=cASs.R),cASP=mapV(20,.8,1.2),fBCC=floor(mapV(21,3,10))}function mapV(n,s=0,e=1){return map(dP[n],0,255,s,e)}function gRC(){return cS!==cSs.G?(colorMode(HSB,255),h=mH>maH?rnd(mH,mH+maH)%255:rnd(mH,maH),s=rnd(150,255),b=rnd(150,255),{h:h,s:s,b:b}):rnd(mH,maH)}function gNS(n){let s=nSs.X;n=mapV(n);return n<=.05?s=nSs.O:n<=.1?s=nSs.S:n<=.15?s=nSs.T:n<=.2?s=nSs.C:n<=.25&&(s=nSs.A),s}function gP(n){let s,e,a,t;switch(sS){case sSs.U:pE?s=pE:(s=gRVP(),fE=s);break;case sSs.RA:s=gRVP();break;default:s=po[ceil(rnd(0,nP-1))]}switch(st){case sY.R:e=gE(n),lI.push({p1:s,p2:e}),pE=e;break;case sY.L:for(t=gE(n),e=gLP(s,t,.2,.4);!iPOC(e.x,e.y);)e=gLP(s,t,.2,.4);for(a=gLP(s,t,.6,.8);!iPOC(a.x,a.y);)a=gLP(s,t,.6,.8);lI.push({p1:s,p2:e,p3:a,p4:t}),pE=t;break;case sY.N:for(t=gE(n),e=gLP(s,t,.2,.4);!iPV(e);)e=gLP(s,t,.2,.4);for(a=gLP(s,t,.6,.8);!iPV(a);)a=gLP(s,t,.6,.8);lI.push({p1:s,p2:e,p3:a,p4:t}),pE=t}}function gE(n){return n===nL-1&&sS===sSs.U?fE:rE?gRVP():po[ceil(rnd(0,nP-1))]}function gLP(n,s,e,a){return{x:lerp(n.x,s.x,rnd(e,a))+rnd(-mW,mW),y:lerp(n.y,s.y,rnd(e,a))+rnd(-mW,mW)}}function nRo(n,s){n=map(n,0,width,0,nR)+nO,s=map(s,0,height,0,nR)+nO;return map(noise(n+100,s+100),0,1,-mNR,mNR)}function noS(n){var s=map(n.x,0,width,0,nR)+nO,e=map(n.y,0,height,0,nR)+nO,n=width/2-ra<width/nSR/2?2*(width/2-ra):width/nSR;return map(noise(s,e),0,1,-n,n)}function aN(n){return map(noise(map(n,0,width,0,nR)+nO),0,1,-1,1)*(width/nRa)*nMa}function iPV(n){var s=n.x,e=n.y;return s*s+e*e<=ra*ra&&iPOC(n.x,n.y)}function iPOC(n,s){return n>=-width/2&&n<=width/2&&s>=-height/2&&s<=height/2}function gRVP(){let n={x:rnd(-width/2,width/2),y:rnd(-height/2,height/2)};for(;!iPV(n);)n={x:rnd(-width/2,width/2),y:rnd(-height/2,height/2)};return n}function rnd(n=0,s=1){return seed^=seed<<13,seed^=seed>>17,seed^=seed<<5,map((seed<0?1+~seed:seed)%1e3/1e3,0,1,n,s)}