import {combineReducers} from 'redux';

const CurrentTabReducer = function(state=null, action) {
	if(state == null)
		return 0;					// default currentTab,
	else {
		switch(action.type) {
			case "NAV_TAB_CHANGED":
				return action.payload;
				break;
			default:
				return state;
		}
	}
}

const InfoViewReducer = (state=null, action) => {
	if(state == null)
		return 0
	else {
		if(action.type == "INFO_VIEW_CHANGED")
			return action.payload

		else return state;
	}
}

// this is essentially what the 'store' looks like
// the reducers return data that create a new store
export default combineReducers({
	currentTab: CurrentTabReducer,
	currentInfoView: InfoViewReducer
});
