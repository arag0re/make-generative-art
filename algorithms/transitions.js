let i=window,e=document,q=Math,G=THREE;const W={type:"change"},Q={type:"start"},J={type:"end"};class t extends G.EventDispatcher{constructor(e,t){super(),document,this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=q.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:G.MOUSE.ROTATE,MIDDLE:G.MOUSE.DOLLY,RIGHT:G.MOUSE.PAN},this.touches={ONE:G.TOUCH.ROTATE,TWO:G.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return m.phi},this.getAzimuthalAngle=function(){return m.theta},this.listenToKeyEvents=function(e){e.addEventListener("keydown",_),this._domElementKeyEvents=e},this.saveState=function(){l.target0.copy(l.target),l.position0.copy(l.object.position),l.zoom0=l.object.zoom},this.reset=function(){l.target.copy(l.target0),l.object.position.copy(l.position0),l.object.zoom=l.zoom0,l.object.updateProjectionMatrix(),l.dispatchEvent(W),l.update(),p=u.NONE},this.update=function(){const o=new G.Vector3,a=(new G.Quaternion).setFromUnitVectors(e.up,new G.Vector3(0,1,0)),r=a.clone().invert(),i=new G.Vector3,c=new G.Quaternion,s=2*q.PI;return function(){const e=l.object.position;o.copy(e).sub(l.target),o.applyQuaternion(a),m.setFromVector3(o),l.autoRotate&&p===u.NONE&&A(2*q.PI/60/60*l.autoRotateSpeed),l.enableDamping?(m.theta+=f.theta*l.dampingFactor,m.phi+=f.phi*l.dampingFactor):(m.theta+=f.theta,m.phi+=f.phi);let t=l.minAzimuthAngle,n=l.maxAzimuthAngle;return isFinite(t)&&isFinite(n)&&(t<-q.PI?t+=s:t>q.PI&&(t-=s),n<-q.PI?n+=s:n>q.PI&&(n-=s),t<=n?m.theta=q.max(t,q.min(n,m.theta)):m.theta=m.theta>(t+n)/2?q.max(t,m.theta):q.min(n,m.theta)),m.phi=q.max(l.minPolarAngle,q.min(l.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=h,m.radius=q.max(l.minDistance,q.min(l.maxDistance,m.radius)),!0===l.enableDamping?l.target.addScaledVector(b,l.dampingFactor):l.target.add(b),o.setFromSpherical(m),o.applyQuaternion(r),e.copy(l.target).add(o),l.object.lookAt(l.target),!0===l.enableDamping?(f.theta*=1-l.dampingFactor,f.phi*=1-l.dampingFactor,b.multiplyScalar(1-l.dampingFactor)):(f.set(0,0,0),b.set(0,0,0)),h=1,!!(g||i.distanceToSquared(l.object.position)>d||8*(1-c.dot(l.object.quaternion))>d)&&(l.dispatchEvent(W),i.copy(l.object.position),c.copy(l.object.quaternion),!(g=!1))}}(),this.dispose=function(){l.domElement.removeEventListener("contextmenu",F),l.domElement.removeEventListener("pointerdown",U),l.domElement.removeEventListener("pointercancel",V),l.domElement.removeEventListener("wheel",z),l.domElement.ownerDocument.removeEventListener("pointermove",Y),l.domElement.ownerDocument.removeEventListener("pointerup",H),null!==l._domElementKeyEvents&&l._domElementKeyEvents.removeEventListener("keydown",_)};const l=this,u={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let p=u.NONE;const d=1e-6,m=new G.Spherical,f=new G.Spherical;let h=1;const b=new G.Vector3;let g=!1;const o=new G.Vector2,a=new G.Vector2,r=new G.Vector2,i=new G.Vector2,c=new G.Vector2,s=new G.Vector2,v=new G.Vector2,E=new G.Vector2,y=new G.Vector2,w=[],n={};function O(){return q.pow(.95,l.zoomSpeed)}function A(e){f.theta-=e}function T(e){f.phi-=e}const P=function(){const n=new G.Vector3;return function(e,t){n.setFromMatrixColumn(t,0),n.multiplyScalar(-e),b.add(n)}}(),x=function(){const n=new G.Vector3;return function(e,t){!0===l.screenSpacePanning?n.setFromMatrixColumn(t,1):(n.setFromMatrixColumn(t,0),n.crossVectors(l.object.up,n)),n.multiplyScalar(e),b.add(n)}}(),L=function(){const a=new G.Vector3;return function(e,t){var n,o=l.domElement;l.object.isPerspectiveCamera?(n=l.object.position,a.copy(n).sub(l.target),n=a.length(),n*=q.tan(l.object.fov/2*q.PI/180),P(2*e*n/o.clientHeight,l.object.matrix),x(2*t*n/o.clientHeight,l.object.matrix)):l.object.isOrthographicCamera?(P(e*(l.object.right-l.object.left)/l.object.zoom/o.clientWidth,l.object.matrix),x(t*(l.object.top-l.object.bottom)/l.object.zoom/o.clientHeight,l.object.matrix)):l.enablePan=!1}}();function I(e){l.object.isPerspectiveCamera?h/=e:l.object.isOrthographicCamera?(l.object.zoom=q.max(l.minZoom,q.min(l.maxZoom,l.object.zoom*e)),l.object.updateProjectionMatrix(),g=!0):l.enableZoom=!1}function S(e){l.object.isPerspectiveCamera?h*=e:l.object.isOrthographicCamera?(l.object.zoom=q.max(l.minZoom,q.min(l.maxZoom,l.object.zoom/e)),l.object.updateProjectionMatrix(),g=!0):l.enableZoom=!1}function C(e){o.set(e.clientX,e.clientY)}function j(e){i.set(e.clientX,e.clientY)}function D(){var e,t;1===w.length?o.set(w[0].pageX,w[0].pageY):(e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY),o.set(e,t))}function N(){var e,t;1===w.length?i.set(w[0].pageX,w[0].pageY):(e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY),i.set(e,t))}function R(){var e=w[0].pageX-w[1].pageX,t=w[0].pageY-w[1].pageY,t=q.sqrt(e*e+t*t);v.set(0,t)}function Z(e){var t;1==w.length?a.set(e.pageX,e.pageY):(n=K(e),t=.5*(e.pageX+n.x),n=.5*(e.pageY+n.y),a.set(t,n)),r.subVectors(a,o).multiplyScalar(l.rotateSpeed);var n=l.domElement;A(2*q.PI*r.x/n.clientHeight),T(2*q.PI*r.y/n.clientHeight),o.copy(a)}function k(e){var t,n;1===w.length?c.set(e.pageX,e.pageY):(n=K(e),t=.5*(e.pageX+n.x),n=.5*(e.pageY+n.y),c.set(t,n)),s.subVectors(c,i).multiplyScalar(l.panSpeed),L(s.x,s.y),i.copy(c)}function M(e){var t=K(e),n=e.pageX-t.x,t=e.pageY-t.y,t=q.sqrt(n*n+t*t);E.set(0,t),y.set(0,q.pow(E.y/v.y,l.zoomSpeed)),I(y.y),v.copy(E)}function U(e){var t;!1!==l.enabled&&(0===w.length&&(l.domElement.ownerDocument.addEventListener("pointermove",Y),l.domElement.ownerDocument.addEventListener("pointerup",H)),t=e,w.push(t),("touch"===e.pointerType?function(e){switch(B(e),w.length){case 1:switch(l.touches.ONE){case G.TOUCH.ROTATE:if(!1===l.enableRotate)return;D(),p=u.TOUCH_ROTATE;break;case G.TOUCH.PAN:if(!1===l.enablePan)return;N(),p=u.TOUCH_PAN;break;default:p=u.NONE}break;case 2:switch(l.touches.TWO){case G.TOUCH.DOLLY_PAN:if(!1===l.enableZoom&&!1===l.enablePan)return;l.enableZoom&&R(),l.enablePan&&N(),p=u.TOUCH_DOLLY_PAN;break;case G.TOUCH.DOLLY_ROTATE:if(!1===l.enableZoom&&!1===l.enableRotate)return;l.enableZoom&&R(),l.enableRotate&&D(),p=u.TOUCH_DOLLY_ROTATE;break;default:p=u.NONE}break;default:p=u.NONE}p!==u.NONE&&l.dispatchEvent(Q)}:function(e){let t;switch(e.button){case 0:t=l.mouseButtons.LEFT;break;case 1:t=l.mouseButtons.MIDDLE;break;case 2:t=l.mouseButtons.RIGHT;break;default:t=-1}switch(t){case G.MOUSE.DOLLY:if(!1===l.enableZoom)return;!function(e){v.set(e.clientX,e.clientY)}(e),p=u.DOLLY;break;case G.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===l.enablePan)return;j(e),p=u.PAN}else{if(!1===l.enableRotate)return;C(e),p=u.ROTATE}break;case G.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===l.enableRotate)return;C(e),p=u.ROTATE}else{if(!1===l.enablePan)return;j(e),p=u.PAN}break;default:p=u.NONE}p!==u.NONE&&l.dispatchEvent(Q)})(e))}function Y(e){!1!==l.enabled&&("touch"===e.pointerType?function(e){switch(B(e),p){case u.TOUCH_ROTATE:if(!1===l.enableRotate)return;Z(e),l.update();break;case u.TOUCH_PAN:if(!1===l.enablePan)return;k(e),l.update();break;case u.TOUCH_DOLLY_PAN:if(!1===l.enableZoom&&!1===l.enablePan)return;!function(e){l.enableZoom&&M(e),l.enablePan&&k(e)}(e),l.update();break;case u.TOUCH_DOLLY_ROTATE:if(!1===l.enableZoom&&!1===l.enableRotate)return;!function(e){l.enableZoom&&M(e),l.enableRotate&&Z(e)}(e),l.update();break;default:p=u.NONE}}:function(e){if(!1!==l.enabled)switch(p){case u.ROTATE:if(!1===l.enableRotate)return;!function(e){a.set(e.clientX,e.clientY),r.subVectors(a,o).multiplyScalar(l.rotateSpeed),e=l.domElement,A(2*q.PI*r.x/e.clientHeight),T(2*q.PI*r.y/e.clientHeight),o.copy(a),l.update()}(e);break;case u.DOLLY:if(!1===l.enableZoom)return;!function(e){E.set(e.clientX,e.clientY),y.subVectors(E,v),0<y.y?I(O()):y.y<0&&S(O()),v.copy(E),l.update()}(e);break;case u.PAN:if(!1===l.enablePan)return;!function(e){c.set(e.clientX,e.clientY),s.subVectors(c,i).multiplyScalar(l.panSpeed),L(s.x,s.y),i.copy(c),l.update()}(e)}})(e)}function H(e){!1!==l.enabled&&(p=(e.pointerType,l.dispatchEvent(J),u.NONE),X(e),0===w.length&&(l.domElement.ownerDocument.removeEventListener("pointermove",Y),l.domElement.ownerDocument.removeEventListener("pointerup",H)))}function V(e){X(e)}function z(e){!1===l.enabled||!1===l.enableZoom||p!==u.NONE&&p!==u.ROTATE||(e.preventDefault(),l.dispatchEvent(Q),(e=e).deltaY<0?S(O()):0<e.deltaY&&I(O()),l.update(),l.dispatchEvent(J))}function _(e){!1!==l.enabled&&!1!==l.enablePan&&function(e){let t=!1;switch(e.code){case l.keys.UP:L(0,l.keyPanSpeed),t=!0;break;case l.keys.BOTTOM:L(0,-l.keyPanSpeed),t=!0;break;case l.keys.LEFT:L(l.keyPanSpeed,0),t=!0;break;case l.keys.RIGHT:L(-l.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),l.update())}(e)}function F(e){!1!==l.enabled&&e.preventDefault()}function X(t){delete n[t.pointerId];for(let e=0;e<w.length;e++)if(w[e].pointerId==t.pointerId)return void w.splice(e,1)}function B(e){let t=n[e.pointerId];void 0===t&&(t=new G.Vector2,n[e.pointerId]=t),t.set(e.pageX,e.pageY)}function K(e){e=e.pointerId===w[0].pointerId?w[1]:w[0];return n[e.pointerId]}l.domElement.addEventListener("contextmenu",F),l.domElement.addEventListener("pointerdown",U),l.domElement.addEventListener("pointercancel",V),l.domElement.addEventListener("wheel",z,{passive:!1}),this.update()}}let y,w,n,c,o,s,O,l,u,p,a,r,d,m,f,h,b,g,v,E,A,T,P,x,L,I,S,C,j;I=Uint32Array.from([0,1,S=C=2,3].map(e=>parseInt(tokenData.hash.substr(8*e+2,8),16))),j=e=>(C=I[3],I[3]=I[2],I[2]=I[1],I[1]=S=I[0],C^=C<<11,I[0]^=C^C>>>8^S>>>19,I[0]/2**32);let D=j()<.6,N=!1,R=!1,Z=!1;var k=j();k<.5||(k<.7?N=!0:k<.9?D&&(Z=!0):D&&(R=!0));let M=j()<.65,U=j()<.05,Y;k=j();Y=k<.25?.75:k<.55?1.25:k<.85?1.75:3;let H;k=j();H=k<.2?0:k<.55?1:k<.85||Z?2:3;let V;k=j();V=k<.42?10:k<.84?15:20;let z=j()<.7?4:5,_=!0,F=!1;const X=q.PI/180,B=q.PI/2,K=new G.Object3D,$=70*X,ee=75e-5,te=[16,32,64,128],ne=16,oe=.25,ae=[10,19,38,75],re=6,ie=2.75;const ce=10,se=1e-4,le=0,ue=16777215,pe=255;let de=!0;const me="e57373f44336d32f2fZf06292e91e63c2185bZba68c89c27b07b1fa2Z9575cd673ab7512da8Z7986cb3f51b5303f9fZ64b5f62196f31976d2Z4fc3f703a9f40288d1Z4dd0e100bcd40097a7Z4db6ac00968800796bZ81c7844caf50388e3cZaed5818bc34a689f38Zfff176ffeb3bfbc02dZffd54fffc107ffa000Zffb74dff9800f57c00Zff8a65ff5722e64a19".split`Z`.map(e=>e.match(/.{6}/g)),fe="f5f5f5ffffffe0e0e0Zbdbdbd9e9e9e757575Z424242000000616161".split`Z`.map(e=>e.match(/.{6}/g)),he="f48fb1Zce93d8Zb39ddbZ90caf9Z81d4faZ80deea".split`Z`.map(e=>e.match(/.{6}/g)[0]);let be,ge=[],ve=[],Ee=[],ye,we=[],Oe=[],Ae,Te=[],Pe=[],xe,Le;const Ie=[.05,.05,.075,.1],Se=[.075,.05,.025,.025],Ce={pLS:Y,dI:H,cCC:V,lBI:1},je=.95047,De=1,Ne=1.08883,Re=[0,-100,-100],Ze=[100,100,100];function ke(e){var t,n;return e=e.map(e=>ze(e)),function([e,t,n]){e=Ue(e/je),t=Ue(t/De),n=Ue(n/Ne);return[q.max(0,116*t-16),500*(e-t),200*(t-n)]}(([[t,n,e]]=[e],t=He(t/pe),n=He(n/pe),e=He(e/pe),[.4124*t+.3576*n+.1805*e,.2126*t+.7152*n+.0722*e,.0193*t+.1192*n+.9505*e]))}function Me(e,t=!0){var n,o,a,r=function([e,t,n]){e=(e+16)/116,t=t/500+e,n=e-n/200;return[je*Ye(t),De*Ye(e),Ne*Ye(n)]}(e=e.map((e,t)=>q.max(Re[t],q.min(Ze[t],e))));return[[n,o,a],e=!0]=[r,t],r=Ve(3.2406*n+-1.5372*o+-.4986*a),t=Ve(-.9689*n+1.8758*o+.0415*a),a=Ve(.0557*n+-.204*o+1.057*a),e?[ze(r*pe),ze(t*pe),ze(a*pe)]:[r,t,a]}function Ue(e){return.008856<e?q.pow(e,1/3):7.787*e+16/116}function Ye(e){return.206893034<e?q.pow(e,3):(e-16/116)/7.787}function He(e){return.04045<e?q.pow((e+.055)/1.055,2.4):e/12.92}function Ve(e){return.0031308<e?1.055*q.pow(e,1/2.4)-.055:12.92*e}function ze(e){return(e=q.round(e))>pe?e=pe:e<0&&(e=0),e}var _e=.5*(q.sqrt(3)-1),Fe=(3-q.sqrt(3))/6,Xe=1/6,Be=(q.sqrt(5)-1)/4,Ke=(5-q.sqrt(5))/20;function qe(e){this.p=Ge(e),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var t=0;t<512;t++)this.perm[t]=this.p[255&t],this.permMod12[t]=this.perm[t]%12}function Ge(e){for(var t=new Uint8Array(256),n=0;n<256;n++)t[n]=n;for(n=0;n<255;n++){var o=n+~~(e()*(256-n)),a=t[n];t[n]=t[o],t[o]=a}return t}qe.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),n2D:function(e,t){var n,o=this.permMod12,a=this.perm,r=this.grad3,i=0,c=0,s=0,l=(e+t)*_e,u=q.floor(e+l),p=q.floor(t+l),d=(u+p)*Fe,m=e-(u-d),f=t-(p-d),h=f<m?(n=1,0):(n=0,1),b=m-n+Fe,g=f-h+Fe,v=m-1+2*Fe,l=f-1+2*Fe,e=255&u,t=255&p,d=.5-m*m-f*f,u=.5-b*b-g*g,p=.5-v*v-l*l;return 70*((i=0<=d?(d*=d)*d*(r[d=3*o[e+a[t]]]*m+r[1+d]*f):i)+(c=0<=u?(u*=u)*u*(r[h=3*o[e+n+a[t+h]]]*b+r[1+h]*g):c)+(s=0<=p?(p*=p)*p*(r[t=3*o[1+e+a[1+t]]]*v+r[1+t]*l):s))},n3D:function(e,t,n){var o,a,r,i,c,s=this.permMod12,l=this.perm,u=this.grad3,p=(e+t+n)*(1/3),d=q.floor(e+p),m=q.floor(t+p),f=q.floor(n+p),h=(d+m+f)*Xe,b=e-(d-h),g=t-(m-h),v=n-(f-h),E=g<=b?v<=g?(i=r=o=1,c=a=0):r=v<=b?(i=c=a=0,o=1):(i=a=o=0,c=1):g<v?(r=a=o=0,i=c=1):b<v?(r=c=o=0,i=a=1):(i=r=a=1,c=o=0),y=b-o+Xe,w=g-a+Xe,O=v-c+Xe,A=b-r+2*Xe,T=g-i+2*Xe,P=v-E+2*Xe,x=b-1+.5,L=g-1+.5,p=v-1+.5,e=255&d,t=255&m,n=255&f,h=.6-b*b-g*g-v*v,d=.6-y*y-w*w-O*O,m=.6-A*A-T*T-P*P,f=.6-x*x-L*L-p*p;return 32*((h<0?0:(h*=h)*h*(u[h=3*s[e+l[t+l[n]]]]*b+u[1+h]*g+u[2+h]*v))+(d<0?0:(d*=d)*d*(u[c=3*s[e+o+l[t+a+l[n+c]]]]*y+u[1+c]*w+u[2+c]*O))+(m<0?0:(m*=m)*m*(u[E=3*s[e+r+l[t+i+l[n+E]]]]*A+u[1+E]*T+u[2+E]*P))+(f<0?0:(f*=f)*f*(u[n=3*s[1+e+l[1+t+l[1+n]]]]*x+u[1+n]*L+u[2+n]*p)))},n4D:function(e,t,n,o){var a=this.perm,r=this.grad4,i=(e+t+n+o)*Be,c=q.floor(e+i),s=q.floor(t+i),l=q.floor(n+i),u=q.floor(o+i),p=(c+s+l+u)*Ke,d=e-(c-p),m=t-(s-p),f=n-(l-p),h=o-(u-p),b=0,g=0,v=0,E=0;m<d?b++:g++,f<d?b++:v++,h<d?b++:E++,f<m?g++:v++,h<m?g++:E++,h<f?v++:E++;var y,w,O,A,T,P,x,L,I,S,C,j,D=d-(y=3<=b?1:0)+Ke,N=m-(w=3<=g?1:0)+Ke,R=f-(O=3<=v?1:0)+Ke,Z=h-(S=3<=E?1:0)+Ke,k=d-(A=2<=b?1:0)+2*Ke,M=m-(T=2<=g?1:0)+2*Ke,U=f-(P=2<=v?1:0)+2*Ke,Y=h-(C=2<=E?1:0)+2*Ke,H=d-(x=1<=b?1:0)+3*Ke,V=m-(L=1<=g?1:0)+3*Ke,z=f-(I=1<=v?1:0)+3*Ke,i=h-(j=1<=E?1:0)+3*Ke,e=d-1+4*Ke,t=m-1+4*Ke,n=f-1+4*Ke,o=h-1+4*Ke,p=255&c,b=255&s,g=255&l,v=255&u,E=.6-d*d-m*m-f*f-h*h,c=.6-D*D-N*N-R*R-Z*Z,s=.6-k*k-M*M-U*U-Y*Y,l=.6-H*H-V*V-z*z-i*i,u=.6-e*e-t*t-n*n-o*o;return 27*((E<0?0:(E*=E)*E*(r[E=a[p+a[b+a[g+a[v]]]]%32*4]*d+r[1+E]*m+r[2+E]*f+r[3+E]*h))+(c<0?0:(c*=c)*c*(r[S=a[p+y+a[b+w+a[g+O+a[v+S]]]]%32*4]*D+r[1+S]*N+r[2+S]*R+r[3+S]*Z))+(s<0?0:(s*=s)*s*(r[C=a[p+A+a[b+T+a[g+P+a[v+C]]]]%32*4]*k+r[1+C]*M+r[2+C]*U+r[3+C]*Y))+(l<0?0:(l*=l)*l*(r[j=a[p+x+a[b+L+a[g+I+a[v+j]]]]%32*4]*H+r[1+j]*V+r[2+j]*z+r[3+j]*i))+(u<0?0:(u*=u)*u*(r[v=a[1+p+a[1+b+a[1+g+a[1+v]]]]%32*4]*e+r[1+v]*t+r[2+v]*n+r[3+v]*o)))}},qe._buildPermutationTable=Ge;let We=new qe(j);function Qe(e){e=new G.PointLight(ue,e,0);return w.add(e),e}function Je(e,t,n,o,a,r){if(q.abs(t-n)<Number.EPSILON)return o;t=(e-t)/(n-t)*(a-o)+o;return r&&(a<o?t<a?t=a:o<t&&(t=o):a<t?t=a:t<o&&(t=o)),t}function $e(e){for(var t,n,o=e.length,a=e.slice();o;)t=q.floor(j()*o--),n=a[o],a[o]=a[t],a[t]=n;return a}function et(e){return e.match(/.{2}/g).map(e=>parseInt(e,16))}function tt(){return te[Ce.dI]}function nt(){if(D){var e=ae[Ce.dI],t=e<=2?1:0;return re/2*(q.pow(e-1,2)+e-1)+1+t}return q.pow(tt(),2)}function ot(n){let o=0,e=0;var a=ae[Ce.dI];for(let t=0;t<a;t++){var r=360/(0==t?1:e);for(let e=0;360-e>se;e+=r){if(o==n)return t;o+=1}e+=re}}function at(){Te=[],Pe=[];let a=ae[Ce.dI],r=nt();if(de){xe=q.ceil(a/z),Le=a-xe*z,Ae=[];var n=it().length;let t=q.min(n-1,q.floor(j()*n));for(let e=0;e<z;e++){Ae.push(it()[t]);var o=q.floor(3*j())+3;t=(t+o)%n}ct(Ae.flat())}for(let e=0;e<a;e++)!function(n){for(let t=0;t<r;t++){var o=((o=ot(t))+n+1)%a;let e;e=o<xe+Le?0:q.floor((o-(xe+Le))/xe)+1;o=Ae[e],o=o[q.min(o.length-1,q.floor(j()*o.length))];Te[t]||(Te[t]=[]),Te[t].push(o)}}(e);for(let t=0;t<Te.length;t++){let e=Te[t];Ce.dI<2?Pe.push(ut(e.reverse(),!0,50)):lt(e.reverse(),0,50,Pe,t)}st()}function rt(){if(de){we=[],Oe=[],ye=$e(it()).slice(0,3),ct(ye.flat());let l=$e(he),u=[0,1,3,6][q.min(q.floor(4*j()),3)];l=l.slice(0,u);for(let e=0;e<4;e++)!function(){function n(){if(R){let e="cfd8dc";var t;return j()<.5&&0<u&&(t=q.min(u-1,q.floor(j()*u)),e=l[t]),e}return ye[0][2]}function o(){return R?j()<.5?"795548":"000000":ye[1][1]}L=R?(b="ffffff",g="e0e0e0",A="ffcc80",T="000000",P="000000",x="424242","757575"):(b=ye[0][1],g=ye[0][0],A=ye[1][0],T=ye[1][2],P=ye[2][1],x=ye[2][0],ye[2][2]);var a=4/53,r=3/53,e=nt(),i=ae[Ce.dI];for(let t=0;t<e;t++){var c=ot(t)/i,s=j();let e;e=c<r?s<.27?n():s<.57?g:b:c<r+a?s<.06?A:s<.32?n():s<.6?g:b:c<r+2*a?s<.04?L:s<.13?A:s<.16?o():s<.39?n():s<.62?g:b:c<r+3*a?s<.06?L:s<.1?x:s<.23?A:s<.31?o():s<.52?n():s<.72?g:b:c<r+4*a?s<.07?L:s<.14?x:s<.18?P:s<.37?A:s<.47?o():s<.63?n():s<.8?g:b:c<r+5*a?s<.08?L:s<.16?x:s<.24?P:s<.47?A:s<.6?o():s<.71?n():s<.82?g:b:c<r+6*a?s<.09?L:s<.18?x:s<.27?P:s<.31?T:s<.49?A:s<.64?o():s<.74?n():s<.85?g:b:c<r+7*a?s<.1?L:s<.2?x:s<.3?P:s<.37?T:s<.51?A:s<.69?o():s<.78?n():s<.88?g:b:c<r+8*a?s<.11?L:s<.22?x:s<.35?P:s<.44?T:s<.55?A:s<.75?o():s<.83?n():s<.92?g:b:c<r+9*a?s<.12?L:s<.24?x:s<.39?P:s<.52?T:s<.6?A:s<.76?o():s<.83?n():s<.91?g:b:c<r+10*a?s<.13?L:s<.26?x:s<.42?P:s<.62?T:s<.65?A:s<.79?o():s<.85?n():s<.92?g:b:c<r+11*a?s<.14?L:s<.28?x:s<.46?P:s<.69?T:s<.82?o():s<.87?n():s<.93?g:b:c<r+12*a?s<.15?L:s<.3?x:s<.55?P:s<.77?T:s<.87?o():s<.91?n():s<.96?g:b:c<r+13*a?s<.18?L:s<.36?x:s<.7?P:s<.86?T:s<.93?o():s<.96?n():g:c<r+14*a?s<.22?L:s<.46?x:s<.85?P:s<.96?T:(s<.98?o:n)():c<r+15*a?s<.26?L:s<.53?x:s<.94?P:T:s<.29?L:s<.58?x:P,we[t]||(we[t]=[]),we[t].push(e)}}();for(let e=0;e<we.length;e++){var t=we[e];Ce.dI<3?Oe.push(ut(t,!0)):lt(t,0,100,Oe,e)}st()}}function it(){return U?fe:me}function ct(e){o=R||j()<.2?new G.Color(.95,.95,.95):(e=et($e(e)[0]),new G.Color(e[0]/pe,e[1]/pe,e[2]/pe))}function st(){const t=[];var n=nt();for(let e=0;e<3*n;e++)t.push(0);s.setAttribute("instanceColor",new G.InstancedBufferAttribute(new Float32Array(t),3))}function lt(e,t,n,o,a){setTimeout(function(){o[a]=ut(e,!0,n)},0)}function ut(e,t,n=100){let o=e.map(e=>{e=et(e),e=new G.Color(e[0]/pe,e[1]/pe,e[2]/pe).convertSRGBToLinear();return ke([e.r*pe,e.g*pe,e.b*pe])});var a=o.map(e=>(new G.Vector3).fromArray(e));const r=new G.CatmullRomCurve3(a);return r.curveType="catmullrom",r.closed=t,function(t,n,o){const a=[];for(let e=0;e<n;e++){var r=t.closed?e/n:e/(n-1),r=o?t.getPointAt(r):t.getPoint(r);a.push(r)}return a}(r,e.length*n,!1).map(e=>e.toArray())}function pt(){(N?function(){var e;de&&(e=$e(it().flat()).slice(0,Ce.cCC),be=ut(e,!0),ct(e));var t=nt();for(let e=0;e<t;e++)ge.push(j());st()}:D?Z?at:rt:function(){var e;ve=[],Ee=[],de&&(e=$e(it()).slice(0,3),b=e[0][1],g=e[0][0],v=e[0][2],E=e[1][1],A=e[1][0],T=e[1][2],P=e[2][1],x=e[2][0],L=e[2][2],ct([b,g,v,E,A,T,P,x,L]));var n,o=tt();for(let n=0;n<o;n++)for(let t=0;t<o;t++){var a=j();let e;e=t/o<=1/ne?a<.02?L:a<.11?A:a<.16?E:a<.37?v:a<.6?g:b:t/o<=2/ne?a<.05?L:a<.08?x:a<.19?A:a<.25?E:a<.45?v:a<.66?g:b:t/o<=3/ne?a<.06?L:a<.1?x:a<.12?P:a<.24?A:a<.32?E:a<.51?v:a<.7?g:b:t/o<=4/ne?a<.07?L:a<.12?x:a<.15?P:a<.18?T:a<.31?A:a<.4?E:a<.58?v:a<.75?g:b:t/o<=5/ne?a<.08?L:a<.14?x:a<.18?P:a<.22?T:a<.36?A:a<.48?E:a<.66?v:a<.82?g:b:t/o<=6/ne?a<.09?L:a<.16?x:a<.21?P:a<.27?T:a<.4?A:a<.55?E:a<.71?v:a<.86?g:b:t/o<=7/ne?a<.1?L:a<.18?x:a<.24?P:a<.31?T:a<.43?A:a<.61?E:a<.76?v:a<.88?g:b:t/o<=8/ne?a<.12?L:a<.21?x:a<.28?P:a<.38?T:a<.49?A:a<.68?E:a<.81?v:a<.91?g:b:t/o<=9/ne?a<.13?L:a<.23?x:a<.32?P:a<.43?T:a<.53?A:a<.72?E:a<.84?v:a<.93?g:b:t/o<=10/ne?a<.15?L:a<.27?x:a<.39?P:a<.51?T:a<.58?A:a<.76?E:a<.86?v:a<.94?g:b:t/o<=11/ne?a<.16?L:a<.31?x:a<.46?P:a<.59?T:a<.65?A:a<.8?E:a<.89?v:a<.96?g:b:t/o<=12/ne?a<.17?L:a<.33?x:a<.53?P:a<.67?T:a<.71?A:a<.84?E:a<.92?v:a<.98?g:b:t/o<=13/ne?a<.18?L:a<.35?x:a<.6?P:a<.73?T:a<.76?A:a<.85?E:a<.92?v:a<.97?g:b:t/o<=14/ne?a<.19?L:a<.38?x:a<.68?P:a<.8?T:a<.88?E:a<.94?v:a<.98?g:b:t/o<=15/ne?a<.2?L:a<.41?x:a<.76?P:a<.87?T:a<.93?E:a<.98?v:g:a<.21?L:a<.44?x:a<.84?P:a<.93?T:a<.98?E:v,ve[n]||(ve[n]=[]),ve[n].push(e)}for(let t=ve.length-1;0<=t;t--){let e=ve[t];_&&(n=ve[t].slice().reverse(),e=e.concat(n)),Ce.dI<3?Ee.push(ut(e,!0)):lt(e,0,100,Ee,t)}st()})()}function dt(e){w.remove(O),O=new G.InstancedMesh(s,l,nt()),w.add(O),w.remove(u),w.remove(p);let t;t=M?new G.MeshToonMaterial({color:ue,opacity:.7,transparent:!0}):new G.MeshStandardMaterial({color:263172,opacity:.7,transparent:!0,roughness:1,metalness:0,flatShading:!0});let n;var o;D?(o=ae[Ce.dI]*ce+15,n=new G.CylinderGeometry(o,o,7.5,1e3,1,!1),u=new G.Mesh(n,t),u.rotation.x=B,w.add(u)):(a=tt()+3,n=new G.BoxGeometry(a,a,.75),p=new G.Mesh(n,t),w.add(p)),e&&pt(),n.computeBoundingBox();var a=new G.Vector3(0,0,0);n.boundingBox.getSize(a);e=q.max(a.x,a.y,a.z),a=y.fov*X;let r=q.abs(e/4*q.tan(2*a));r*=.95,i.innerHeight>i.innerWidth&&(r*=i.innerHeight/i.innerWidth),y.position.x=0,y.position.y=0,y.position.z=r,y.updateProjectionMatrix(),c.saveState()}function mt(e,t){var[n,o,t]=Me(t);const a=s.attributes.instanceColor.array;a[3*e+0]=n/pe,a[3*e+1]=o/pe,a[3*e+2]=t/pe,s.attributes.instanceColor.needsUpdate=!0}function ft(){var e=i.innerWidth,t=i.innerHeight;y.aspect=e/t,y.updateProjectionMatrix(),n.setSize(e,t),dt(!1)}function ht(){if(O){var i=_?Date.now()*ee:0;if(D){let e=0,a=0,r=0;var t=ae[Ce.dI];for(let o=0;o<t;o++){var c=360/(0==o?1:e);for(let n=0;360-n>se;n+=c){let e=!1;var s,l,u=n*X,p=a*q.cos(u),d=a*q.sin(u),m=.25*(Ce.dI+1),f=.25*(4-Ce.dI);let t=0;N?(u=We.n2D(r,i*Ie[Ce.dI]),u=q.round(Je(u,-1,1,0,be.length-1)),u+=q.floor(ge[r]*be.length),u%=be.length,mt(r,be[u]),t=_?m*We.n2D(r,i):0,e=!0):Z?(s=Pe[r])&&(l=q.round(Je(i*Se[Ce.dI]%1,0,1,0,s.length-1)),mt(r,s[l]),t=_?m*q.sin(f*o+i):0,e=!0):(s=Oe[r])&&(l=R?1:2,l=We.n2D(r,i*l*Ie[Ce.dI]),l=q.round(Je(l,-1,1,0,s.length-1)),l%=s.length,mt(r,s[l]),t=_?m*q.sin(f*o+i):0,e=!0),K.position.set(p,d,0),K.rotation.x=B;d=e?ie:0;K.scale.x=d,K.scale.y=e?ie*Ce.pLS+t:0,K.scale.z=d,K.updateMatrix(),O.setMatrixAt(r,K.matrix),r++}e+=re,a+=ce}}else{let a=0;var r=tt(),h=(r-1)/2;for(let o=0;o<r;o++)for(let n=0;n<r;n++){let e=!1;var b,g,v=.025*(Ce.dI+1),E=.15*(4-Ce.dI);let t;N?(b=We.n3D(o,n,i*Ie[Ce.dI]),g=We.n3D(o,n,i),b=q.round(Je(b,-1,1,0,be.length-1)),b+=q.floor(ge[a]*be.length),b%=be.length,mt(a,be[b]),t=_?v*g:0,e=!0):(b=Ee[o])&&(g=_?2*r:r,g=q.round(Je((n+i*E)%g,0,g,0,b.length-1)),mt(a,b[g]),t=_?v*q.sin(E*n-i):0,e=!0),K.position.set(h-o,h-n,0),K.rotation.x=B;E=e?oe:0;K.scale.x=E,K.scale.y=e?oe*Ce.pLS+t:0,K.scale.z=E,K.updateMatrix(),O.setMatrixAt(a,K.matrix),a++}}O.instanceMatrix.needsUpdate=!0}if(n.render(w,y),F){let t=e.createElement("a");t.setAttribute("download",tokenData.hash+".png"),n.domElement.toBlob(function(e){e=URL.createObjectURL(e);t.setAttribute("href",e),t.click()}),F=!1}}n=new G.WebGLRenderer({antialias:!0}),n.setPixelRatio(i.devicePixelRatio),n.setSize(i.innerWidth,i.innerHeight),n.outputEncoding=G.sRGBEncoding,n.toneMapping=G.LinearToneMapping,e.body.appendChild(n.domElement),w=new G.Scene,a=new G.AmbientLight(le),w.add(a),r=Qe(1),d=Qe(.5),m=Qe(.5),f=Qe(.5),h=Qe(.5),d.position.set(0,1e4,0),m.position.set(0,-1e4,0),f.position.set(-1e4,0,0),h.position.set(1e4,0,0),y=new G.PerspectiveCamera(50,1,1,1e4),y.lookAt(new G.Vector3(0,0,0)),c=new t(y,n.domElement),c.enableDamping=!0,c.dampingFactor=.2,c.minPolarAngle=B-$,c.maxPolarAngle=B+$,c.minAzimuthAngle=-$,c.maxAzimuthAngle=$,s=new G.CylinderBufferGeometry(1.5,1.5,20,64,1,!1),s.computeVertexNormals(),i.addEventListener("resize",ft,!1),e.addEventListener("keyup",e=>{"KeyR"===e.code?c.reset():"KeyA"===e.code?(_=!_,de=!1,pt(),de=!0):"KeyS"===e.code&&(F=!0)}),pt(),function(){d.visible=!M,m.visible=!M,f.visible=!M,h.visible=!M,l=M?new G.MeshToonMaterial:new G.MeshStandardMaterial({roughness:1,metalness:0,flatShading:!0});r.position.set(0,0,M?1e3:10);const t=["attribute vec3 instanceColor;","varying vec3 vInstanceColor;","#include <common>"].join("\n"),n=["#include <begin_vertex>","\tvInstanceColor = instanceColor;"].join("\n"),o=["varying vec3 vInstanceColor;","#include <common>"].join("\n"),a=["vec4 diffuseColor = vec4( diffuse * vInstanceColor, opacity );"].join("\n");l.onBeforeCompile=function(e){e.vertexShader=e.vertexShader.replace("#include <common>",t).replace("#include <begin_vertex>",n),e.fragmentShader=e.fragmentShader.replace("#include <common>",o).replace("vec4 diffuseColor = vec4( diffuse, opacity );",a)}}(),dt(!1),ft(),function e(){w.background=M?o:new G.Color(le);a.intensity=M?1:Ce.lBI;a.color=M?new G.Color(le):new G.Color;ht();c.update();requestAnimationFrame(e)}();