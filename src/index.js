import './scss/main.scss'
import {
    h,
    app
} from "hyperapp"


console.log('Site is running')
const state = {
    title: 'The site is running'
}

const actions = {
    down: () => state => ({
        count: state.count - 1
    }),
    up: () => state => ({
        count: state.count + 1
    })
}
const view = (state,actions) => (
    <div class="container">
            <h1>{state.title}</h1>
    </div>
  )

export const main = app(state, actions, view, document.body)
