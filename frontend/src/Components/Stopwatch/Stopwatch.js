import React, { useState, useEffect } from 'react';
import { Timer } from '../Timer';
import './Stopwatch.css';

export default function StopWatch() {
	const [diff, setDiff] = useState();
	const [loaded, isLoaded] = useState(false)

	useEffect(() => {
		fetch("/api/time").then(response => response.json())
			.then(data => {
				setDiff(new Date(data.targetDate) - Date.now())
				isLoaded(true)
			});
	}, [])

	return (
		<div className="stopwatch-container">
			{loaded && <Timer init={diff} />}
		</div>
	);
}