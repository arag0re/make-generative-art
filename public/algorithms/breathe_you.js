document.body.onload=generateCircles;const isSpinning=["rotatingAnim","none"];async function generateCircles(){const e=window.innerWidth,a=window.innerHeight,g=Math.min(e,a);await addCss1(),await addCss2(),await addCss3(),document.body.classList.add("center-flex"),document.body.style.fontSize="16px";const r=document.createElement("div");r.id="sktch",r.style.width=g+"px",r.style.height=g+"px",document.body.appendChild(r);const d=tokenData.hash,n=parseInt(d.slice(0,16),16);let i=new Random(n),t=[];for(let e=0;e<32;e++)t.push(tokenData.hash.slice(2+2*e,4+2*e));const o=Math.floor(parseInt(t[15],16)/2),c=parseInt(t[16],16)+256;for(let e=0;e<c;e++){const a=e+1,r=i.random_int(-89,g).toString()+"px",d=i.random_int(-89,g).toString()+"px",n=(g/100*i.random_int(2,16)).toString()/16+"em";await generateCircleBlock(e,r,d,n,a),await generateOuterBlankCircle(e,n),await generateOuterColorCircle(e,i,n,o),await generateInnerBlankCircle(e,n),await generateInnerColorCircle(e,i,n,o),await generatePupil(e,i,a)}}function addCss1(){return new Promise(e=>{const a=document.createElement("style");a.type="text/css",a.rel="stylesheet",a.textContent="#sktch{position:relative;padding:0;margin:0;background-color:#f1f1f1;overflow:hidden}.center-flex{display:flex;align-items:center;justify-content:center;}.rotatingAnim{animation:rotating 3s linear;animation-iteration-count:infinite}.simplePulseAnim{animation:simplePulse 3s ease-out;animation-iteration-count:infinite;opacity:1}@keyframes simplePulse{0%{transform:scale(.85)}50%{transform:scale(1)}100%{transform:scale(.85)}}@keyframes rotating{from{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}to{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.blankColor{background-color:#f1f1f1}.golden{background:linear-gradient(to bottom,#fcc201 0,#d4af37 25%,#dba514 50%,#c5a028 100%)}.grim{background-color:#000}.rainbow{background-image:linear-gradient(to bottom,#f8a3a8 0,#f3c6a5 20%,#e5e1ab 40%,#9cdcaa 60%,#96caf7 80%,#bfb2f3 100%)}.g1{background-image:linear-gradient(45deg,#ff9a9e 0,#fad0c4 99%,#fad0c4 100%)}.g2{background-image:linear-gradient(to top,#a18cd1 0,#fbc2eb 100%)}.g3{background-image:linear-gradient(to top,#fad0c4 0,#fad0c4 1%,#ffd1ff 100%)}.g4{background-image:linear-gradient(to right,#ffecd2 0,#fcb69f 100%)}.g5{background-image:linear-gradient(to right,#ff8177 0,#ff867a 0,#ff8c7f 21%,#f99185 52%,#cf556c 78%,#b12a5b 100%)}.g6{background-image:linear-gradient(to top,#ff9a9e 0,#fecfef 99%,#fecfef 100%)}.g7{background-image:linear-gradient(120deg,#f6d365 0,#fda085 100%)}.g8{background-image:linear-gradient(to top,#fbc2eb 0,#a6c1ee 100%)}.g9{background-image:linear-gradient(to top,#fdcbf1 0,#fdcbf1 1%,#e6dee9 100%)}.g10{background-image:linear-gradient(120deg,#a1c4fd 0,#c2e9fb 100%)}.g11{background-image:linear-gradient(120deg,#d4fc79 0,#96e6a1 100%)}.g12{background-image:linear-gradient(120deg,#84fab0 0,#8fd3f4 100%)}.g13{background-image:linear-gradient(to top,#cfd9df 0,#e2ebf0 100%)}.g14{background-image:linear-gradient(120deg,#a6c0fe 0,#f68084 100%)}.g15{background-image:linear-gradient(120deg,#fccb90 0,#d57eeb 100%)}.g16{background-image:linear-gradient(120deg,#e0c3fc 0,#8ec5fc 100%)}.g17{background-image:linear-gradient(120deg,#f093fb 0,#f5576c 100%)}.g18{background-image:linear-gradient(120deg,#fdfbfb 0,#ebedee 100%)}.g19{background-image:linear-gradient(to right,#4facfe 0,#00f2fe 100%)}.g20{background-image:linear-gradient(to right,#43e97b 0,#38f9d7 100%)}.g21{background-image:linear-gradient(to right,#fa709a 0,#fee140 100%)}.g22{background-image:linear-gradient(to right,#dd3e54,#6be585)}.g23{background-image:linear-gradient(to top,#a8edea 0,#fed6e3 100%)}.g24{background-image:linear-gradient(to top,#5ee7df 0,#b490ca 100%)}.g25{background-image:linear-gradient(to top,#d299c2 0,#fef9d7 100%)}.g26{background-image:linear-gradient(135deg,#f5f7fa 0,#c3cfe2 100%)}.g27{background-image:radial-gradient(circle 248px at center,#16d9e3 0,#30c7ec 47%,#46aef7 100%)}.g28{background-image:linear-gradient(135deg,#667eea 0,#764ba2 100%)}.g29{background-image:linear-gradient(135deg,#fdfcfb 0,#e2d1c3 100%)}.g30{background-image:linear-gradient(120deg,#89f7fe 0,#66a6ff 100%)}.g31{background-image:linear-gradient(to top,#fddb92 0,#d1fdff 100%)}.g32{background-image:linear-gradient(to top,#9890e3 0,#b1f4cf 100%)}.g33{background-image:linear-gradient(to top,#ebc0fd 0,#d9ded8 100%)}.g34{background-image:linear-gradient(to top,#96fbc4 0,#f9f586 100%)}.g35{background-image:linear-gradient(180deg,#2af598 0,#009efd 100%)}.g36{background-image:linear-gradient(to top,#cd9cf2 0,#f6f3ff 100%)}.g37{background-image:linear-gradient(to right,#e4afcb 0,#b8cbb8 0,#b8cbb8 0,#e2c58b 30%,#c2ce9c 64%,#7edbdc 100%)}.g38{background-image:linear-gradient(to right,#b8cbb8 0,#b8cbb8 0,#b465da 0,#cf6cc9 33%,#ee609c 66%,#ee609c 100%)}.g39{background-image:linear-gradient(to right,#6a11cb 0,#2575fc 100%)}.g40{background:#dcd9d4 linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(0,0,0,.5) 100%),radial-gradient(at 50% 0,rgba(255,255,255,.1) 0,rgba(0,0,0,.5) 50%);background-blend-mode:soft-light,screen}.g41{background-image:linear-gradient(to top,#37ecba 0,#72afd3 100%)}.g42{background-image:linear-gradient(to top,#ebbba7 0,#cfc7f8 100%)}.g43{background-image:linear-gradient(to top,#fff1eb 0,#ace0f9 100%)}.g44{background-image:linear-gradient(to right,#eea2a2 0,#bbc1bf 19%,#57c6e1 42%,#b49fda 79%,#7ac5d8 100%)}.g45{background-image:linear-gradient(to right,#fc5c7d,#6a82fb)}.g46{background-image:linear-gradient(to top,#c471f5 0,#fa71cd 100%)}.g47{background-image:linear-gradient(to top,#48c6ef 0,#6f86d6 100%)}.g48{background-image:linear-gradient(to right,#f78ca0 0,#f9748f 19%,#fd868c 60%,#fe9a8b 100%)}.g49{background-image:linear-gradient(to top,#feada6 0,#f5efef 100%)}.g50{background-image:linear-gradient(to top,#e6e9f0 0,#eef1f5 100%)}.g51{background-image:linear-gradient(to top,#accbee 0,#e7f0fd 100%)}.g52{background-image:linear-gradient(-20deg,#e9defa 0,#fbfcdb 100%)}.g53{background-image:linear-gradient(to top,#c1dfc4 0,#deecdd 100%)}.g54{background-image:linear-gradient(to top,#0ba360 0,#3cba92 100%)}.g55{background-image:linear-gradient(to top,#00c6fb 0,#005bea 100%)}.g56{background-image:linear-gradient(to right,#74ebd5 0,#9face6 100%)}.g57{background-image:linear-gradient(to top,#6a85b6 0,#bac8e0 100%)}.g58{background-image:linear-gradient(to top,#a3bded 0,#6991c7 100%)}.g59{background-image:linear-gradient(to top,#9795f0 0,#fbc8d4 100%)}.g60{background-image:linear-gradient(to top,#a7a6cb 0,#8989ba 52%,#8989ba 100%)}",document.head.appendChild(a),e()})}function addCss2(){return new Promise(e=>{const a=document.createElement("style");a.type="text/css",a.rel="stylesheet",a.textContent=".g61{background-image:linear-gradient(to top,#3f51b1 0,#5a55ae 13%,#7b5fac 25%,#8f6aae 38%,#a86aa4 50%,#cc6b8e 62%,#f18271 75%,#f3a469 87%,#f7c978 100%)}.g62{background-image:linear-gradient(to top,#fcc5e4 0,#fda34b 15%,#ff7882 35%,#c8699e 52%,#7046aa 71%,#0c1db8 87%,#020f75 100%)}.g63{background-image:linear-gradient(to right,#22c1c3,#fdbb2d)}.g64{background-image:linear-gradient(to top,#f43b47 0,#453a94 100%)}.g65{background-image:linear-gradient(to top,#4fb576 0,#44c489 30%,#28a9ae 46%,#28a2b7 59%,#4c7788 71%,#6c4f63 86%,#432c39 100%)}.g66{background-image:linear-gradient(to right,#40e0d0,#ff8c00,#ff0080)}.g67{background-image:linear-gradient(to top,#88d3ce 0,#6e45e2 100%)}.g68{background-image:linear-gradient(to top,#d9afd9 0,#97d9e1 100%)}.g69{background-image:linear-gradient(to top,#7028e4 0,#e5b2ca 100%)}.g70{background-image:linear-gradient(15deg,#13547a 0,#80d0c7 100%)}.g71{background-image:linear-gradient(to left,#bdbbbe 0,#9d9ea3 100%),radial-gradient(88% 271%,rgba(255,255,255,.25) 0,rgba(254,254,254,.25) 1%,rgba(0,0,0,.25) 100%),radial-gradient(50% 100%,rgba(255,255,255,.3) 0,rgba(0,0,0,.3) 100%);background-blend-mode:normal,lighten,soft-light}.g72{background-image:linear-gradient(to top,#505285 0,#585e92 12%,#65689f 25%,#7474b0 37%,#7e7ebb 50%,#8389c7 62%,#9795d4 75%,#a2a1dc 87%,#b5aee4 100%)}.g73{background-image:linear-gradient(to top,#ff0844 0,#ffb199 100%)}.g74{background:#c9ccd3 linear-gradient(-180deg,rgba(255,255,255,.5) 0,rgba(0,0,0,.5) 100%);background-blend-mode:lighten}.g75{background-image:linear-gradient(45deg,#93a5cf 0,#e4efe9 100%)}.g76{background-image:linear-gradient(to right,#00c3ff,#ffff1c)}.g77{background-image:linear-gradient(to top,#0c3483 0,#a2b6df 100%,#6b8cce 100%,#a2b6df 100%)}.g78{background-image:linear-gradient(45deg,#93a5cf 0,#e4efe9 100%)}.g79{background-image:linear-gradient(to right,#92fe9d 0,#00c9ff 100%)}.g80{background-image:linear-gradient(to right,#ff758c 0,#ff7eb3 100%)}.g81{background-image:linear-gradient(to right,#a8ff78,#78ffd6)}.g82{background-image:linear-gradient(to top,#c79081 0,#dfa579 100%)}.g83{background-image:linear-gradient(45deg,#8baaaa 0,#ae8b9c 100%)}.g84{background-image:linear-gradient(to right,#f83600 0,#f9d423 100%)}.g85{background-image:linear-gradient(-20deg,#b721ff 0,#21d4fd 100%)}.g86{background-image:linear-gradient(-20deg,#6e45e2 0,#88d3ce 100%)}.g87{background-image:linear-gradient(-20deg,#d558c8 0,#24d292 100%)}.g88{background-image:linear-gradient(60deg,#abecd6 0,#fbed96 100%)}.g89{background-image:linear-gradient(to top,#d5d4d0 0,#d5d4d0 1%,#eeeeec 31%,#efeeec 75%,#e9e9e7 100%)}.g90{background-image:linear-gradient(to top,#5f72bd 0,#9b23ea 100%)}.g91{background-image:linear-gradient(to right,#c6ffdd,#fbd786,#f7797d)}.g92{background-image:linear-gradient(-20deg,#ddd6f3 0,#faaca8 100%,#faaca8 100%)}.g93{background-image:linear-gradient(-20deg,#dcb0ed 0,#99c99c 100%)}.g94{background-image:linear-gradient(to top,#f3e7e9 0,#e3eeff 99%,#e3eeff 100%)}.g95{background-image:linear-gradient(to top,#c71d6f 0,#d09693 100%)}.g96{background-image:linear-gradient(60deg,#96deda 0,#50c9c3 100%)}.g97{background-image:linear-gradient(to top,#f77062 0,#fe5196 100%)}.g98{background-image:linear-gradient(to top,#c4c5c7 0,#dcdddf 52%,#ebebeb 100%)}.g99{background-image:linear-gradient(to right,#dce35b,#45b649)}.g100{background-image:linear-gradient(to right,#30e8bf,#ff8235)}.g101{background-image:linear-gradient(-60deg,#16a085 0,#f4d03f 100%)}.g102{background-image:linear-gradient(-60deg,#ff5858 0,#f09819 100%)}.g103{background-image:linear-gradient(to right,#eecda3,#ef629f)}.g104{background-image:linear-gradient(-20deg,#00cdac 0,#8ddad5 100%)}.g105{background:linear-gradient(-180deg,#bcc5ce 0,#929ead 98%),radial-gradient(at top left,rgba(255,255,255,.3) 0,rgba(0,0,0,.3) 100%);background-blend-mode:screen}.g106{background-image:linear-gradient(to top,#4481eb 0,#04befe 100%)}.g107{background-image:linear-gradient(to top,#dad4ec 0,#dad4ec 1%,#f3e7e9 100%)}.g108{background-image:linear-gradient(45deg,#874da2 0,#c43a30 100%)}.g109{background-image:linear-gradient(to top,#4481eb 0,#04befe 100%)}.g110{background-image:linear-gradient(to top,#e8198b 0,#c7eafd 100%)}.g111{background-image:radial-gradient(73% 147%,#eadfdf 59%,#ece2df 100%),radial-gradient(91% 146%,rgba(255,255,255,.5) 47%,rgba(0,0,0,.5) 100%);background-blend-mode:screen}.g112{background-image:linear-gradient(-20deg,#f794a4 0,#fdd6bd 100%)}.g113{background-image:linear-gradient(60deg,#64b3f4 0,#c2e59c 100%)}.g114{background-image:linear-gradient(to top,#3b41c5 0,#a981bb 49%,#ffc8a9 100%)}.g115{background-image:linear-gradient(to top,#0fd850 0,#f9f047 100%)}.g116{background-image:linear-gradient(to top,#d3d3d3 0,#d3d3d3 1%,#e0e0e0 26%,#efefef 48%,#d9d9d9 75%,#bcbcbc 100%)}.g117{background-image:linear-gradient(45deg,#ee9ca7 0,#ffdde1 100%)}.g118{background-image:linear-gradient(to right,#3ab5b0 0,#3d99be 31%,#56317a 100%)}.g119{background:#cddcdc radial-gradient(at 50% 100%,rgba(255,255,255,.5) 0,rgba(0,0,0,.5) 100%),linear-gradient(to bottom,rgba(255,255,255,.25) 0,rgba(0,0,0,.25) 100%);background-blend-mode:screen,overlay}.g120{background-image:linear-gradient(to top,#209cff 0,#68e0cf 100%)}",document.head.appendChild(a),e()})}function addCss3(){return new Promise(e=>{const a=document.createElement("style");a.type="text/css",a.rel="stylesheet",a.textContent=".g121{background-image:linear-gradient(to top,#bdc2e8 0,#bdc2e8 1%,#e6dee9 100%)}.g122{background-image:linear-gradient(to top,#e6b980 0,#eacda3 100%)}.g123{background-image:linear-gradient(to right,#ffd89b,#19547b)}.g124{background-image:linear-gradient(to top,#d5dee7 0,#ffafbd 0,#c9ffbf 100%)}.g125{background-image:linear-gradient(to top,#9be15d 0,#00e3ae 100%)}.g126{background-image:linear-gradient(to right,#ed6ea0 0,#ec8c69 100%)}.g127{background-image:linear-gradient(to right,#ffc3a0 0,#ffafbd 100%)}.g128{background-image:linear-gradient(to top,#cc208e 0,#6713d2 100%)}.g129{background-image:linear-gradient(to top,#b3ffab 0,#12fff7 100%)}.g130{background:linear-gradient(to bottom,#d5dee7 0,#e8ebf2 50%,#e2e7ed 100%),linear-gradient(to bottom,rgba(0,0,0,.02) 50%,rgba(255,255,255,.02) 61%,rgba(0,0,0,.02) 73%),linear-gradient(33deg,rgba(255,255,255,.2) 0,rgba(0,0,0,.2) 100%);background-blend-mode:normal,color-burn}.g131{background-image:linear-gradient(to top,#65bd60 0,#5ac1a8 25%,#3ec6ed 50%,#b7ddb7 75%,#fef381 100%)}.g132{background-image:linear-gradient(to right,#12c2e9,#c471ed,#f64f59)}.g133{background-image:linear-gradient(-20deg,#fc6076 0,#ff9a44 100%)}.g134{background-image:linear-gradient(to top,#dfe9f3 0,#fff 100%)}.g135{background-image:linear-gradient(to right,#00c3ff,#ffff1c)}.g136{background-image:linear-gradient(to right,#00dbde 0,#fc00ff 100%)}.g137{background-image:linear-gradient(to right,#f9d423 0,#ff4e50 100%)}.g138{background-image:linear-gradient(to top,#50cc7f 0,#f5d100 100%)}.g139{background-image:linear-gradient(to right,#0acffe 0,#495aff 100%)}.g140{background-image:linear-gradient(to right,#fffc00,#fff)}.g141{background-image:linear-gradient(to right,#00f260,#0575e6)}.g142{background-image:linear-gradient(60deg,#3d3393 0,#2b76b9 37%,#2cacd1 65%,#35eb93 100%)}.g143{background-image:linear-gradient(to top,#df89b5 0,#bfd9fe 100%)}.g144{background-image:linear-gradient(to right,#ed6ea0 0,#ec8c69 100%)}.g145{background-image:linear-gradient(to right,#d7d2cc 0,#304352 100%)}.g146{background-image:linear-gradient(to top,#e14fad 0,#f9d423 100%)}.g147{background-image:linear-gradient(to top,#b224ef 0,#7579ff 100%)}.g148{background-image:linear-gradient(to right,#c1c161 0,#c1c161 0,#d4d4b1 100%)}.g149{background-image:linear-gradient(to right,#ec77ab 0,#7873f5 100%)}.g150{background-image:linear-gradient(to top,#007adf 0,#00ecbc 100%)}.g151{background-image:linear-gradient(-225deg,#20e2d7 0,#f9fea5 100%)}.g152{background-image:linear-gradient(-225deg,#2cd8d5 0,#c5c1ff 56%,#ffbac3 100%)}.g153{background-image:linear-gradient(-225deg,#2cd8d5 0,#6b8dd6 48%,#8e37d7 100%)}.g154{background-image:linear-gradient(-225deg,#dfffcd 0,#90f9c4 48%,#39f3bb 100%)}.g155{background-image:linear-gradient(-225deg,#5d9fff 0,#b8dcff 48%,#6bbbff 100%)}.g156{background-image:linear-gradient(-225deg,#a8bfff 0,#884d80 100%)}.g157{background-image:linear-gradient(-225deg,#5271c4 0,#b19fff 48%,#eca1fe 100%)}.g158{background-image:linear-gradient(-225deg,#ffe29f 0,#ffa99f 48%,#ff719a 100%)}.g159{background-image:linear-gradient(-225deg,#22e1ff 0,#1d8fe1 48%,#625eb1 100%)}.g160{background-image:linear-gradient(-225deg,#b6cee8 0,#f578dc 100%)}.g161{background-image:linear-gradient(-225deg,#fffeff 0,#d7fffe 100%)}.g162{background-image:linear-gradient(-225deg,#e3fdf5 0,#ffe6fa 100%)}.g163{background-image:linear-gradient(-225deg,#7de2fc 0,#b9b6e5 100%)}.g164{background-image:linear-gradient(-225deg,#cbbacc 0,#2580b3 100%)}.g165{background-image:linear-gradient(-225deg,#b7f8db 0,#50a7c2 100%)}.g166{background-image:linear-gradient(-225deg,#7085b6 0,#87a7d9 50%,#def3f8 100%)}.g167{background-image:linear-gradient(-225deg,#77ffd2 0,#6297db 48%,#1eecff 100%)}.g168{background-image:linear-gradient(-225deg,#ac32e4 0,#7918f2 48%,#4801ff 100%)}.g169{background-image:linear-gradient(-225deg,#d4ffec 0,#57f2cc 48%,#4596fb 100%)}.g170{background-image:linear-gradient(-225deg,#9efbd3 0,#57e9f2 48%,#45d4fb 100%)}.g171{background-image:linear-gradient(-225deg,#473b7b 0,#3584a7 51%,#30d2be 100%)}.g172{background-image:linear-gradient(-225deg,#65379b 0,#886aea 53%,#6457c6 100%)}.g173{background-image:linear-gradient(-225deg,#a445b2 0,#d41872 52%,#f06 100%)}.g174{background-image:linear-gradient(-225deg,#7742b2 0,#f180ff 52%,#fd8bd9 100%)}.g175{background-image:linear-gradient(-225deg,#ff3cac 0,#562b7c 52%,#2b86c5 100%)}.g176{background-image:linear-gradient(-225deg,#ff057c 0,#8d0b93 50%,#321575 100%)}.g177{background-image:linear-gradient(-225deg,#ff057c 0,#7c64d5 48%,#4cc3ff 100%)}.g178{background-image:linear-gradient(-225deg,#69eacb 0,#eaccf8 48%,#6654f1 100%)}.g179{background-image:linear-gradient(to right,#ef32d9,#89fffd)}.g180{background-image:linear-gradient(-225deg,#3d4e81 0,#5753c9 48%,#6e7ff3 100%)}",document.head.appendChild(a),e()})}function generateCircleBlock(e,a,g,r,d){return new Promise(d=>{const n=document.createElement("div");n.id="circle-block"+e,n.style.position="absolute",n.style.top=a,n.style.left=g,n.style.width=r,n.style.height=r,document.getElementById("sktch").appendChild(n),d()})}function generateOuterBlankCircle(e,a){return new Promise(g=>{const r=document.createElement("div");r.style.position="absolute",r.style.borderRadius="50%";const d=parseInt(a.slice(0,-2))/32;r.style.boxShadow=d+"em "+d+"em "+4*d+"em #c1c1c1, -"+d+"em -"+d+"em "+4*d+"em #fff",r.style.width="100%",r.style.height="100%",r.style.zIndex=2,r.id="outer-blank"+e,r.classList.add("blankColor"),r.classList.add("simplePulseAnim"),r.classList.add("center-flex"),document.getElementById("circle-block"+e).appendChild(r),g()})}function generateOuterColorCircle(e,a,g,r){return new Promise(d=>{const n=document.createElement("div");n.style.position="relative",n.style.borderRadius="50%";const i=parseInt(g.slice(0,-2))/64;n.style.boxShadow=i+"em "+i+"em "+4*i+"em #c1c1c1, -"+i+"em -"+i+"em "+4*i+"em #fff",n.style.width="75%",n.style.height="75%",n.style.opacity=.85,n.style.zIndex=3,n.id="outer-color"+e,n.classList.add(a.random_choice(isSpinning)),n.classList.add(getColor(a,r)),n.classList.add("center-flex"),document.getElementById("outer-blank"+e).appendChild(n),d()})}function generateInnerBlankCircle(e,a){return new Promise(g=>{const r=document.createElement("div");r.style.position="relative",r.style.borderRadius="50%";const d=parseInt(a.slice(0,-2))/64;r.style.boxShadow=d+"em "+d+"em "+4*d+"em #c1c1c1, -"+d+"em -"+d+"em "+4*d+"em #fff",r.style.width="62%",r.style.height="62%",r.style.zIndex=4,r.id="inner-blank"+e,r.classList.add("blankColor"),r.classList.add("center-flex"),document.getElementById("outer-color"+e).appendChild(r),g()})}function generateInnerColorCircle(e,a,g,r){return new Promise(d=>{const n=document.createElement("div");n.style.position="relative",n.style.borderRadius="50%";const i=parseInt(g.slice(0,-2))/64;n.style.boxShadow=i+"em "+i+"em "+4*i+"em #c1c1c1, -"+i+"em -"+i+"em "+4*i+"em #fff",n.style.width="51%",n.style.height="51%",n.style.zIndex=5,n.id="inner-color"+e,n.classList.add(getColor(a,r)),n.classList.add("center-flex"),document.getElementById("inner-blank"+e).appendChild(n),d()})}function generatePupil(e,a,g){return new Promise(a=>{const g=document.createElement("div");g.style.position="relative",g.style.borderRadius="50%",g.style.width="42%",g.style.height="42%",g.style.backgroundColor="#555",g.style.zIndex=6,g.id="pupil"+e,document.getElementById("inner-color"+e).appendChild(g),a()})}function getSizeRange(e){return e>=42&&e<=178?e:e+42}function getColor(e,a){switch(a){case 78:return"blankColor";case 79:return"golden";case 100:return"grim";case 42:return"rainbow";default:return"g"+e.random_int(1,180)}}class Random{constructor(e){this.seed=e}random_dec(){return this.seed^=this.seed<<13,this.seed^=this.seed>>17,this.seed^=this.seed<<5,(this.seed<0?1+~this.seed:this.seed)%1e3/1e3}random_between(e,a){return e+(a-e)*this.random_dec()}random_int(e,a){return Math.floor(this.random_between(e,a+1))}random_choice(e){return e[Math.floor(this.random_between(0,.99*e.length))]}}