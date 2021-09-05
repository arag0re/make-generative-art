let seed=parseInt(tokenData.hash.slice(0,16),16);class Cell{constructor(t,e,s="black",l=0,r={}){this.x=t,this.y=e,this.color=s,this.state=l,this.p=r}is_alive(){return 1==this.state}init_state(t){this.state=t,this.state_i=t}init_color(t){this.color=t,this.color_i=t}reset(){this.state=this.state_i,this.color=this.color_i,this.p.x=this.p_i.x,this.p.y=this.p_i.y,this.p.xs=this.p_i.xs,this.p.ys=this.p_i.ys}copy(t){this.x=t.x,this.y=t.y,this.p.x=t.p.x,this.p.y=t.p.y,this.p.xs=t.p.xs,this.p.ys=t.p.ys}}class Grid{constructor(t,e){this.x=t,this.y=e,this.cells=[];for(let t=0;t<this.y;t++){let e=[];for(let s=0;s<this.x;s++){let l=new Cell(s,t);e.push(l)}this.cells.push(e)}}get_cell(t,e){return this.cells[e][t]}on_border(t,e){return 0==t|0==e|t==this.x-1|e==this.y-1}on_corner(t,e){return 0==t&0==e|t==this.x-1&e==this.y-1|0==t&e==this.y-1|t==this.x-1&0==e}get_neighbor_cells(t,e,s="a"){let l=[];return 0!=e&("a"==s|"v"==s)&&l.push(this.get_cell(t,e-1)),t!=this.x-1&("a"==s|"h"==s)&&l.push(this.get_cell(t+1,e)),e!=this.y-1&("a"==s|"v"==s)&&l.push(this.get_cell(t,e+1)),0!=t&("a"==s|"h"==s)&&l.push(this.get_cell(t-1,e)),l}get_neighbor_properties(t,e,s,l){return{t:0==e?l:this.get_cell(t,e-1)[s],r:t==this.x-1?l:this.get_cell(t+1,e)[s],b:e==this.y-1?l:this.get_cell(t,e+1)[s],l:0==t?l:this.get_cell(t-1,e)[s]}}get_population(t,e,s){let l=this.get_neighbor_properties(t,e,"state",s=s);return l.l+l.t+l.r+l.b}reset(){for(let t=0;t<this.y;t++)for(let e=0;e<this.x;e++)this.get_cell(e,t).reset()}}var DEF_SIZE=500,DEF_COUNT=20,WIDTH=window.innerWidth,HEIGHT=window.innerHeight,DIM=Math.min(WIDTH,HEIGHT),COUNT=25,M=DIM/DEF_SIZE,C=DEF_COUNT/COUNT,FILLING=6*M*C,CRVLG=50*M*C,CRVSM=5*M*C,BORDER=5*M*C,SIZE=(DIM-(COUNT+1)*BORDER)/COUNT,JOIN=!0,WANDER=!1,NM=rnd_bet(.1,.9),NSEED=Math.floor(rnd_bet(1,9999999999)),BGL="#EEEEEE",BGD="#08090A",PALS=[["#1B064C","#F72585","#B5179E","#7209B7","#4361EE","#4361EE","#4895EF","#4CC9F0"],[BGL,"#FF0000","#00A08A","#F2AD00","#F98400","#5BBCD6"],[BGL,"#85D4E3","#F4B5BD","#CDC08C","#FAD77B"],[BGL,"#E6A0C4","#C6CDF7","#D8A499","#7294D4"],[BGL,"#E92EFB","#FF2079","#440BD4","#04005E"],[BGL,"#B0305C","#EB564B","#73275C"],[BGL,"#FF2E63","#FF9D9D","#FFC2C2"],[BGL,"#363636","#E8175D"],[BGL,"#132743","#EDC988"],[BGD,"#08F7FE","#09FBD3","#FE53BB","#F5D300"],[BGD,"#FF184C","#FF184C","#0A9CF5"],[BGD,"#FFFFEB","#C2C2D1"],[BGD,"#283149","#A7FF83"],[BGD,"#544F63","#F2D2EC"]],PN=rnd_cho([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),P=PALS[PN],BG=P[0],PAL=P.slice(1),MC=rnd_cho(PAL),CURSOR=rnd_cho(["a","h","v"]),WC=new Cell(0,0,color=rnd_cho(PAL)),G=new Grid(COUNT,COUNT);function setup(){createCanvas(DIM,DIM),noStroke(),noiseSeed(NSEED),background(BG);for(let t=BORDER,e=0;e<COUNT;t+=SIZE+BORDER,e++)for(let s=BORDER,l=0;l<COUNT;s+=SIZE+BORDER,l++){let r=G.get_cell(l,e),o=255*noise(l*NM,e*NM)>130?1:0;r.init_state(o),r.p={x:s,y:t,xs:SIZE,ys:SIZE},r.p_i={x:s,y:t,xs:SIZE,ys:SIZE}}for(let t=0;t<G.x;t++)for(let e=0;e<G.y;e++){let s=G.get_cell(t,e),l=G.get_population(t,e,b=1);0==l&&s.init_state(0),1==l&G.on_border(t,e)&&s.init_state(0),2==l&G.on_corner(t,e)&&s.init_state(0)}for(let t=0;t<G.x;t++)for(let e=0;e<G.y;e++){let s=G.get_cell(t,e);s.is_alive()?("black"==s.color?s.init_color(rnd_cho(PAL)):s.color_i="black",search_party(s)):s.init_color("black")}}function draw(){if(background(BG),vMouse(mouseX,mouseY)){let s=mouseX,l=mouseY;t:for(let r=0;r<G.x;r++)for(let o=0;o<G.y;o++){var t=G.get_cell(r,o);if(s>=t.p.x-BORDER&s<=t.p.x+t.p.xs+BORDER&&l>=t.p.y-BORDER&l<=t.p.y+t.p.ys+BORDER){var e=G.get_neighbor_cells(t.x,t.y,CURSOR);if(mouseIsPressed&mouseButton===LEFT){t.init_state(1),t.init_color(MC);for(let t=0;t<e.length;t++)e[t].init_state(1),e[t].init_color(MC)}else{t.state=1;for(let t=0;t<e.length;t++)e[t].state=1}break t}}}for(let t=0;t<G.x;t++)for(let e=0;e<G.y;e++){let s=G.get_cell(t,e),l=G.get_neighbor_properties(t,e,w="state",bd=1);l.l,l.t,l.r,l.b;s.p.tl=0==l.t&0==l.l?CRVLG:CRVSM,s.p.tr=0==l.t&0==l.r?CRVLG:CRVSM,s.p.bl=0==l.b&0==l.l?CRVLG:CRVSM,s.p.br=0==l.b&0==l.r?CRVLG:CRVSM,s.p.l=1==l.l&0!=t,s.p.t=1==l.t&0!=e,s.p.b=1==l.b&e!=G.y-1,s.p.r=1==l.r&t!=G.x-1,JOIN&&(s.p.t&&(s.p.y=s.p_i.y-FILLING,s.p.ys=s.p_i.ys+FILLING,s.p.tl=0,s.p.tr=0),s.p.b&&(s.p.bl=0,s.p.br=0))}for(let t=0;t<G.x;t++)for(let e=0;e<G.y;e++){let s=G.get_cell(t,e);s.is_alive()&&("black"==s.color&&(s.color=rnd_cho(PAL)),search_party(s))}WANDER&&sbox(WC.color,WC.p.x,WC.p.y,WC.p.xs,WC.p.ys,CRVLG,CRVLG,CRVLG,CRVLG);for(let t=0;t<G.x;t++)for(let e=0;e<G.y;e++){let s=G.get_cell(t,e);s.is_alive()&&sbox(s.color,s.p.x,s.p.y,s.p.xs,s.p.ys,s.p.tl,s.p.tr,s.p.br,s.p.bl)}if(G.reset(),void 0===t||(t.color=MC,search_party(t)),WANDER&&frameCount%30==0){let t=G.get_neighbor_cells(WC.x,WC.y),e=[];for(let s=0;s<t.length;s++)t[s].is_alive()||e.push(t[s]),e.length>0&&WC.copy(random(e))}}function search_party(t){let e=G.get_neighbor_cells(t.x,t.y);for(let s=0;s<e.length;s++){let l=e[s];l.is_alive()&&"black"==l.color|t.color==MC&l.color!=MC&&(l.color=t.color,search_party(l))}}function vMouse(t,e){return t>0&t<DIM&e>0&e<DIM}function keyPressed(){if(37===keyCode&&(BG=BGL),39===keyCode&&(BG=BGD),66===keyCode&&(BG=P[0]),38===keyCode&&(JOIN=!0),40===keyCode&&(JOIN=!1),32==keyCode){WANDER=!0;let t=[];for(let e=0;e<G.x;e++)for(let s=0;s<G.y;s++)G.get_cell(e,s).is_alive()||t.push(G.get_cell(e,s));t.length>0&&WC.copy(random(t))}}function sbox(t,e,s,l,r,o,i,h,n){fill(t),rect(e,s,l,r,o,i,h,n)}function rnd_dec(){return seed^=seed<<13,seed^=seed>>17,((seed^=seed<<5)<0?1+~seed:seed)%1e3/1e3}function rnd_bet(t,e){return t+(e-t)*rnd_dec()}function rnd_cho(t){return t[Math.floor(rnd_bet(0,.99*t.length))]}