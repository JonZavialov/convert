async function fileInputEventListener(e){
    let file = e.target.files[0]
    processFile(file)
}

async function processFile(file){
    let extension = file.name.split('.').pop()
    if(extension == "jpg" || extension == "png"){
        processImage(file)
    }
}

async function processImage(file){
    let canvas = document.getElementById('converterCanvas')
    let drawingContext = canvas.getContext('2d')
    let imgURL = URL.createObjectURL(file)
    let img = new Image()
    img.src = imgURL
    img.onload = function() {
        let proportion = 400 / img.width
        img.width = proportion * img.width
        img.height = proportion * img.height
        document.body.appendChild(img)
        drawingContext.drawImage(img, 0, 0)
        canvas.toBlob(function(blob){
            let file = new File([blob], "converted.png", {type: "image/png"})
            console.log(file)
        })
    }
}