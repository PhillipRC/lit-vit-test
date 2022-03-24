import './my-element'
import './my-app'

window.onload = () => {
    console.debug('handle document loaded')

    document.addEventListener("clickCount", (evt) => {
        console.debug(`document - count:${evt.detail.count} name:${evt.detail.name}`)
    })

}