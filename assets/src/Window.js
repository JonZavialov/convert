class Window{
    constructor(contents, className, title){
        this.contents = contents
        this.className = className
        this.title = title
    }

    generate(){
        this.window = document.createElement('div')
        this.window.className = this.className + ' window'
        this.#createTitleBar()
        this.#createBody()
    }

    render(){
        document.body.appendChild(this.window)
    }

    addFooter(content){
        let footer = document.createElement('section')
        footer.className = 'field-row'
        footer.style.justifyContent = 'flex-end'
        footer.innerHTML = content
        this.window.getElementsByClassName('window-body')[0].appendChild(footer)
    }

    center(){
        //must be called after render
        //TODO: add check for functions which are strictly called before/after render
        
        let width = this.window.clientWidth
        let height = this.window.clientHeight

        this.window.style.top = "50%"
        this.window.style.left = "50%"
        this.window.style.margin = `${((height/2) * -1) - 45}px 0 0 -${width/2}px`
    }

    #createTitleBar(){
        let titleBar = document.createElement('div') 
        titleBar.className = 'title-bar'

        //create title bar text
        let titleBarText = document.createElement('div')
        titleBarText.className = 'title-bar-text'
        titleBarText.innerHTML = this.title
        titleBar.appendChild(titleBarText)

        //create title bar controls
        let titleBarControls = document.createElement('div')
        titleBarControls.className = 'title-bar-controls'
        titleBarControls.innerHTML = `
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
        `
        titleBar.appendChild(titleBarControls)

        this.window.appendChild(titleBar)
    }

    #createBody(){
        let body = document.createElement('div')
        body.className = 'window-body'
        body.innerHTML = this.contents
        this.window.appendChild(body)
    }
}
