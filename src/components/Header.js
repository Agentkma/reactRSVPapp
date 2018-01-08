import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm.js';

const Header = props => (
	<header>
		<h1>Let&#8217;s RSVP</h1>
		<p>A React App</p>
		<GuestInputForm
			handleNameInput={props.handleNameInput}
			pendingGuest={props.pendingGuest}
			newGuestSubmitHandler={props.newGuestSubmitHandler}
		/>
	</header>
);

Header.propTypes = {
	handleNameInput: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string.isRequired,
	newGuestSubmitHandler: PropTypes.func.isRequired
};

export default Header;
