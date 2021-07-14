import {DomListener} from "./DomListener"

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []

        this.prepare()
    }
    // Configures our component for init
    prepare() {

    }

    // Return the component template
    toHTML() {
        return ''
    }
    // Notify the listener about the event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }
    // Subscribe on the function
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }
    // Init component
    init() {
        this.initDOMListener()
    }
    // Delete component & clear listeners
    destroy() {
        this.removeDOMListener()
        this.unsubscribers.forEach(unsub => unsub())
    }
}