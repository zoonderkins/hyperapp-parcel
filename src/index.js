import { h, app} from "hyperapp"

const state = {
    title: 'It works !',
    count: 0
}

const actions = {
    down: () => state => ({
        count: state.count - 1
    }),
    up: () => state => ({
        count: state.count + 1
    })
}

const view = (state, actions) => (
    console.table(state),
    <div class="container">
        <h1>{state.title}</h1>
        <hr/>
        <h2>{state.count}</h2>
        <button onclick={actions.down} disabled={state.count <= 0}>−</button>
        <button onclick={actions.up}>+</button>
    </div>
  )

export const main = app(state, actions, view, document.body)
