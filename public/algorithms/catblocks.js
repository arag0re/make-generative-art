let hashPairs=new Array(32),rvs=new Array(32);for(let e=0;e<32;e++)hashPairs[e]=tokenData.hash.slice(2+2*e,4+2*e),rvs[e]=parseInt(hashPairs[e],16);
let s={eeo:0,ns:{x:9,y:11},flip:!1,swap:!1,heterochromia:!1,eyeSwap:!1,tng:!1},breed={name:""},palette={},colors={},bps=[],fps=[],b={},fa=[,,,],fc=[,,,,,],fn=[,,,],fm=[,,],ea=[,,,],ec=[,,,,,],ei=[,,,],eic=[,,,,,],en=[,,],em=[,,],eim=[,,],eya=[,,,],eyc=[,,,,,,,],na=[,,],nc=[,,,,,],ni=[,,,],nn=[,,],nm=[,,],m=[,,,],wa=[,],wc=[,],
heads=[{fh:{x:0,y:-55},tpl:{x:73,y:-29},chk:{x:86,y:23},chn:{x:0,y:91},chkc:.01,chko:0,chnc:-1,chno:.44,bw:.55},{fh:{x:0,y:-50},tpl:{x:78,y:-29},chk:{x:80,y:28},chn:{x:0,y:88},chkc:.03,chko:0,chnc:-1,chno:.35,bw:.51},{fh:{x:0,y:-54},tpl:{x:79,y:-24},chk:{x:96,y:25},chn:{x:0,y:86},chkc:.11,chko:.63,chnc:-.74,chno:.06,bw:.47},{fh:{x:0,y:-52},tpl:{x:77,y:-25},chk:{x:95,y:47},chn:{x:0,y:86},chkc:-.01,chko:0,chnc:-1,chno:.32,bw:.52},{fh:{x:0,y:-50},tpl:{x:70,y:-26},chk:{x:100,y:25},chn:{x:0,y:90},chkc:-.6,chko:.95,chnc:-1,chno:.2,bw:.5},{fh:{x:0,y:-50},tpl:{x:77,y:-25},chk:{x:91,y:38},chn:{x:0,y:79},chkc:.39,chko:.89,chnc:.14,chno:.48,bw:.54},{fh:{x:0,y:-55},tpl:{x:79,y:-27},chk:{x:89,y:37},chn:{x:0,y:88},chkc:-.06,chko:0,chnc:-.36,chno:.43,bw:.52},{fh:{x:0,y:-47},tpl:{x:70,y:-24},chk:{x:99,y:21},chn:{x:0,y:92},chkc:-.26,chko:.63,chnc:-1,chno:.49,bw:.56},{fh:{x:0,y:-51},tpl:{x:73,y:-5},chk:{x:102,y:20},chn:{x:0,y:84},chkc:-.6,chko:.26,chnc:-1,chno:.37,bw:.59,eeo:.13},{fh:{x:0,y:-52},tpl:{x:86,y:-13},chk:{x:91,y:55},chn:{x:0,y:80},chkc:.12,chko:.76,chnc:.85,chno:.33,bw:.5},{fh:{x:0,y:-48},tpl:{x:75,y:-30},chk:{x:89,y:33},chn:{x:0,y:79},chkc:.04,chko:0,chnc:-.36,chno:.48,bw:.56},{fh:{x:0,y:-50},tpl:{x:70,y:-28},chk:{x:92,y:41},chn:{x:0,y:84},chkc:-.29,chko:.3,chnc:-.54,chno:.37,bw:.53},{fh:{x:0,y:-49},tpl:{x:80,y:-1},chk:{x:97,y:24},chn:{x:0,y:84},chkc:-.03,chko:0,chnc:-1,chno:.37,bw:.56,eeo:.15},{fh:{x:0,y:-50},tpl:{x:70,y:-10},chk:{x:99,y:41},chn:{x:0,y:85},chkc:-.6,chko:1,chnc:.14,chno:.36,bw:.55,eeo:.13},{fh:{x:0,y:-53},tpl:{x:74,y:-6},chk:{x:88,y:39},chn:{x:0,y:83},chkc:.6,chko:0,chnc:-1,chno:.4,bw:.55,eeo:.15},{fh:{x:0,y:-44},tpl:{x:77,y:-19},chk:{x:68,y:31},chn:{x:0,y:83},chkc:.6,chko:.43,chnc:.76,chno:.5,bw:.5},{fh:{x:0,y:-54},tpl:{x:98,y:-19},chk:{x:87,y:40},chn:{x:0,y:81},chkc:-.01,chko:0,chnc:0,chno:.3,bw:.45},{fh:{x:0,y:-52},tpl:{x:80,y:-26},chk:{x:98,y:53},chn:{x:0,y:87},chkc:.04,chko:0,chnc:-1,chno:.32,bw:.5}],
ears=[{eso:.27,eto:{x:-1,y:52},eb:.07,ebr:0,esc:.19,etc:.49,eec:.13,eitc:.53,esi:.25,eti:.8,eei:.1,eito:0},{eso:.29,eto:{x:-21,y:70},eb:.2,ebr:0,esc:-.04,etc:.16,eec:.22,eitc:.16,esi:.3,eti:.8,eei:.1,eito:0},{eso:.23,eto:{x:-41,y:69},eb:.17,ebr:0,esc:-.03,etc:.17,eec:.2,eitc:.23,esi:.3,eti:.77,eei:.13,eito:0},{eso:.29,eto:{x:-9,y:53},eb:0,ebr:0,esc:.1,etc:.1,eec:.1,eitc:.1,esi:.3,eti:.76,eei:.1,eito:.95},{eso:.3,eto:{x:-19,y:50},eb:.1,ebr:.02,esc:.09,etc:.11,eec:.26,eitc:.21,esi:.3,eti:.73,eei:.1,eito:1.19},{eso:.28,eto:{x:-4,y:50},eb:.17,ebr:0,esc:.25,etc:.29,eec:.04,eitc:.37,esi:.3,eti:.8,eei:.1,eito:0},{eso:.25,eto:{x:10,y:39},eb:0,ebr:0,esc:.1,etc:.1,eec:.1,eitc:.1,esi:.52,eti:.81,eei:.06,eito:0},{eso:.25,eto:{x:10,y:70},eb:.62,ebr:.74,esc:.18,etc:.03,eec:.3,eitc:-.34,esi:.2,eti:.63,eei:.06,eito:-4.05},{eso:.25,eto:{x:16,y:51},eb:.5,ebr:.12,esc:.19,etc:.24,eec:-.24,eitc:.24,esi:.44,eti:.63,eei:.12,eito:-3.57},{eso:.25,eto:{x:-1,y:51},eb:0,ebr:-.5,esc:.09,etc:.1,eec:.1,eitc:.1,esi:.64,eti:.76,eei:.06,eito:-.24},{eso:.27,eto:{x:-1,y:58},eb:.05,ebr:0,esc:.01,etc:.26,eec:.13,eitc:.53,esi:.35,eti:.8,eei:.1,eito:0},{eso:.25,eto:{x:1,y:84},eb:.14,ebr:.95,esc:.14,etc:.36,eec:.3,eitc:.33,esi:.18,eti:.8,eei:.13,eito:-1.19},{eso:.25,eto:{x:-16,y:80},eb:.1,ebr:.02,esc:.04,etc:.47,eec:.08,eitc:.49,esi:.3,eti:.8,eei:.1,eito:0},{eso:.25,eto:{x:-4,y:55},eb:.37,ebr:-.05,esc:.1,etc:.46,eec:.3,eitc:.43,esi:.26,eti:.84,eei:.06,eito:1.43}],
eyes=[{eyo:{x:40,y:4},eyw:20,eyt:18,eyb:18,eyr:-.04,eypo:{x:-4,y:0},no:-3},{eyo:{x:40,y:5},eyw:21,eyt:12,eyb:18,eyr:-.44,eypo:{x:-4,y:0},no:-1},{eyo:{x:40,y:5},eyw:20,eyt:15,eyb:7,eyr:-.24,eypo:{x:-3,y:0},no:-7},{eyo:{x:38,y:1},eyw:21,eyt:2,eyb:17,eyr:.36,eypo:{x:-3,y:5},no:-5},{eyo:{x:40,y:5},eyw:21,eyt:13,eyb:18,eyr:.26,eypo:{x:-4,y:0},no:-4},{eyo:{x:37,y:8},eyw:20,eyt:7,eyb:18,eyr:-.64,eypo:{x:-2,y:0},no:4},{eyo:{x:37,y:4},eyw:20,eyt:-1,eyb:17,eyr:-.14,eypo:{x:-2,y:2},no:-2},{eyo:{x:40,y:2},eyw:20,eyt:-3,eyb:22,eyr:.26,eypo:{x:-4,y:5},no:-1},{eyo:{x:40,y:3},eyw:19,eyt:14,eyb:16,eyr:-.24,eypo:{x:-8,y:0},no:-4},{eyo:{x:40,y:5},eyw:19,eyt:13,eyb:14,eyr:-.04,eypo:{x:-4,y:0},no:-4},{eyo:{x:40,y:4},eyw:21,eyt:12,eyb:18,eyr:-.14,eypo:{x:-4,y:0},no:-1},{eyo:{x:40,y:2},eyw:21,eyt:19,eyb:2,eyr:-.14,eypo:{x:-4,y:1},no:-13},{eyo:{x:40,y:8},eyw:20,eyt:12,eyb:3,eyr:.06,eypo:{x:-4,y:-3},no:-7},{eyo:{x:40,y:11},eyw:22,eyt:14,eyb:15,eyr:.36,eypo:{x:-7,y:-8},no:-1}],
pupils=[{eypw:12,eyph:30},{eypw:21,eyph:28},{eypw:29,eyph:30},{eypw:15,eyph:22},{eypw:13,eyph:13},{eypw:7,eyph:30}],
mouths=[{mh:11,mo:{x:10,y:6},mc:.5,tngo:5,tng:!0},{mh:8,mo:{x:5,y:8},mc:.5,tngo:8,tng:!1},{mh:12,mo:{x:15,y:4},mc:.5,tngo:3.4,tng:!0},{mh:11,mo:{x:5,y:12},mc:.05,tngo:8,tng:!1},{mh:12,mo:{x:10,y:12},mc:-.17,tngo:4.3,tng:!1},{mh:13,mo:{x:11,y:6},mc:-.14,tngo:1.2,tng:!0},{mh:10,mo:{x:10,y:13},mc:.21,tngo:8,tng:!1},{mh:13,mo:{x:8,y:1},mc:.02,tngo:-.5,tng:!0},{mh:13,mo:{x:14,y:-2},mc:.71,tngo:1.5,tng:!0}],
whiskers=[{whl:4,wha:.18,who:{x:7,y:4},wheo:{x:100,y:30},whc:.15},{whl:3,wha:.18,who:{x:7,y:4},wheo:{x:100,y:30},whc:.15},{whl:4,wha:.2,who:{x:7,y:4},wheo:{x:102,y:0},whc:-.18},{whl:3,wha:.2,who:{x:7,y:4},wheo:{x:102,y:0},whc:-.18}],
palettes=[{bg:"#b8deff",body:"#1a1b1e",neck:"#cfd2de",face:"#1a1b1e",prim:"#fafafa",sec:"#fafafa",ear:"#0f0f10",earIn:"#874f60",eyeline:"#000000",nose:"#f09d9d",noseIn:"#2d1f16",mouth:"#a06a6a",whiskers:"#ededed"},{bg:"#8b92e9",body:"#fafafa",neck:"#ededed",face:"#fafafa",prim:"#121212",sec:"#050505",ear:"#f6f6f6",earIn:"#f3b4d9",eyeline:"#383838",nose:"#ffc2d4",noseIn:"#822673",mouth:"#3c252e",whiskers:"#050505"},{bg:"#5d7bb1",body:"#ffae70",neck:"#ecddd5",face:"#ffae70",prim:"#fcfcfc",sec:"#e98649",ear:"#f7a464",earIn:"#ffede0",eyeline:"#8a400f",nose:"#ce5f5f",noseIn:"#32271f",mouth:"#4b291b",whiskers:"#6f3f2a"},{bg:"#b8deff",body:"#7e849a",neck:"#d2d2db",face:"#7e849a",prim:"#fcfcfc",sec:"#555463",ear:"#6a6e7c",earIn:"#f5c7df",eyeline:"#3d3d3d",nose:"#f5b2d4",noseIn:"#703e57",mouth:"#383838",whiskers:"#383838"},{bg:"#f0f0f0",body:"#815d41",neck:"#ded1c9",face:"#815d41",prim:"#f2dfce",sec:"#40301c",ear:"#6e4e35",earIn:"#dd9797",eyeline:"#492c18",nose:"#f08e8e",noseIn:"#752f40",mouth:"#2f2323",whiskers:"#121212"},{bg:"#f0f0f0",body:"#5e6373",neck:"#cdd0d5",face:"#5e6373",prim:"#dadce7",sec:"#4d516a",ear:"#505568",earIn:"#dca7c1",eyeline:"#26242d",nose:"#13121c",noseIn:"#575757",mouth:"#191a1f",whiskers:"#171617"},{bg:"#b8deff",body:"#fcfcfc",neck:"#e7e2de",face:"#fcfcfc",prim:"#1a1b1e",sec:"#e2843c",ear:"#1a1b1e",earIn:"#ffede0",eyeline:"#8a400f",nose:"#f39696",noseIn:"#6b1e62",mouth:"#6d4040",whiskers:"#262626"},{bg:"#f0f0f0",body:"#e1d0c6",neck:"#e3d6ce",face:"#e1d0c6",prim:"#2e2520",sec:"#bfa89b",ear:"#2e2520",earIn:"#5f4534",eyeline:"#43352d",nose:"#5f4534",noseIn:"#000000",mouth:"#795944",whiskers:"#292929"},{bg:"#5e4c9a",body:"#ffb8ee",neck:"#f1dfef",face:"#ffb8ee",prim:"#fff0fe",sec:"#d373be",ear:"#fbb1ea",earIn:"#d56dbe",eyeline:"#5c2e52",nose:"#a84d94",noseIn:"#3e1829",mouth:"#602957",whiskers:"#341b36"},{bg:"#5e4c9a",body:"#b8f4ff",neck:"#cedcdf",face:"#b8f4ff",prim:"#ebf8ff",sec:"#6da4c0",ear:"#a0ebf8",earIn:"#599bb1",eyeline:"#385561",nose:"#6891b1",noseIn:"#24223f",mouth:"#182a35",whiskers:"#151e23"},{bg:"#566a8f",body:"#7ca269",neck:"#ceded6",face:"#7ca269",prim:"#507141",sec:"#375845",ear:"#7a9a6a",earIn:"#355744",eyeline:"#1f2320",nose:"#343a31",noseIn:"#000000",mouth:"#242e1f",whiskers:"#ededed"},{bg:"#5d7bb1",body:"#f3d8d8",neck:"#f2e9e9",face:"#f3d8d8",prim:"#ffebeb",sec:"#ecb6b6",ear:"#f3cece",earIn:"#d38897",eyeline:"#b47979",nose:"#f0a8a8",noseIn:"#5e4040",mouth:"#a97575",whiskers:"#f5f5f5"},{bg:"#f0f0f0",body:"#e4c7b4",neck:"#efe0d7",face:"#e4c7b4",prim:"#ffede0",sec:"#c19d8a",ear:"#d7b8a3",earIn:"#ba8882",eyeline:"#603e3e",nose:"#7b5656",noseIn:"#000000",mouth:"#3a2727",whiskers:"#6f5858"},{bg:"#5d7bb1",body:"#f09475",neck:"#decadc",face:"#f09475",prim:"#fff0fe",sec:"#49241d",ear:"#38251f",earIn:"#d491bb",eyeline:"#000000",nose:"#371515",noseIn:"#808080",mouth:"#000000",whiskers:"#000000"}],
eyeColors=["#d6f9ff","#f9e9ae","#cafaa3","#ff9c66","#000000","#ef0902"],
patterns={body:[[],["tabby"],["tabby","belly"],["tabby","necktie"],["belly"],["necktie"],["corners"],["stripes"],["tabby","corners"]],face:[[],["mask"],["round"],["nose","round"],["nose","chin"],["triangle"],["triangle","whiskers"],["whiskers"],["whiskers","nose"],["whiskers","chin"],["ear"],["temple"],["ear","temple"],["forehead","cheeks"]]},
breeds=[{name:"black",odds:51,body:[0,4,5,6],face:[0,1,2,3,4,5,6,7,8,9],palettes:[0],eyes:[0,1,2,3]},{name:"white",odds:26,body:[0,6],face:[0,10,11,12],palettes:[1],eyes:[0,1,2]},{name:"tabby",odds:100,body:[1,2,3,4,5,6,7],face:[1,2,3,4,5,6,7,8,9],palettes:[2,3,4],eyes:[0,1,2]},{name:"shorthair",odds:20,body:[0,4,5,6],face:[0,1,4,6,7,8],palettes:[5],eyes:[3]},{name:"calico",odds:17,body:[6],face:[1,12],palettes:[6],eyes:[0,1,2]},{name:"siamese",odds:10,body:[0,6],face:[0,8],palettes:[7],eyes:[0,1,2]},{name:"sphynx",odds:5,body:[0],face:[0],palettes:[11],eyes:[0,1,2],head:15,ear:11},{name:"sandcat",odds:5,body:[3,8],face:[6],palettes:[12],eyes:[0,1],head:16,ear:12},{name:"toyger",odds:5,body:[3,8],face:[6],palettes:[13],eyes:[0,1,2],head:17,ear:13},{name:"alien",odds:12,body:[1,2,3,4,5,6,8],face:[1,2,3,4,5,6,7,8,9],palettes:[8,9],eyes:[4]},{name:"zombie",odds:5,body:[1,2,3,4,5,6,7,8],face:[2,3,4,5,6,9],palettes:[10],eyes:[5]}];let assign=Object.assign;
function determine(e,y){for(let n=0;n<breeds.length;n++)if((y-=e[n].odds)<0)return n}
function generate(){breed=breeds[determine(breeds,rvs[0])],bps=patterns.body[breed.body[rvs[1]%breed.body.length]],fps=patterns.face[breed.face[rvs[2]%breed.face.length]],["tabby","toyger","sandcat"].includes(breed.name)&&(fps=fps.concat(patterns.face[13])),["alien","zombie"].includes(breed.name)&&rvs[15]<128&&(fps=fps.concat(patterns.face[13])),palette=palettes[breed.palettes[rvs[3]%breed.palettes.length]],assign(colors,palette),assign(s,breed.head?heads[breed.head]:heads[rvs[4]%(heads.length-3)]),assign(s,breed.ear?ears[breed.ear]:ears[rvs[5]%(ears.length-3)]),assign(s,eyes[rvs[6]%eyes.length]),assign(s,pupils[rvs[7]%pupils.length]),assign(s,mouths[rvs[8]%mouths.length]),assign(s,whiskers[rvs[9]%whiskers.length]),1==s.tng&&(s.tng=rvs[15]<18&&!["alien","zombie"].includes(breed.name)),s.flip=rvs[10]<128,s.swap=rvs[11]<128,s.swap&&"calico"==breed.name&&(colors.prim=palette.sec,colors.sec=palette.prim),s.heterochromia=rvs[12]<13,breed.eyes.length>1&&s.heterochromia?(colors.eye=eyeColors[0],colors.eyeAlt=eyeColors[breed.eyes[rvs[13]%(breed.eyes.length>2?2:1)+1]]):colors.eye=colors.eyeAlt=eyeColors[breed.eyes[rvs[13]%breed.eyes.length]],s.eyeSwap=rvs[14]<128}
let SIZE,SCALE,MID,BASE=300;
function setup(){SIZE=Math.min(windowWidth,windowHeight),SCALE=SIZE/BASE,MID=SIZE/2,createCanvas(SIZE,SIZE),generate(),update()}
function update(){updateFace(),updateBody(),updateEars(),updateEyes(),updateNose(),updateMouth(),updateWhiskers()}
function updateFace(){fa[0]=s.fh,fa[1]=s.tpl,fa[2]=s.chk,fa[3]=s.chn,fm[0]=midPoint(fa[0],fa[1]),fm[1]=midPoint(fa[1],fa[2]),fm[2]=midPoint(fa[2],fa[3]);let e=(fm[0].y-fa[0].y)/(fa[1].x-fa[0].x),y=s.chkc,n=s.chnc*(fm[2].y-fa[2].y)/(fa[3].x-fa[2].x);fn[0]={y:fm[0].y-e*(fa[1].x-fa[0].x),x:fm[0].x+e*(fa[1].y-fa[0].y)},fn[1]={y:fm[1].y-y*(fa[2].x-fa[1].x),x:fm[1].x+y*(fa[2].y-fa[1].y)},fn[2]={y:fm[1].y+y*(fa[2].x-fa[1].x),x:fm[1].x-y*(fa[2].y-fa[1].y)},fn[3]={y:fm[2].y-n*(fa[3].x-fa[2].x),x:fm[2].x+n*(fa[3].y-fa[2].y)},fc[0]={x:.4*fa[1].x,y:fa[0].y},fc[1]=lerpPoint(fa[1],fn[0],.5),fc[2]=midPoint(fa[1],lerpPoint(fn[1],fn[2],s.chko)),fc[3]=midPoint(fa[2],lerpPoint(fn[2],fn[1],1)),fc[4]=lerpPoint(fa[2],fn[3],.5),fc[5]={x:fa[2].x*s.chno,y:fa[3].y}}
function updateBody(){b={x:bezierPoint(fa[2].x,fc[4].x,fc[5].x,fa[3].x,s.bw),y:bezierPoint(fa[2].y,fc[4].y,fc[5].y,fa[3].y,s.bw)}}
let earTip, earMid;
function updateEars(){ea[0]={x:bezierPoint(fa[0].x,fc[0].x,fc[1].x,fa[1].x,s.eso),y:bezierPoint(fa[0].y,fc[0].y,fc[1].y,fa[1].y,s.eso)},ea[3]={x:bezierPoint(fa[1].x,fc[1].x,fc[0].x,fa[0].x,s.eeo),y:bezierPoint(fa[1].y,fc[1].y,fc[0].y,fa[0].y,s.eeo)},earTip=ea[1]=ea[2]={x:ea[3].x+s.eto.x,y:ea[3].y-s.eto.y},ea[1]=lerpPoint(earTip,ea[0],s.eb+(.8-s.eb)*ceil(s.eb)*-constrain(s.ebr,-1,0)),ea[2]=lerpPoint(earTip,ea[3],s.eb+(.8-s.eb)*ceil(s.eb)*constrain(s.ebr,0,1)),ei[0]={x:lerp(ea[0].x,ea[3].x,s.esi),y:lerp(ea[0].y,ea[3].y,s.esi)},ei[3]={x:lerp(ea[0].x,ea[3].x,1-s.eei),y:lerp(ea[0].y,ea[3].y,1-s.eei)},earMid=midPoint(ei[0],ei[3]),eit=ei[1]=ei[2]=lerpPoint(earMid,earTip,s.eti),eit.x+=s.eito,ei[1]=lerpPoint(eit,ei[0],s.eb+(.8-s.eb)*ceil(s.eb)*-constrain(s.ebr,-1,0)),ei[2]=lerpPoint(eit,ei[3],s.eb+(.8-s.eb)*ceil(s.eb)*constrain(s.ebr,0,1)),em[0]=midPoint(ea[0],ea[1]),em[1]=midPoint(ea[1],ea[2]),em[2]=midPoint(ea[2],ea[3]),en[0]={y:em[0].y-s.esc*(ea[1].x-ea[0].x),x:em[0].x+s.esc*(ea[1].y-ea[0].y)},en[1]={y:em[1].y-s.etc*(ea[2].x-ea[1].x),x:em[1].x+s.etc*(ea[2].y-ea[1].y)},en[2]={y:em[2].y-s.eec*(ea[3].x-ea[2].x),x:em[2].x+s.eec*(ea[3].y-ea[2].y)},ec[0]=midPoint(ea[0],en[0]),ec[1]=midPoint(ea[1],en[0]),ec[2]=midPoint(ea[1],en[1]),ec[3]=midPoint(ea[2],en[1]),ec[4]=midPoint(ea[2],en[2]),ec[5]=midPoint(ea[3],en[2]),eim[0]=midPoint(ei[0],ei[1]),eim[1]=midPoint(ei[1],ei[2]),eim[2]=midPoint(ei[2],ei[3]),en[0]={y:eim[0].y-s.esc*(ei[1].x-ei[0].x),x:eim[0].x+s.esc*(ei[1].y-ei[0].y)},en[1]={y:eim[1].y-s.eitc*(ei[2].x-ei[1].x),x:eim[1].x+s.eitc*(ei[2].y-ei[1].y)},en[2]={y:eim[2].y-s.eec*(ei[3].x-ei[2].x),x:eim[2].x+s.eec*(ei[3].y-ei[2].y)},eic[0]=midPoint(ei[0],en[0]),eic[1]=midPoint(ei[1],en[0]),eic[2]=midPoint(ei[1],en[1]),eic[3]=midPoint(ei[2],en[1]),eic[4]=midPoint(ei[2],en[2]),eic[5]=midPoint(ei[3],en[2])}
function updateEyes(){eya[0]={x:-s.eyw,y:0},eya[1]={x:0,y:lerp(-s.eyt,s.eyb,blinkAmt)},eya[2]={x:s.eyw,y:0},eya[3]={x:0,y:lerp(s.eyb,-s.eyt,petAmt)},eyc[0]={x:eya[0].x,y:.5*eya[1].y},eyc[1]={x:.5*eya[0].x,y:eya[1].y},eyc[2]={x:.5*eya[2].x,y:eya[1].y},eyc[3]={x:eya[2].x,y:.5*eya[1].y},eyc[4]={x:eya[2].x,y:.5*eya[3].y},eyc[5]={x:.5*eya[2].x,y:eya[3].y},eyc[6]={x:.5*eya[0].x,y:eya[3].y},eyc[7]={x:eya[0].x,y:.5*eya[3].y}}
function updateNose(){na[0]={x:0,y:37+s.no},na[1]={x:-s.ns.x,y:na[0].y-s.ns.y},na[2]={x:s.ns.x,y:na[0].y-s.ns.y},nm[0]=midPoint(na[0],na[1]),nm[1]=midPoint(na[1],na[2]),nm[2]=midPoint(na[2],na[0]),nn[0]={y:nm[0].y-.2*(na[1].x-na[0].x),x:nm[0].x+.2*(na[1].y-na[0].y)},nn[1]={y:nm[1].y-.2*(na[2].x-na[1].x),x:nm[1].x+.2*(na[2].y-na[1].y)},nn[2]={y:nm[2].y-.2*(na[0].x-na[2].x),x:nm[2].x+.2*(na[0].y-na[2].y)},nc[0]=midPoint(na[0],nn[0]),nc[1]=midPoint(na[1],nn[0]),nc[2]=midPoint(na[1],nn[1]),nc[3]=midPoint(na[2],nn[1]),nc[4]=midPoint(na[2],nn[2]),nc[5]=midPoint(na[0],nn[2]),ni[0]={x:bezierPoint(na[0].x,nc[0].x,nc[1].x,na[1].x,.2),y:bezierPoint(na[0].y,nc[0].y,nc[1].y,na[1].y,.2)},ni[3]={x:bezierPoint(na[0].x,nc[0].x,nc[1].x,na[1].x,.8),y:bezierPoint(na[0].y,nc[0].y,nc[1].y,na[1].y,.8)},ni[1]={x:ni[0].x+1,y:ni[0].y-.4*s.ns.x},ni[2]={x:ni[0].x+.4*s.ns.x,y:ni[0].y-.6*s.ns.y}}
function updateMouth(){m[0]={x:0,y:constrain(na[0].y+s.mh,na[0].y,fa[3].y)},m[3]={x:s.mo.x,y:constrain(m[0].y+s.mo.y,na[0].y,fa[3].y)};let e=midPoint(m[0],m[3]),y={y:e.y+s.mc*(m[3].x-m[0].x),x:e.x-s.mc*(m[3].y-m[0].y)};m[1]=midPoint(m[0],y),m[2]=midPoint(m[3],y)}
function updateWhiskers(){wa[0]={x:1.5*s.who.x,y:0},wa[1]={x:s.wheo.x,y:s.wheo.y};let e=midPoint(wa[0],wa[1]),y={x:e.x+s.whc*(wa[1].y-wa[0].y),y:e.y-s.whc*(wa[1].x-wa[0].x)};wc[0]=midPoint(wa[0],y),wc[1]=midPoint(wa[1],y)}
let petTimeout=0,petAmt=0,petting=!1;
function updatePetting(){petTimeout>0&&(petTimeout-=.001*deltaTime,blinkTimeout=3,blinkAmt=0);let e=(mouseX-MID)/SCALE,y=(mouseY-MID)/SCALE;if(e>-fa[2].x&&e<fa[2].x&&y>fa[0].y&&y<150){let n=(pmouseX-MID)/SCALE,c=(pmouseY-MID)/SCALE;(e-n)*(e-n)+(y-c)*(y-c)>200&&(petting&&(petTimeout=.5),petting=!0)}petTimeout>0?petAmt<1&&(petAmt=constrain(petAmt+.012*deltaTime,0,1)):petAmt>0&&0==(petAmt=constrain(petAmt-.01*deltaTime,0,1))&&(petting=!1)}
let blinkTimeout=5,blinkAmt=0,blinking=!1;
function updateBlinking(){blinkTimeout>0?blinkTimeout-=.001*deltaTime:blinkAmt<1&&!blinking?1==(blinkAmt=constrain(blinkAmt+.01*deltaTime,0,1))&&(blinking=!0,blinkTimeout=.08):blinkAmt>0&&blinking&&0==(blinkAmt=constrain(blinkAmt-.01*deltaTime,0,1))&&(blinking=!1,blinkTimeout=5)}function draw(){updatePetting(),updateBlinking(),updateEyes(),background(colors.bg),translate(MID,MID),scale(SCALE),drawBody(),drawEars(),drawFace(),drawEyes(),drawTongue(),drawMouth(),drawNose(),drawWhiskers()}
function drawBody(){push(),noStroke(),fill(colors.body),bps.includes("corners")&&!["calico","white","siamese"].includes(breed.name)&&fill(colors.prim),beginShape(),vertex(b.x,b.y),vertex(b.x+30,b.y+150),vertex(-b.x-30,b.y+150),vertex(-b.x,b.y),endShape(),drawingContext.clip(),drawBodyPatterns(),strokeWeight(12),stroke(colors.neck),noFill(),blendMode(MULTIPLY),beginShape(),vertex(fa[2].x,fa[2].y),bezierVertex(fc[4].x,fc[4].y,fc[5].x,fc[5].y,fa[3].x,fa[3].y),bezierVertex(-fc[5].x,fc[5].y,-fc[4].x,fc[4].y,-fa[2].x,fa[2].y),endShape(),pop()}
function drawBodyPatterns(){if(push(),bps.includes("stripes")){strokeWeight(14),stroke(colors.sec),noFill();for(let e=1;e<5;e++){let y=lerpPoint(b,{x:b.x+30,y:b.y+150},.18*e),n=lerp(50,0,s.bw);bezier(y.x,y.y,.5*y.x,y.y+n,.5*-y.x,y.y+n,-y.x,y.y)}}if(bps.includes("corners")){noStroke(),fill(colors.body),["calico","white","siamese"].includes(breed.name)&&fill(colors.prim);let e=lerpPoint(b,{x:b.x+30,y:b.y+150},lerp(.4,.1,s.bw));triangle(e.x,e.y,e.x-110,e.y+150,e.x+30,e.y+150),"calico"==breed.name&&fill(colors.sec),triangle(-e.x,e.y,110-e.x,e.y+150,-e.x-30,e.y+150)}if(bps.includes("tabby")){strokeWeight(2),strokeJoin(ROUND),stroke(colors.sec),fill(colors.sec);for(let e=0;e<4;e++){let y=lerpPoint(b,{x:b.x+30,y:b.y+150},lerp(.42,0,s.bw)+.12*e);"calico"==breed.name&&(stroke(e%2==1?colors.prim:colors.sec),fill(e%2==1?colors.prim:colors.sec)),triangle(y.x,y.y,y.x,y.y-7,y.x-32,y.y+6),triangle(-y.x,y.y,-y.x,y.y-7,32-y.x,y.y+6)}}if(bps.includes("necktie")){noStroke(),fill(colors.prim);let e=lerp(70,0,s.bw);quad(b.x-e,b.y,b.x,b.y+5*e,-b.x,b.y+5*e,-b.x+e,b.y)}if(bps.includes("belly")){noStroke(),fill(colors.prim);let e=lerp(100,50,s.bw);ellipse(0,165,e,100)}pop()}
function drawFace(){push(),noStroke(),fill(colors.face),fps.includes("mask")&&"calico"!=breed.name&&fill(colors.prim),beginShape(),vertex(fa[0].x,fa[0].y),bezierVertex(fc[0].x,fc[0].y,fc[1].x,fc[1].y,fa[1].x,fa[1].y),bezierVertex(fc[2].x,fc[2].y,fc[3].x,fc[3].y,fa[2].x,fa[2].y),bezierVertex(fc[4].x,fc[4].y,fc[5].x,fc[5].y,fa[3].x,fa[3].y),bezierVertex(-fc[5].x,fc[5].y,-fc[4].x,fc[4].y,-fa[2].x,fa[2].y),bezierVertex(-fc[3].x,fc[3].y,-fc[2].x,fc[2].y,-fa[1].x,fa[1].y),bezierVertex(-fc[1].x,fc[1].y,-fc[0].x,fc[0].y,-fa[0].x,fa[0].y),endShape(),drawingContext.clip(),drawFacePatterns(),pop()}
function drawFacePatterns(){push();let e=s.flip?-1:1;if(fps.includes("round")&&(noStroke(),fill(colors.prim),ellipse(0,na[0].y+60,120,120)),fps.includes("triangle")&&(strokeWeight(6),strokeJoin(ROUND),stroke(colors.prim),fill(colors.prim),triangle(0,na[0].y,-124,na[0].y+100,124,na[0].y+100)),fps.includes("whiskers")&&(noStroke(),fill(colors.prim),ellipse(10,na[0].y+6,22,22),ellipse(-10,na[0].y+6,22,22)),fps.includes("ear")&&(noStroke(),fill(colors.prim),beginShape(),vertex(e*ea[0].x,ea[0].y),bezierVertex(e*(earMid.x-20),earMid.y+15,e*(earMid.x+15),earMid.y+15,e*ea[3].x,ea[3].y),vertex(e*ea[3].x,ea[0].y),endShape()),fps.includes("temple")&&(noStroke(),fill(colors.prim),"calico"==breed.name&&fill(colors.sec),ellipse(68*-e,s.eyo.y-72,150,200)),fps.includes("chin")){strokeWeight(12),strokeJoin(ROUND),stroke(colors.prim),fill(colors.prim);let e=lerp(40,10,s.bw);quad(-16,na[0].y+5,16,na[0].y+5,e,na[0].y+80,-e,na[0].y+80)}if(fps.includes("nose")&&(strokeWeight(12),strokeJoin(ROUND),stroke(colors.prim),fill(colors.prim),triangle(0,5,-16,na[0].y+5,16,na[0].y+5)),fps.includes("mask")&&(noStroke(),fill(colors.face),"calico"==breed.name&&fill(colors.prim),ellipse(0,s.fh.y,32,70),ellipse(76*e,s.eyo.y-50,140,200),"calico"==breed.name&&fill(colors.sec),ellipse(-76*e,s.eyo.y-50,140,200)),fps.includes("forehead")){strokeWeight(2),strokeJoin(ROUND),stroke(colors.sec),fill(colors.sec);for(let e=-1;e<=1;e++)triangle(s.fh.x-(e<0?5:3)+14*e,s.fh.y,s.fh.x+(e>0?5:3)+14*e,s.fh.y,s.fh.x+14*e,s.fh.y+(e%2==0?30:26))}if(fps.includes("cheeks")){strokeWeight(2),strokeJoin(ROUND),stroke(colors.sec),fill(colors.sec);for(let e=-1;e<=1;e++)for(let y=1;y>=-1;y-=2)triangle(y*(s.chk.x+14),s.chk.y-(e<0?8:4)+14*e,y*(s.chk.x+14),s.chk.y+(e>0?8:4)+14*e,y*(s.chk.x-30),s.chk.y+14*e)}pop()}
function drawEars(){push();let e=s.flip?1:-1;noStroke();for(let y=1;y>=-1;y-=2)fill(colors.ear),"calico"==breed.name?fill(y==e?colors.sec:colors.prim):(fps.includes("ear")&&y==-e||fps.includes("temple")&&y==e)&&fill(colors.prim),beginShape(),vertex(y*ea[0].x,ea[0].y),bezierVertex(y*ec[0].x,ec[0].y,y*ec[1].x,ec[1].y,y*ea[1].x,ea[1].y),bezierVertex(y*ec[2].x,ec[2].y,y*ec[3].x,ec[3].y,y*ea[2].x,ea[2].y),bezierVertex(y*ec[4].x,ec[4].y,y*ec[5].x,ec[5].y,y*ea[3].x,ea[3].y),endShape(),fill(colors.earIn),beginShape(),vertex(y*ei[0].x,ei[0].y),bezierVertex(y*eic[0].x,eic[0].y,y*eic[1].x,eic[1].y,y*ei[1].x,ei[1].y),bezierVertex(y*eic[2].x,eic[2].y,y*eic[3].x,eic[3].y,y*ei[2].x,ei[2].y),bezierVertex(y*eic[4].x,eic[4].y,y*eic[5].x,eic[5].y,y*ei[3].x,ei[3].y),endShape();pop()}
function drawEyes(){for(let e=1;e>=-1;e-=2)push(),translate(e*s.eyo.x,s.eyo.y),rotate(e*s.eyr),noStroke(),fill(e==(s.eyeSwap?-1:1)?colors.eye:colors.eyeAlt),drawingContext.miterLimit=2,drawEyeShape(e),push(),rotate(e*-s.eyr),drawingContext.clip(),fill("#000000"),"zombie"==breed.name&&fill("#FFFFFF"),ellipse(e*s.eypo.x,s.eypo.y,s.eypw,s.eyph),fill("#FFFFFF"),drawingContext.shadowColor="#FFFFFF",drawingContext.shadowBlur=10,"zombie"!=breed.name&&(s.eyt>=0&&ellipse(e*(s.eypo.x+s.eypw/4),s.eypo.y-s.eyph/5,constrain(s.eypw/3,4,12),s.eyph/3.5),ellipse(e*(s.eypo.x-s.eypw/4),s.eypo.y+s.eyph/5,constrain(s.eypw/4,3,12),s.eyph/4.5)),pop(),strokeWeight(1.5),stroke(colors.eyeline),noFill(),drawEyeShape(e),pop()}
function drawEyeShape(e){beginShape(),vertex(e*(eya[0].x-0),eya[0].y),bezierVertex(e*eyc[0].x,eyc[0].y,e*eyc[1].x,eyc[1].y,e*eya[1].x,eya[1].y),bezierVertex(e*eyc[2].x,eyc[2].y,e*eyc[3].x,eyc[3].y,e*(eya[2].x+4),eya[2].y),bezierVertex(e*eyc[4].x,eyc[4].y,e*eyc[5].x,eyc[5].y,e*eya[3].x,eya[3].y),bezierVertex(e*eyc[6].x,eyc[6].y,e*eyc[7].x,eyc[7].y,e*(eya[0].x-0),eya[0].y),endShape(CLOSE)}
function drawNose(){push(),strokeWeight(2),strokeJoin(ROUND),stroke(colors.nose),fill(colors.nose),beginShape(),vertex(na[0].x,na[0].y),bezierVertex(nc[0].x,nc[0].y,nc[1].x,nc[1].y,na[1].x,na[1].y),bezierVertex(nc[2].x,nc[2].y,nc[3].x,nc[3].y,na[2].x,na[2].y),bezierVertex(nc[4].x,nc[4].y,nc[5].x,nc[5].y,na[0].x,na[0].y),endShape(),fill(colors.noseIn),bezier(ni[0].x,ni[0].y,ni[1].x,ni[1].y,ni[2].x,ni[2].y,ni[3].x,ni[3].y),bezier(-ni[0].x,ni[0].y,-ni[1].x,ni[1].y,-ni[2].x,ni[2].y,-ni[3].x,ni[3].y),pop()}
function drawMouth(){push(),strokeWeight(1.5),stroke(colors.mouth),noFill(),line(na[0].x,na[0].y,m[0].x,m[0].y),bezier(m[0].x,m[0].y,m[1].x,m[1].y,m[2].x,m[2].y,m[3].x,m[3].y),bezier(-m[0].x,m[0].y,-m[1].x,m[1].y,-m[2].x,m[2].y,-m[3].x,m[3].y),pop()}
function drawWhiskers(){if("sphynx"!=breed.name){push(),strokeWeight(.8),stroke(colors.whiskers),noFill();for(let e=1;e>=-1;e-=2)push(),drawingContext.shadowOffsetY=.5,drawingContext.shadowColor="#505050",translate(e*-s.who.x*.5,na[0].y+s.who.y),rotate(-.3*e),bezier(e*wa[0].x,wa[0].y,e*wc[0].x,wc[0].y,e*wc[1].x,wc[1].y,e*wa[1].x,wa[1].y),rotate(e*s.wha*2),bezier(e*wa[0].x,wa[0].y,e*wc[0].x,wc[0].y,e*wc[1].x*.9,wc[1].y,e*wa[1].x*.9,wa[1].y),rotate(e*-s.wha),s.whl>2&&bezier(e*wa[0].x,wa[0].y,e*wc[0].x,wc[0].y,e*wc[1].x,wc[1].y,e*wa[1].x,wa[1].y),rotate(e*s.wha*2),s.whl>3&&bezier(e*wa[0].x,wa[0].y,e*wc[0].x,wc[0].y,e*wc[1].x*.75,wc[1].y,e*wa[1].x*.75,wa[1].y),pop();pop()}}
function drawTongue(){if(!s.tng)return;push(),noStroke(),fill("#DB7093"),triangle(m[0].x,m[0].y+s.mc,m[0].x+7,m[0].y+s.tngo+2,m[0].x-7,m[0].y+s.tngo+2),translate(0,s.tngo),beginShape(),vertex(m[0].x+7,m[0].y+1),bezierVertex(m[0].x+7,m[0].y+10,m[0].x+7,m[0].y+19,m[0].x,m[0].y+19),bezierVertex(m[0].x-7,m[0].y+19,m[0].x-7,m[0].y+10,m[0].x-7,m[0].y+1),endShape(),strokeWeight(1.5),strokeCap(ROUND),stroke("#E38FAB"),line(m[0].x,m[0].y+2,m[0].x,m[0].y+19-2),pop()}
function midPoint(e,y){return{x:.5*(e.x+y.x),y:.5*(e.y+y.y)}}
function lerpPoint(e,y,n){return{x:e.x+(y.x-e.x)*n,y:e.y+(y.y-e.y)*n}}