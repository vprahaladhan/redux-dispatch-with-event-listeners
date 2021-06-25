// add code snippets from README
let state

const reducer = (state = {count: 0}, action) => {
  switch(action.type) {
    case 'INCREASE_COUNT': 
      return {...state, count: state.count + 1}
    default: 
      return state
  }
}

const dispatch = (action) => {
  state = reducer(state, action)
  render()
}

const render = () => {
  document.getElementById('container').textContent = state.count
}

document.getElementById('button').onclick = () => {
  dispatch({type: 'INCREASE_COUNT'})
}

dispatch({type: '@@INIT'})