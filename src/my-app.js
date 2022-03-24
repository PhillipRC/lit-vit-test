import {
    LitElement,
    css,
    html,
} from 'lit'

// define the 
const tagName = "my-app";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {

    /**
     * Define component styles
     */
    static get styles() {
        return css`
  
        /* styles applied to the custome element */
        :host {
          border: solid 1px gray;
          display: block;
          max-width: 800px;
          padding: 16px;
        }
        
        h1 {
            padding: 0 16px 0 16px;
            margin: 0 0 16px 0;
        }

        `
    }

    /**
     * Define component properties
     */
    static get properties() {
        return {

            // name
            name: { type: String },

            // click count
            count: { type: Number },

        }
    }

    constructor() {
        super()
        this.name = 'World'
        this.count = 0
    }

    /**
     * Handle first updated
     */
    firstUpdated() {
        console.debug(tagName + ' - firstUpdated')
    }

    /**
     * Handle updates to properties
     * @param {*} props map of properties
     */
    updated(props) {
        console.debug(tagName + ' - updated', props)
    }

    /**
     * Handle click event
     */
    handleClick() {
        console.debug(tagName + ' - click')
        this.count++
    }

    render() {
        return html`
        
        <!-- use of a property -->
        <h1>${this.name}!</h1>
  
        <!-- container children of the for -->
        <slot></slot>
        `
    }

}

window.customElements.define(tagName, MyElement)
