export const navTabChanged = (currentTab) => {
	if(typeof currentTab != "number") {
		throw "CurrentTab should be a number, got " + (typeof currentTab);
		return;
	}

	return {
		type: "NAV_TAB_CHANGED",
		payload: currentTab 					// returning an action with type and payload
	};
};

// reducer for view of about section (contact, directions, about etc.)
export const infoViewChanged = (currentInfoView) => {
	if(typeof currentInfoView != "number") {
		throw "CurrentTab should be a number, got " + (typeof currentInfoView);
		return;
	}

	return {
		type: "INFO_VIEW_CHANGED",
		payload: currentInfoView  // string i.e., "about", "contact", "directions", etc.
	};
};
