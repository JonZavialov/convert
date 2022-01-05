async function initHomePage(){
    let fileInputWindow = new Window("input file here", "fileInput", "File Input")
    fileInputWindow.generate()
    fileInputWindow.render()
    fileInputWindow.center()

    setCopyright()
    centerDesc()
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

async function centerDesc(){
    let element = document.getElementsByClassName("description")[0]
    let inputWindow = document.getElementsByClassName("fileInput")[0]
    
    let width = element.clientWidth
    let height = element.clientHeight

    element.style.top = "50%"
    element.style.left = "50%"
    element.style.margin = `${(((height/2) * -1) + (inputWindow.clientHeight / 2)) + 43}px 0 0 -${width/2}px`
}