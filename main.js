// data
let app;
const sketches = [
    'discs',
    'snake'
    // remember, list doesn't gracefully overflow yet
].map(elm => new Sketch(elm))

function initApp() {
    app = new Vue({
        el: '#app',
        data: {
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
    return `${hash.replace('#', 'sketches/')}`
}

function getSketchFromCurrentHash() {
    return sketches.find(elm => {
        return elm.hash == location.hash
    })
}

function getDefaultSketch() {
    return sketches[0]
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

    const iframeElm = document.getElementById('view')
    iframeElm.setAttribute('src' , sketch.src)

    updateComponents()
}

function reload() {
    location.reload()
}

window.onload = function () {
    initApp()
    setContentFromHash()

    window.onresize = _.debounce(reload, 500)
    window.onhashchange = setContentFromHash
}

