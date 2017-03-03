export const navTabChanged = (currentTab) => {
	console.log("Navbar Changed, currentTab: " + currentTab);

	return {
		type: "NAV_TAB_CHANGED",
		payload: currentTab 					// returning an action with type and payload
	};
}
