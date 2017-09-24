import store from '../../redux';

// ——————————————  ACTION TYPES  ———————————————
const SET_SELECTED_LIBRARY = 'SET_SELECTED_LIBRARY';

// ——————————————  ACTION CREATORS  ———————————————
export function setSelectedLibraryId(libraryId) {
  return {type: SET_SELECTED_LIBRARY, libraryId}
}

// ——————————————  THUNK CREATORS  ———————————————
const goAsynThenDoAction = () => dispatch => {
  // … do async stuff .then(result => dispatch(doAction(result))}
}

// ----------------  UTILS  -------------------

const setOrToggleSelectedLibraryById = (id) => {
  const currentlySelectedId = store
    .getState()
    .selectedLibraryId;
  return id === currentlySelectedId
    ? null
    : id
}

// ——————————————  REDUCER  ———————————————
const selectedLibaryIdReducer = (selectedLibraryId = null, action) => {
  switch (action.type) {
    case SET_SELECTED_LIBRARY:
      return setOrToggleSelectedLibraryById(action.libraryId);
    default:
      return selectedLibraryId;
  }
}

export default selectedLibaryIdReducer;
