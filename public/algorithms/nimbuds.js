var round=Math.round,floor=Math.floor,abs=Math.abs,sqrt=Math.sqrt,PI=Math.PI, doc=document,win=window,hidden,BLINK_TO,BOX=false,CVS,SZ,CTR,CD,C,EASTER=false, cloudBuff,imgBuff,imgBuff2,nums,lp,tmp,stache;
init();
function normInt(s){ return parseInt(s,32)-SZ }
function d2r(n){ return n*PI/180 }
function to1(n){ return n/255 };
function to1N(n){ return n/128-1 };
function boxBlurT(src,tgt,w,h,r,H){
	var iarr=1/(r+r+1),i,j,ti,li,ri,fv,lv,val;
	for(i=0; i<w; i++){
		ti=i, li=ti, ri=ti+r*w, fv=src[ti], lv=src[ti+w*(h-1)], val=(r+1)*fv;
		for(j=0; j<r; j++) val += src[ti+j*w];
		for(j=0; j<=r; j++){
			val += src[ri] - fv;
			tgt[ti] = round( val*iarr ), ri+=w, ti+=w;
		}
		for( j=r+1; j<h-r; j++ ){
			val += src[ri] - src[li];
			tgt[ti] = round(val*iarr), li+=w, ri+=w, ti+=w;
		}
		for( j=h-r; j<h; j++ ){
			val += lv - src[li];
			tgt[ti] = round(val*iarr), li+=w, ti+=w;
		}
	}
}
function boxBlurH(src,tgt,w,h,r){
	var iarr=1/(r+r+1),i,j,ti,li,ri,fv,lv,val;
	for( i=0; i<h; i++) {
		ti=i*w, li=ti, ri=ti+r, fv=src[ti], lv=src[ti+w-1], val=(r+1)*fv;
		for( j=0; j<r; j++) val += src[ti+j];
		for( j=0; j<=r; j++){
			val += src[ri++] - fv;
			tgt[ti++] = round(val*iarr);
		}
		for( j=r+1; j<w-r; j++){
			val += src[ri++] - src[li++];
			tgt[ti++] = round(val*iarr);
		}
		for( j=w-r; j<w; j++){
			val += lv - src[li++];
			tgt[ti++] = round(val*iarr);
		}
	}
}
function boxBlur(src,tgt,w,h,r){
	for(var i=0; i<src.length; i++) tgt[i]=src[i];
	boxBlurH(tgt,src,w,h,r);
	boxBlurT(src,tgt,w,h,r);
}
function boxesForGauss(sigma, n){
	var wIdeal,wl,wu,mIdeal,m,sizes=[],i;
	wIdeal = sqrt( (12*sigma*sigma/n)+1 );
	wl = floor(wIdeal);
	if(wl%2==0) wl--;
	wu = wl+2;
	mIdeal = (12*sigma*sigma - n*wl*wl - 4*n*wl - 3*n)/(-4*wl - 4);
	m = round(mIdeal);
	for(i=0; i<n; i++) sizes.push(i<m?wl:wu);
	return sizes;
}
function gaussBlur(src,tgt,w,h,r){
	var bxs=boxesForGauss(r,3);
	boxBlur(src,tgt,w,h,(bxs[0]-1)/2);
	boxBlur(tgt,src,w,h,(bxs[1]-1)/2);
	boxBlur(src,tgt,w,h,(bxs[2]-1)/2);
}
function fastBlur(amount){
	var w=h=SZ,c=[],i,j, d=C.getImageData(0,0,w,h);
	for(i=0; i<3; i++){
		c.push( new Uint8ClampedArray(d.data.length/4) );
	}
	for(i=0; i<d.data.length; i+=4){
		for( j=0; j<c.length; j++ ){
			c[j][i/4] = (d.data[i+j]);
		}
	}
	for(i=0; i<c.length; i++){
		gaussBlur(c[i],c[i],w,h,amount);
	}
	for(i=0; i<d.data.length; i+=4){
		for( j=0; j<c.length; j++ ){
			d.data[i+j] = c[j][i/4];
		}
	}
	C.putImageData(d,0,0);
}
function drawCircle(x,y,r){
	C.beginPath();
	C.arc(x,y,r,0,2*PI);
}
function addCloud(){
	var x1=CD.a[0], y1=CD.a[1],count,i,j, x2,y2,scale,sizeMult=SZ/5,i,a=[];
	count = nums[0]%7+6;
	if (cloudBuff.length===0){
		for(i=0; i<count; i++){
			j = (nums[0]+i) % nums.length;
			cloudBuff.push([to1(nums[j])-0.5, to1(nums[j+1])-0.5, to1(nums[j+2])]);
		}
		cloudBuff.push([0,0]);
	}
	a = cloudBuff;
	C.save(); // shadows \/
	C.translate(0,SZ*-1);
	for(i=0; i<count; i++){
		x2 = x1 + a[i][0]*sizeMult*2;
		y2 = y1 + a[i][1]*sizeMult;
		scale = a[i][2]*sizeMult*0.6 + sizeMult*0.4;
		drawCircle(x2, y2, scale);
		C.shadowOffsetY = SZ+SZ/16.7;
		C.shadowColor = CD.shadC;
		C.shadowBlur = CD.shadBlur*4;
		C.fill();
	}
	drawCircle(x1,y1,sizeMult);
	C.fill();
	C.restore();
	C.save(); // circles \/
	C.fillStyle = "white";
	for(i=0; i<count; i++){
		x2 = x1 + a[i][0]*sizeMult*2;
		y2 = y1 + a[i][1]*sizeMult;
		scale = a[i][2]*sizeMult/2 + sizeMult/2;
		drawCircle(x2,y2,scale);
		C.fill();
	}
	drawCircle(x1,y1,sizeMult);
	C.fill();
	C.restore();
}
function addBrow(x,y,offs,ang,blink){
	if ( nums[2] > 128 && !blink ) return;
	var len = CD.eyeSize*2.1;
	C.save();
	blink ? C.translate(x,y) : C.translate(x,y-CD.eyeSize*1.4);
	C.rotate( ang*PI/180 );
	C.moveTo( len/-2,0 );
	C.beginPath();
	C.lineTo( len/-2,0 );
	C.lineTo( len/2,0 );
	C.stroke();
	C.restore();
}
function addEye(x,y,offs){
	drawCircle(x,y,CD.eyeSize );
	C.stroke();
	drawCircle(
		x + offs[0] * (CD.eyeSize-SZ/80-CD.pupSize),
		y + offs[1] * (CD.eyeSize-SZ/80-CD.pupSize),
		CD.pupSize
	);
	C.stroke();
}
function getHypo(a,b){ return sqrt(abs(a*a+b*b)) }
function getAngle(a,b,c){ return Math.acos(abs(a/c))*(180/PI) }
function addShape(shape,s,o,fill,stroke,shad){
	var vs=shape.verts, is=shape.ins||null, os=shape.outs||null, x=(o?o[0]:SZ/2), y=(o?o[1]:SZ/2), l=vs.length, ax,ay,bx,by,cx,cy,i;
	C.save();
	C.moveTo( vs[0][0]*s[0], vs[0][1]*s[1] );
	C.beginPath();
	for( i=0+l; i<=l+l; i++){
		os ? ax = x+(vs[(i-1)%l][0]+os[(i-1)%l][0])*s[0]:null;
		os ? ay = y+(vs[(i-1)%l][1]+os[(i-1)%l][1])*s[1]:null;
		is ? bx = x+(vs[i%l][0]+is[i%l][0])*s[0]:null;
		is ? by = y+(vs[i%l][1]+is[i%l][1])*s[1]:null;
		cx = x+vs[i%l][0]*s[0];
		cy = y+vs[i%l][1]*s[1];
		if ( is && os ){
			C.bezierCurveTo(ax,ay,bx,by,cx,cy);
		} else {
			C.lineTo(cx,cy);
		}
	}
	C.closePath();
	if (shad){
		C.shadowOffsetX = shad.offs[0];
		C.shadowOffsetY = shad.offs[1];
		C.shadowColor = shad.clr;
	}
	if (stroke){
		C.lineWidth = stroke.width;
		C.strokeStyle = stroke.style;
		C.lineJoin = stroke.join;
		C.stroke();
	}
	if (fill){
		C.fillStyle = fill;
		C.fill();
	}
	C.restore();
}
function toggleBox(){
	BOX = !BOX;
	render();
}
function addLabel(){
	C.save();
	var clr=["#F05878","#F2C01F","#35C1D4","#62C29C"], txt=["N","i","m","B","u","d","s"], rot=[3,-3,2,-2,1,-1,1],w=[0,17,12.4,15,15.6,15.2,15.2], p,x,y,i,r=17,k=SZ/256;
	C.font = "italic "+SZ/10+"px Arial, sans-serif";
	C.fontWeight = "900";
	C.strokeStyle = "#fff";
	C.fillStyle = "#fff";
	C.lineWidth = SZ/30;
	C.lineJoin = "round";
	C.rotate(d2r(r*-1));
	for(i=0;i<txt.length;i++){
		C.rotate(d2r(rot[i]));
		x=lp[0]+(i*k*w[i]);
		C.strokeText(txt[i],x,lp[1]);
		C.fillText(txt[i],x,lp[1]);
	}
	C.rotate(d2r(-1));
	C.lineWidth = SZ/128;
	for(i=0;i<txt.length;i++){
		C.rotate(d2r(rot[i]));
		x=lp[0]+(i*k*w[i]);
		C.strokeStyle = clr[i%4];
		C.strokeText(txt[i],x,lp[1]);
		C.fillStyle = clr[i%4];
		C.fillText(txt[i],x,lp[1]);
	}
	C.rotate(d2r(r-1));
	var clbl=[ [0,0,SZ/16], [SZ/-30,SZ/8,SZ/16], [SZ/-64,SZ/16,SZ/16], [SZ/14,SZ/48,SZ/16], [SZ/9,SZ/36,SZ/16], [SZ/5.5,SZ/48,SZ/16], [SZ/4.5,SZ/-64,SZ/16], [SZ/3.4,0,SZ/18], [SZ/2.8,SZ/-32,SZ/18] ];
	C.fillStyle="#D4EEF5";
	for(i=0;i<clbl.length;i++){
		p=clbl[i];
		drawCircle(p[0],p[1],p[2]);
		C.fill();
	}
	C.restore();
}function scaleShape(s){
	var p,i,j,v;
	for(p in s){
		for(i=0;i<s[p].length;i++){
			for(j=0;j<2;j++){
				v = s[p][i][j];
				s[p][i][j] *= SZ/800;
			}
		}
	}
}
function addBox(){
	var a="#35C1D5",stk,shad,i;
	C.fillStyle = "#ffffff20";
	C.fillRect(0,0,SZ,SZ);
	p1={ verts:[ [0,0],[SZ,0],[SZ,SZ],[0,SZ],[0,0],[0,SZ/3.8],[SZ/2.4,SZ/7.5],[SZ/2,0],[0,0]], ins:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,SZ/9],[0,0]], outs:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]] };
	p2={ verts:[ [0,SZ/3.8],[SZ/2.4,SZ/7.5],[SZ/2,0],[0,0] ], ins:[ [0,0],[0,0],[0,SZ/80],[0,0] ], outs:[ [0,0],[0,0],[0,0],[0,0] ] };
	stk={width:SZ/16, style:a, join:"miter"}
	shad={offs:[SZ/25,SZ/25],clr:"#00000040"};
	addShape(p1,[1,1],[0,0],null,stk,shad);
	addShape(p2,[1,1],[0,0],a,stk);
}
function addMouth(){
	var ctr,offs,a,b,ss,c,ang,p1,p2,p3, ctr = [SZ/2, SZ/1.48 + to1(nums[3])*(SZ/20)];
	offs = [to1(nums[4])*(SZ/6.7), to1N(nums[5])*(SZ/20)]
	a=offs[0], b=offs[1], ss=0.66, c=getHypo(a,b),ang,p1,p2,p3;
	ang = getAngle(a,b,c);
	ang < 7 ? offs[1]=0 : null;
	p1 = [ctr[0]-offs[0], ctr[1]+offs[1]], p2 = [ctr[0], ctr[1]], p3 = [ctr[0]+offs[0], ctr[1]+offs[1]];
	C.moveTo( p1[0], p1[1]);
	C.beginPath();
	C.lineTo( p1[0], p1[1]);
	C.arcTo(p2[0], p2[1], p3[0], p3[1], a);
	C.lineTo(p3[0], p3[1]);
	C.stroke();
	if (EASTER || nums[12]<39){
		stache={
			verts:[[-93,-38],[-52,6],[0,-33],[-41,-46],[-68,-28]],
			ins: [[9,-6],[-29,-4],[9,13],[13,-5],[9,-2]],
			outs: [[-10,0],[58,8],[-13,-17],[-13,5],[-16,4]]
		};
		scaleShape(stache);
		addShape(stache, [ss,ss], [ctr[0],ctr[1]+offs[1]/2], "#9c6f50");
		addShape(stache, [ss*-1,ss], [ctr[0],ctr[1]+offs[1]/2], "#9c6f50");
	}
}
function addBlush(p,s){
	C.save();
	var grad=C.createRadialGradient(p[0],p[1],0,p[0],p[1],s);
	grad.addColorStop(0,"#ff000020");
	grad.addColorStop(1,"#ff000000");
	C.fillStyle = grad;
	C.globalCompositeOperation = "hard-light";
	C.fillRect(p[0]-s, p[1]-s, p[0]+s, p[1]+s);
	C.restore();
}
function addFace(blink, bIdx){
	var cidx,col,ed,e1,e2,ang,offs,bl=(nums[15]<39);
	cidx = nums[6]%CD.colors.length;
	col = CD.colors[cidx];
	ed = to1(nums[7])*(SZ/13.33);
	e1, e2, ang=to1N(nums[8])*45;
	offs = [to1N(nums[9]), to1N(nums[10])];
	C.save();
	C.strokeStyle = col;
	C.lineWidth = CD.lineWidth;
	C.lineCap = C.lineJoin = "round";
	e1=[CTR-SZ/16-ed,CTR+SZ/13.33];
	e2=[CTR+SZ/20+ed,CTR+SZ/13.33];
	bl && addBlush([e1[0]-SZ/10,e1[1]+SZ/10],SZ/6);
	bl && addBlush([e2[0]+SZ/10,e2[1]+SZ/10],SZ/6);
	if(!blink){
		addEye(e1[0],e1[1],offs);
		addEye(e2[0],e2[1],offs);
		addBrow(e1[0],e1[1],offs,ang);
		addBrow(e2[0],e2[1],offs,ang*-1);
	}else{
		addBrow(e1[0],e1[1],[0,0],0,blink);
		addBrow(e2[0],e2[1],[0,0],0,blink);
	}
	addMouth();
	C.miterLimit = 0;
	C.restore();
	if (BOX){
		addBox();
		addLabel();
	}
	saveImg(bIdx);
}
function drawCurve(a,b,c){
	C.beginPath();
	C.moveTo(a[0],a[1]);
	C.quadraticCurveTo(b[0],b[1],c[0],c[1]);
}
function drawWireShadow(a,b,c){
	var dist=SZ/16.7,i;
	a[0]>c[0] ? a[0]+=dist : a[0]-=dist;
	b[0]>c[0] ? b[0]+=dist : b[0]-=dist;
	a[1]-=6, b[1]+=dist, c[1]+=dist/2;
	C.save();
	C.translate(0,SZ*-1);
	drawCurve(a,b,c);
	C.shadowOffsetY = SZ;
	C.shadowColor = CD.wireShadC;
	C.strokeStyle = CD.wireShadC;
	C.shadowBlur = CD.shadBlur;
	C.lineWidth = 0;
	for(i=0; i<3; i++) C.stroke();
	C.restore();
}
function drawWire(a,b,c){
	drawCurve(a,b,c);
	C.save();
	C.shadowColor = "#00000000";
	C.fillStyle = "rgba(0,0,0,0)";
	C.strokeStyle = "black";
	C.lineWidth = CD.lineWidth;
	C.stroke();
	C.restore();
}
function colorWire(a,b,c,clr){
	drawCurve(a,b,c);
	C.save();
	C.lineWidth = 1;
	C.strokeStyle = CD.colors[clr];
	C.shadowColor = CD.colors[clr];
	C.shadowBlur = SZ/180;
	for(var i=0; i<SZ/40; i++) C.stroke();
	C.restore();
}
function addWire(i, shad){
	var color = nums[i]%CD.colors.length, dangl = nums[i]<85, a,b,c,xdiff,x1,x2,x3;
	x1=to1(nums[(i+1)%32]), y1=to1N(nums[(i+2)%32]);
	x2=to1(nums[(i+3)%32]), y2=to1(nums[(i+4)%32]);
	x3=to1N(nums[(i+5)%32]);
	if (dangl){
		a = [x1*(SZ*1.2), SZ/-16];
		c = [CD.a[0], a[1]];
		b = [(a[0]+c[0])/2, y1*(SZ/2)];
	} else {
		a = [x2*(SZ*1.5), 0 - y2*(SZ/2)];
		c = [CD.a[0], CD.a[1]];
		b = [(a[0]+c[0])/2 + x3*(SZ/2), CD.a[1]];
	}
	if ( shad ){
		drawWireShadow(a,b,c);
	} else {
		drawWire(a,b,c);
		colorWire(a,b,c,color );
	}
}
function saveImg(i){
	var url=CVS.toDataURL(), img=doc.createElement("img");
	img.src = url;
	if( i ){
		imgBuff[i]=img;
		hidden.appendChild(img);
	}
}
function queueBlink(){
	clearTimeout(BLINK_TO);
	BLINK_TO = setTimeout( ()=>render(blink=true), to1(nums[18])*10000+5000 );
}
function drawBG(bIdx){
	if (bIdx && imgBuff[bIdx]){
		C.drawImage(imgBuff[bIdx],0,0);
		return;
	}
	var count=nums[0]%28+4,grad,i, ca=CD.colors[1], cb="#0A6A7F";
	grad=C.createRadialGradient(CD.a[0],CD.a[1],0,CD.a[0],CD.a[1],SZ);
	if (EASTER || nums[0]<64){
		CD.shadC='#0A6A7F'
	} else {
		ca=CD.bgC, cb=CD.shadC;
	}
	grad.addColorStop(0,ca);
	grad.addColorStop(1,cb);
	C.fillStyle = grad;
	C.fillRect(0,0,SZ,SZ);
	for(i=0; i<count; i++) addWire(i, shadow=true);
	fastBlur(8);
	for(i=0; i<count; i++) addWire(i);
	addCloud();
	saveImg(bIdx);
	imgBuff[0] = imgBuff[bIdx];
}
function render(blink){
	if(BOX){
		var i=3,j=4,k=5;
	}else{
		var i=0,j=1,k=2;
	}
	if (blink){
		if (!imgBuff[k]){
			drawBG(i);
			addFace(blink,k);
		} else {
			C.drawImage(imgBuff[k],0,0);
		}
		setTimeout(render,200);
	} else {
		if ( !imgBuff[j] ){
			drawBG(i);
			addFace(blink,j);
		} else {
			C.drawImage(imgBuff[j],0,0);
		}
	}
	queueBlink();
}
function getNums(){
	var hashPairs=[],seed,rvs,j=0;
	seed = parseInt(tokenData.hash.slice(0,16), 16);
	for (j=0; j<32; j++) hashPairs.push(tokenData.hash.slice(2+(j*2),4+(j*2)));
	rvs = hashPairs.map(n=>parseInt(n,16));
	return rvs;
}
function init(){
	cloudBuff=[],imgBuff=[],imgBuff2=[],nums=[],name={};
	kerns=[0,17,12.4,15,15.6,15.2,15.2],CVS=doc.querySelector("canvas");
	C=CVS.getContext("2d");
	clearTimeout(BLINK_TO);
	hidden = doc.createElement("div");
	hidden.style.display = "none";
	doc.body.appendChild(hidden);
	CVS.addEventListener("click",toggleBox);
	var href = doc.location.href;
	if (href.match('localhost') || href.match('github')){
		SZ = Math.min(win.innerWidth, win.innerHeight);
		doc.body.style.marginTop="10vh";
	} else {
		SZ = Math.min(win.innerWidth, win.innerHeight);
	}
	CVS.width=CVS.height=SZ, CTR=SZ/2;
	CD = { lineWidth:SZ/80, eyeSize:SZ/22.2, pupSize:SZ/160, a:[CTR, SZ/1.6], shadBlur:SZ/67, blur:SZ/80, colors:["#f2668b","#23c7d9","#48d9a4","#f2bf27"],bgC:"#f2f1df",shadC:"#c9c1a2",wireShadC:"#494102" };
	lp=[SZ/-96,SZ/4.2];
	nums = getNums();
}
function main(){
	init();
	render();
}
main();