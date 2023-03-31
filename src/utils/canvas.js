// Define our labelmap
const labelMap = {
    1:{name:'DefectivePin', color:'red'},
    2:{name:'NonDefectivePin', color:'lime'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]

            // Check if text exists in labelMap
            if (labelMap.hasOwnProperty(text)) {
                // Set styling
                ctx.strokeStyle = labelMap[text]['color']
                ctx.lineWidth = 8
                ctx.fillStyle = 'white'
                ctx.font = '30px Arial'         
                
                // Draw the boxes
                ctx.beginPath()
                ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
                ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
                ctx.stroke()
            } else {
                console.log(`No label found for class ${text}`);
            }
        }
    }
}


