window.addEventListener('load', init, false)
function init() {
			
    const canvas = document.getElementsByTagName("canvas")[0]
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight
    let seed = parseInt(tokenData.hash.substr(-7),16)
    drawToken(canvas,seed)
    getMetadata(tokenData.hash)
}

function drawToken(canvas,seed){

    const c = canvas.getContext('2d')
    c.webkitImageSmoothingEnabled = false

    const colorSeed = seed & 0xfff 
    const segmentSeed = (seed & 0x7f000) >> 12 
    const rSeed = ((seed >> 19) & 0xff) === 1 ? 5 : ((seed >> 19) & 0xf) === 1 ? 3 : 4 

    let outerSize = Math.min(canvas.width,canvas.height)
    c.fillStyle = '#C4CDD5'
    c.fillRect(0,0,outerSize,outerSize)

    let innerSize = Math.pow(2,parseInt(Math.log2(outerSize)))
    offset = Math.floor((outerSize-innerSize)/2)

    let scale = Math.pow(2,rSeed)
    let factor = innerSize / 2048.0 
    
    drawPattern(colorSeed,offset,offset,scale*factor,innerSize)
    draw7Segment(segmentSeed,factor,offset)

    function drawPattern(bitmap,dx,dy,scale,size){

        for(x=dx;x<dx+size;x+=scale*2){
            for(y=dy;y<dy+size;y+=scale*2){
                
                for(var i=0;i<4;i++){
                    let byte = bitmap >> (3*i)
                    let [r,g,b] = [ (byte & 4) ? 'F' : '0', (byte & 2) ? 'F' : '0', (byte & 1) ? 'F' : '0' ]
                    c.fillStyle = `#${r}${g}${b}`
                    let [xOffset,yOffset] = [ (i%2)*scale, parseInt(i/2)*scale ]
                    c.fillRect(x+xOffset,y+yOffset,scale,scale)
                }
            }
        }
    }

    function draw7Segment(mask,factor,offset){
        const [scale,sprite,segments,dx,dy] = [
            32*factor,
            [32760,65532,131070,262143,131070,65532,32760],
            [[1,0,0,1,4,0],[0,1,-1,0,7,4],[0,1,-1,0,26,4],[1,0,0,1,4,19],[0,1,-1,0,7,23],[0,1,-1,0,26,23],[1,0,0,1,4,38],],
            19,9
        ]
        
        segments.map((translation,i)=>{
            let bit = Math.pow(2,i)
            mask & bit && draw(sprite, translation, dx, dy, scale, offset)
        }) 
        
        function draw(sprite,translation,dx,dy,scale,offset){
            c.setTransform(1,0,0,1,dx*scale+offset,dy*scale+offset)
            c.transform(...translation.map(o=>scale*o))
            sprite.map((bits,dy)=>{
                for(dx=0;bits>0;dx++){
                    if(bits & 1){
                        c.fillStyle = `#FFF`       
                        c.fillRect(dx,dy,1,1)
                    }
                    bits = bits >> 1
                }
            })
        }
    } 
}

function getMetadata(e){const s=parseInt(e.substr(-7),16),a=4095&s,c=(520192&s)>>12,t=1==(s>>19&255)?5:1==(s>>19&15)?3:4,h=5===t?"LoRes 32x32":3===t?"HiRes 8x8":"VGA 16x16";let i="Glitch";switch(c){case 0:i="Ghost";break;case 63:case 122:case 83:case 124:case 91:case 27:case 58:case 116:case 82:case 56:case 31:case 118:case 62:case 110:i="Alphabetic";break;case 93:case 109:case 46:case 123:case 37:case 111:case 54:i="Numeric";break;case 18:case 36:case 119:case 107:i="Alphanumeric";break;case 127:i="Lucky 8";break;case 70:i="OTTO"}let u=[],r=7&a,p=(56&a)>>3,l=(448&a)>>6,n=(3584&a)>>9;switch(0===r&&0===p&&0===l&&0===n?0===c?u.push("Blackout"):u.push("Binary"):7===r&&7===p&&7===l&&7===n?u.push("Whiteout"):r===p&&p===l&&l===n?u.push("Solid"):0!==r&&7!==r||0!==p&&7!==p||0!==l&&7!==l||0!==n&&7!==n||u.push("Black & White"),r===l&&p===n&&r!==p&&u.push("Bars"),r===p&&l===n&&r!==l&&(0===r||0===l?u.push("Scanlines"):u.push("Stripes")),r===n&&p===l&&r!==p&&u.push("Checkerboard"),(r===p&&r===l&&r!==n||r!==p&&r===l&&r===n||r===p&&r!==l&&r===n||r!==p&&p===l&&p===n)&&u.push("Pointillist"),a){case 3826:case 3994:case 2006:case 1726:case 3539:case 3259:case 1439:case 1271:u.push("Highlighter")}0===u.length&&u.push("Mix");let o={glyph:i,res:h,pattern:u};return console.table(o),o}