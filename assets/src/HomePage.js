async function initHomePage(){
    let fileInputWindow = new Window("input file here", "fileInput", "File Input")
    fileInputWindow.generate()
    fileInputWindow.render()
    fileInputWindow.center()

    setCopyright()
}

async function setCopyright(){
    let d = new Date()
    let statement = `Copyright © 2021 - ${d.getFullYear()} Jonathan Zavialov All Rights Reserved.`
    let container = document.getElementsByClassName('copyright')[0]
    container.innerHTML = statement
}