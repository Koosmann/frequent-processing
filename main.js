// data
let app;
let initialSize;
const sketches = [
    'discs',
    'snake',
    'burst',
    'mesh',
    'spiral',
    'spiral ii',
    'fur'
    // remember, list doesn't gracefully overflow yet
].map(elm => new Sketch(elm))

function initApp() {
    initialSize = getViewSize()
    app = new Vue({
        el: '#app',
        data: {
            generatedAt: null,
            reloadContent: reloadContent,
            sketches: sketches
        }
    })
}

function Sketch(name) {
    this.currentHash = location.hash
    this.name = name
    this.hash = `#${name.replace(/ /g, '-')}`
    this.src = getSrcFromHash(this.hash)

    this.isActive = function () {
        return this.currentHash == this.hash
    }
}

function getSrcFromHash(hash) {
    hash = hash || '' // default to string
    return `${hash.replace(/-/g, '_').replace('#', 'sketches/')}`
}

function getSketchFromCurrentHash() {
    return sketches.find(elm => {
        return elm.hash == location.hash
    })
}

function getDefaultSketch() {
    return sketches[0]
}

function getView() {
    return document.getElementById('view')
}

function getViewSize() {
    let iframe = getView()
    return {
        width: iframe.clientWidth,
        height: iframe.clientHeight
    }
}

function reloadContent() {
    let iframe = getView()

    if (iframe) {
        iframe.contentWindow.redraw();
    }
}

function updateComponents() {
    app.sketches.forEach(elm => {
        elm.currentHash = location.hash
    })
}

// content loading/routing
function setContentFromHash() {
    let sketch = getSketchFromCurrentHash()

    if (!sketch) {
        sketch = getDefaultSketch();
        location.replace(sketch.hash)
    }    

    getView().setAttribute('src' , sketch.src)

    app.generatedAt = new Date()
    updateComponents()
}

function reload() {
    let currentSize = getViewSize();
    
    if (initialSize.height !== currentSize.height || initialSize.width !== currentSize.width) {
        console.log(' reload')
        location.reload()
    }
}

window.onload = function () {
    initApp()
    setContentFromHash()

    window.onresize = _.debounce(reload, 500)
    window.onhashchange = setContentFromHash
}

