import React from 'react';

const text = 'Movie Cards Library';
class Header extends React.Component {
	render () {
		return (
			<header>
				<h1>
					{ text }
				</h1>
			</header>
		)
	}
}

export default Header;
