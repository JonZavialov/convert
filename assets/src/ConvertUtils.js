// Jonathan Zavialov :)

async function fileInputEventListener(e){
    let file = e.target.files[0]
    processFile(file)
}

async function processFile(file){
    let extension = file.name.split('.')
    let fileName = extension[0]
    extension = extension[1]
    if(extension == "jpg" || extension == "png"){
        processImage(file, extension, fileName)
    }
}

async function processImage(file, extension, fileName){
    let canvas = document.createElement('canvas')
    let drawingContext = canvas.getContext('2d')
    let imgURL = URL.createObjectURL(file)
    let img = new Image()
    img.src = imgURL
    img.onload = function() {
        canvas.width = img.width
        canvas.height = img.height
        drawingContext.drawImage(img, 0, 0)
        canvas.toBlob(function(blob){
            switch(extension){
                case "png":
                    convertFromPNG(blob, fileName)
                    break
                case "jpg":
                    convertFromJPG(blob, fileName)
                    break
            }
        }, extension, fileName)

        appendImageToWindow(img)
    }
}

async function appendImageToWindow(img){
    let proportion = 400 / img.width
    img.width = proportion * img.width
    img.height = proportion * img.height
    
    let window = document.getElementsByClassName('fileInputWindow')[0]
    window.getElementsByClassName('window-body')[0].appendChild(img)
    fileInputWindow.center()
}

async function convertFromPNG(blob, fileName){
    console.log(`converting ${fileName}.png to jpg`)
    let file = new File([blob], `sony-converted-${fileName}.jpg`, {type: "image/jpeg"})
    downloadFile(file)
}

async function convertFromJPG(blob, fileName){
    console.log(`converting ${fileName}.jpg to png`)
    let file = new File([blob], `sony-converted-${fileName}.png`, {type: "image/png"})
    downloadFile(file)
}

async function downloadFile(file){
    var element = document.createElement('a')
    element.setAttribute('href', URL.createObjectURL(file))
    element.setAttribute('download', file.name)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}
