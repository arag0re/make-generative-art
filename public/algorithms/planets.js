var size,fg,bg,hexval=tokenData.hash,time=0;function setup(){size=min(windowWidth,windowHeight),createCanvas(size,size),parseInt(subHex(6))<255*invertedIncidence?(fg=color(46,46,46,255),bg=color(228,216,180)):(fg=color(228,216,180),bg=color(46,46,46,255)),frameRate(60),noiseSeed(42069)}function draw(){background(bg),stroke(fg),translate(width/2,height/2),(new System).draw(),time=parseInt(subHex(0))%4==0?time-.005:time+.005}const minOrbits=10,maxOrbits=1,minPlanetSpeed=.1,maxPlanetSpeed=3,minMoonSpeed=.5,maxMoonSpeed=10,moonRadius=1.1,minMoonDistance=.001,binaryDistance=.6,ringsIncidence=.2,moonIncidence=.2,binaryIncidence=.05,invertedIncidence=.05,ufoIncidence=.01,minStarRadius=.03,maxStarRadius=.08,distFromStar=.05,distBetweenOrbits=.015,extraOrbitsRadius=0,minPlanetRadius=.004,maxPlanetRadius=.018,minRingOrbit=.001,maxRingOrbit=.018;class System{constructor(){this.binary=!1,this.radius=map(parseInt(subHex(0)),0,255,minStarRadius,maxStarRadius),parseInt(subHex(62))<255*binaryIncidence&&(this.binary=!0,this.radius/=2.1),this.planets=[],this.createOrbits()}createOrbits(){var i=map(parseInt(subHex(1)),0,255,minOrbits,maxOrbits),s=this.radius,e=distFromStar;this.binary&&(e*=1.1);for(var t=0,n=0,a=0;a<i;a++){a>0&&(s=this.planets[a-1].orbit,e=this.planets[a-1].radius,this.planets[a-1].ufo&&(e*=2),t=(this.planets[a-1].ring.x+this.planets[a-1].ring.y)/2,n=this.planets[a-1].radius*moonRadius+minMoonDistance);var r=s+e+t+n+.002+distBetweenOrbits+map(parseInt(subHex(22+a)),0,255,0,extraOrbitsRadius);this.planets.push(new Planet(a,r))}}draw(){fill(fg),this.binary?(circle(cos(2*time)*this.radius*binaryDistance*size,sin(2*time)*this.radius*binaryDistance*size,this.radius*size),circle(cos(2*time+PI)*this.radius*binaryDistance*size,sin(2*time+PI)*this.radius*binaryDistance*size,this.radius*size)):circle(0,0,this.radius*size);for(var i=0;i<this.planets.length;i++)this.planets[i].draw()}}class Planet{constructor(i,s){this.radius=map(parseInt(subHex(2+i)),0,255,minPlanetRadius,maxPlanetRadius),this.speed=map(parseInt(subHex(12+i)),0,255,minPlanetSpeed,maxPlanetSpeed),this.orbit=s+this.radius;var e=map(parseInt(subHex(32+i)),0,255,0,this.radius+maxRingOrbit),t=map(parseInt(subHex(42+i)),0,255,this.radius,this.radius+maxRingOrbit);this.ring={x:e,y:t},this.ringRotation=map(parseInt(subHex(52+i)),0,255,0,PI),parseInt(subHex(42+i))<255*(1-ringsIncidence)&&(this.ring={x:0,y:0}),parseInt(subHex(42+i))<255*ufoIncidence&&(this.ufo=!0,this.orbit+=this.radius),parseInt(subHex(52+i))>255*(1-moonIncidence)&&(this.moon=!0),this.moon?this.orbit+=max((this.ring.x+this.ring.y)/2,(this.radius*moonRadius+minMoonDistance)/2+.01):this.orbit+=(this.ring.x+this.ring.y)/2,this.moonSpeed=map(noise(this.speed),0,1,minMoonSpeed,maxMoonSpeed)}draw(){noFill(),strokeWeight(5e-4*size),stroke(fg),circle(0,0,this.orbit*size),fill(fg),strokeWeight(.001*size);var i=cos(time*this.speed+10*this.speed)*this.orbit*size/2,s=sin(time*this.speed+10*this.speed)*this.orbit*size/2;if(this.ufo){this.radius<.01&&(this.radius=.01),arc(i,s,this.radius*size,this.radius*size,PI+PI/5,0-PI/5,PIE),stroke(bg);var e=this.radius*size*2,t=this.radius*size*.5;ellipse(i,s,e,t),fill(bg);var n=.3*e;ellipse(i,s+1,n,.3*t),fill(fg),stroke(fg),line(i+n/2-1,s+1,i+n/2+1,s+t),line(i,s+1,i,s+t),line(i-n/2+1,s+1,i-n/2-1,s+t)}else noStroke(),circle(i,s,this.radius*size);noFill(),stroke(fg),0==this.ring.x&&0==this.ring.y||(push(),translate(i,s),rotate(this.ringRotation),ellipse(0,0,this.ring.x*size,this.ring.y*size),pop()),this.moon&&!this.ufo&&(push(),translate(i,s),stroke(fg),fill(fg),circle(cos(time*this.moonSpeed)*(this.radius*moonRadius+minMoonDistance)*size,sin(time*this.moonSpeed)*(this.radius*moonRadius+minMoonDistance)*size,.002*size),pop())}}function subHex(i){return i+=2,"0x"+hexval.substring(i,i+2)}