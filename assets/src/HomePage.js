async function initHomePage(){
    //generate, render, and center file input window
    let content = `
        <input type="file" class="fileSelector">
    `
    let fileInputWindow = new Window(content, "fileInput", "File Input")
    let windowElement = fileInputWindow.generate()
    fileInputWindow.render()
    fileInputWindow.center()

    //set copyright statement and description
    setCopyright()
    centerDesc()

    //add event listener to file input
    windowElement.getElementsByClassName('fileSelector')[0].addEventListener('change', fileInputEventListener)
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
    element.style.margin = `${(((height/2) * -1) + (inputWindow.clientHeight / 2)) - 2}px 0 0 -${width/2}px`
}