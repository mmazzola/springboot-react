import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Stopwatch } from './Components/Stopwatch';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {

	return (
		<div className="main-container">
			<img className="hearth" src="hearth.png" />
			<h1> It's the Pucci Countdown!</h1>
			<Stopwatch />
		</div>
	);

}
