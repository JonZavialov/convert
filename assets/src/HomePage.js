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
    
    //make the copyright statement centered relative to the page
    let buttonWidth = document.getElementById("startButton").clientWidth
    container.style.transform = `translateX(-${buttonWidth/2}px)`
}