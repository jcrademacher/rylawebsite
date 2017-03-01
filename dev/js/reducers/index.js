import {combineReducers} from 'redux';

var CurrentTabReducer = function(state=null, action) {
	if(state == null)
		return 0;					// default currentTab,
	else {
		switch(action.type) {
			case "NAV_TAB_CHANGED":
				return action.payload;
				break;
		}
	}
}

// this is essentially what the 'store' looks like
// the reducers return data that create a new store
export default combineReducers({
	currentTab: CurrentTabReducer
});
