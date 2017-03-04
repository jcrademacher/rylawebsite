export const navTabChanged = (currentTab) => ({
		type: "NAV_TAB_CHANGED",
		payload: currentTab 					// returning an action with type and payload
});

// reducer for view of about section (contact, directions, about etc.)
export const infoViewChanged = (currentInfoView) => ({
		type: "INFO_VIEW_CHANGED",
		payload: currentInfoView  // string i.e., "about", "contact", "directions", etc.
});
