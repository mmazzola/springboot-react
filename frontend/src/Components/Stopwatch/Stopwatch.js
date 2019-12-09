import React, { useState, useEffect } from 'react';
import { Timer } from '../Timer';

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
		<div>
			{loaded && <Timer init={diff} />}
		</div>
	);
}