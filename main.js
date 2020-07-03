// data
let app;
function initApp() {
    app = new Vue({
        el: '#app',
        data: {
            key: 0,
            sketches: [
                'test',
                'test 2'
            ].map(elm => new Sketch(elm))
        }
    })
}

function Sketch(directory) {
    this.name = directory
    this.path = `#${directory.replace(/ /g, '-')}`
    this.isActive = function () {
        return location.hash == this.path
    }
}

// content loading/routing
function setContentFromHash() {
    try {
        var iframeSrc = `${location.hash.replace('#', 'sketches/').replace()}`
    } catch (e) {
        console.log('fail :(')
    }

    const iframeElm = document.getElementById('view')
    iframeElm.setAttribute('src' , iframeSrc)
    if (app) {
        app.key++
    }

    console.log(app.key)
}

function reload() {
    console.log('reload')
    location.reload()
}

window.onload = function () {
    initApp()
    setContentFromHash()
}

window.onhashchange = setContentFromHash
window.onresize = _.debounce(reload, 500)