import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter.js';
import GuestList from './GuestList.js';
import Counter from './Counter.js';

const MainContent = props => {
	return (
		<div className="main">
			<ConfirmedFilter
				toggleFilter={props.toggleFilter}
				isFiltered={props.isFiltered}
			/>

			<Counter
				totalInvited={props.totalInvited}
				numberAttending={props.numberAttending}
				numberUnconfirmed={props.numberUnconfirmed}
			/>

			<GuestList
				guests={props.guests}
				toggleConfirmationAt={props.toggleConfirmationAt}
				toggleIsEditingAt={props.toggleIsEditingAt}
				setNameAt={props.setNameAt}
				isFiltered={props.isFiltered}
				removeGuestAt={props.removeGuestAt}
				pendingGuest={props.pendingGuest}
			/>
		</div>
	);
};

MainContent.propTypes = {
	totalInvited: PropTypes.number,
	numberAttending: PropTypes.number,
	numberUnconfirmed: PropTypes.number,
	toggleFilter: PropTypes.func.isRequired,
	isFiltered: PropTypes.bool.isRequired,
	guests: PropTypes.array.isRequired,
	toggleConfirmationAt: PropTypes.func.isRequired,
	toggleIsEditingAt: PropTypes.func.isRequired,
	setNameAt: PropTypes.func.isRequired,
	isFiltered: PropTypes.bool.isRequired,
	removeGuestAt: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string.isRequired
};

export default MainContent;
