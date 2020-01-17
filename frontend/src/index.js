import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {

	return (
		<div className="main-container">
			<h1>Life Goal Tracker</h1>
			
			
			<button id="add-goal">+</button>
		</div>
	);

}
