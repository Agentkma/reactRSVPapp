import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/Header.js';
import MainContent from './components/MainContent.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pendingGuest: '',
			isFiltered: false,
			guests: [],
			lastGuestId: 0
		};
		this.toggleGuestPropertyAt = this.toggleGuestPropertyAt.bind(this);
		this.toggleConfirmationAt = this.toggleConfirmationAt.bind(this);
		this.toggleIsEditingAt = this.toggleIsEditingAt.bind(this);
		this.setNameAt = this.setNameAt.bind(this);
		this.toggleFilter = this.toggleFilter.bind(this);
		this.handleNameInput = this.handleNameInput.bind(this);
		this.newGuestSubmitHandler = this.newGuestSubmitHandler.bind(this);
		this.removeGuestAt = this.removeGuestAt.bind(this);
		this.getTotalInvited = this.getTotalInvited.bind(this);
		this.getAttendingGuests = this.getAttendingGuests.bind(this);
		this.newGuestId = this.newGuestId.bind(this);
	}

	toggleGuestPropertyAt(property, id) {
		this.setState({
			guests: this.state.guests.map((guest, index) => {
				if (id === guest.id) {
					return {
						...guest,
						[property]: !guest[property]
					};
				}
				return guest;
			})
		});
	}

	toggleConfirmationAt(id) {
		this.toggleGuestPropertyAt('isConfirmed', id);
	}

	toggleIsEditingAt(id) {
		this.toggleGuestPropertyAt('isEditing', id);
	}

	setNameAt(name, id) {
		this.setState({
			guests: this.state.guests.map((guest, index) => {
				if (id === guest.id) {
					return {
						...guest,
						name
					};
				}
				return guest;
			})
		});
	}

	toggleFilter() {
		this.setState({ isFiltered: !this.state.isFiltered });
	}

	handleNameInput(e) {
		this.setState({ pendingGuest: e.target.value });
	}

	newGuestId() {
		let id = this.state.lastGuestId;
		id += 1;
		this.setState({
			lastGuestId: id
		});

		return this.state.lastGuestId;
	}

	newGuestSubmitHandler(e) {
		e.preventDefault();
		const id = this.newGuestId();
		this.setState({
			guests: [
				{
					name: this.state.pendingGuest,
					isConfirmed: false,
					isEditing: false,
					id
				},
				...this.state.guests
			],
			pendingGuest: ''
		});
	}

	removeGuestAt(id) {
		this.setState({
			guests: this.state.guests.filter(guest => id !== guest.id)
		});
	}

	getTotalInvited() {
		return this.state.guests.length;
	}
	getAttendingGuests() {
		return this.state.guests.reduce(
			(total, guest) => (guest.isConfirmed ? total + 1 : total),
			0
		);
	}

	render() {
		const totalInvited = this.getTotalInvited();
		const numberAttending = this.getAttendingGuests();
		const numberUnconfirmed = totalInvited - numberAttending;
		return (
			<div className="App">
				<Header
					handleNameInput={this.handleNameInput}
					pendingGuest={this.state.pendingGuest}
					newGuestSubmitHandler={this.newGuestSubmitHandler}
				/>
				<MainContent
					totalInvited={totalInvited}
					numberAttending={numberAttending}
					numberUnconfirmed={numberUnconfirmed}
					toggleFilter={this.toggleFilter}
					isFiltered={this.state.isFiltered}
					guests={this.state.guests}
					toggleConfirmationAt={this.toggleConfirmationAt}
					toggleIsEditingAt={this.toggleIsEditingAt}
					setNameAt={this.setNameAt}
					isFiltered={this.state.isFiltered}
					removeGuestAt={this.removeGuestAt}
					pendingGuest={this.state.pendingGuest}
				/>
			</div>
		);
	}
}

export default App;
