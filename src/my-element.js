import {
  LitElement,
  css,
  html,
} from 'lit'

// define tag to be used in the HTML i.e. <my-element>
const tagName = "my-element"

/**
 * Example custom element
 */
export class MyElement extends LitElement {

  /**
   * Define component styles
   */
  static get styles() {
    return css`

      /* private styles applied to the custom element */
      :host {
        border: solid 1px gray;
        display: block;
        margin-bottom: 16px;
        max-width: 800px;
        padding: 16px;
        user-select: none;
      }

      /* private styles using global CSS vars with a fallback value */
      h2 {
        background-color: var(--main-color, #fff);
        padding: 16px;
        margin: 0 0 16px 0;
      }

      button {
        background-color: var(--main-color, #fff);
        border-radius: 4px;
        border-width: 1px;
        cursor: pointer;
      }

      /* styles applied to the root of all slots */
      ::slotted(*) {
        border-bottom: transparent solid 2px;
        color: #0c0dcc;
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
    
    // default property values
    this.name = 'World'
    this.count = 0

  }

  /**
   * Life cycle hook - Handle first updated
   */
  firstUpdated(props) {
    console.debug(tagName + ' - firstUpdated', props)
  }

  /**
   * Life cycle hook - Handle updates to properties
   * @param {*} props map of properties
   */
  updated(props) {
    console.debug(tagName + ' - updated', props)
  }

  /**
   * Event Listener - Handle click
   */
  handleClick(evt) {
    console.debug(tagName + ' - click', evt)
    this.count++

    // dispatch a custom event from the component
    const event = new CustomEvent('clickCount', {detail:this, bubbles: true})
    this.dispatchEvent(event)
  }

  render() {
    return html`
      
      <!-- using a property -->
      <h2>
        Hello, ${this.name}!
      </h2>
      

      <!-- adding an event listener -->
      <button @click=${this.handleClick}>
        
         Click Count: ${this.count}

      </button>

      <!-- container children of the element -->
      <slot></slot>

    `
  }

}

window.customElements.define(tagName, MyElement)
