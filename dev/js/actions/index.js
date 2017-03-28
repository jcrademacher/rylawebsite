export const setProfile = (profile) => {
	if(typeof profile != "object") {
		throw "Profile should be an object, got " + (typeof profile);
		return;
	}

	return {
		type: "PROFILE_UPDATED",
		payload: profile 					// returning an action with type and payload
	};
};

// the following two actions handling window resizing
export const setWindowWidth = (width) => {
	if(typeof width != 'number') {
		throw 'Width should be a number, got ' + (typeof width);
		return;
	}

	return {
		type: "WINDOW_WIDTH_UPDATED",
		payload: width
	}
};

export const setWindowHeight = (height) => {
	if(typeof height != 'number') {
		throw 'Height should be a number, got ' + (typeof height);
		return;
	}

	return {
		type: "WINDOW_HEIGHT_UPDATED",
		payload: height
	}
};
