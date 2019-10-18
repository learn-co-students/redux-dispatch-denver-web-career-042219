let state = {count: 0}
function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

// function dispatch(action) {
//   return state = changeState(state,action)
// }

dispatch = (action) => {
  state = changeState(state,action)
  render()
}

render = () => document.querySelector('h3').textContent = state.count

// let action = {type: 'INCREASE_COUNT'}

// changeState(state, action)
// console.log(changeState(state, { type: 'INCREASE_COUNT'}))
// console.log(changeState(state, { type: 'INCREASE_COUNT'}))
// console.log(changeState(state, { type: 'INCREASE_COUNT'}))
dispatch({ type: 'INCREASE_COUNT'})
dispatch({ type: 'INCREASE_COUNT'})
