import {combineReducers} from 'redux';

const ProfileUpdatedReducer = (state=null, action) => {
	if(action.type == "PROFILE_UPDATED")
		return action.payload

	else return state;
}

const WindowWidthReducer = (state=null, action) => {
	if(action.type == "WINDOW_WIDTH_UPDATED")
		return action.payload;

	else return state;
}

const WindowHeightReducer = (state=null, action) => {
	if(action.type == "WINDOW_HEIGHT_UPDATED")
		return action.payload;

	else return state;
}

// this is essentially what the 'store' looks like
// the reducers return data that create a new store
export default combineReducers({
	profile: ProfileUpdatedReducer,
	windowWidth: WindowWidthReducer,
	windowHeight: WindowHeightReducer
});
