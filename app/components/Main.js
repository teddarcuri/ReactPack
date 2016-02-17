import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

class Main extends React.Component {
	render() {
		return (
			<h3>Hello form main</h3>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);