import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import './Popup.css';

const PopupOverlay = props => {
	// utility functions
	const hidePopup = () => {
		setPopupState({ renderPopup: () => null, popupExists: false });
	};
	const displayPopup = renderPopup =>
		setPopupState({
			renderPopup,
			popupExists: true
		});

	// context state
	const [popupState, setPopupState] = useState({
		renderPopup: () => null, // pass a render function here.
		popupExists: false
	});

	return (
		<PopupContext.Provider
			value={{
				...popupState,
				displayPopup,
				hidePopup
			}}
		>
			{props.children}
			{popupState.popupExists && (
				<div className="popupOverlay" onClick={hidePopup}>
					<div className="popupView">{popupState.renderPopup()}</div>
				</div>
			)}
		</PopupContext.Provider>
	);
};

PopupOverlay.propTypes = {
	children: PropTypes.element
};

export const PopupContext = createContext({
	displayPopup: () => {},
	hidePopup: () => {},
	renderPopup: () => null,
	popupExists: false
});

export default PopupOverlay;
