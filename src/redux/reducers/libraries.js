import data from './library_data.json';

// ——————————————  ACTION TYPES  ———————————————
const ACTION = 'ACTION';

// ——————————————  ACTION CREATORS  ———————————————
const doAction = (payload) => ({type: ACTION, payload})

// ——————————————  THUNK CREATORS  ———————————————
const goAsynThenDoAction = () => dispatch => {
  // … do async stuff .then(result => dispatch(doAction(result))}
}

// ——————————————  REDUCER  ———————————————
const librariesReducer = (libraries = data, action) => {
  switch (action.type) {
    case ACTION:
      return action.payload;
    default:
      return libraries
  }
}

export default librariesReducer;
