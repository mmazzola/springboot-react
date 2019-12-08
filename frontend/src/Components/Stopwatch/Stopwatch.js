import React, { useState, useEffect } from 'react';

export default function StopWatch() {
	const [diff, setDiff] = useState(0);

	useEffect(() => {
		fetch("/api/time").then(response => response.json())
			.then(data => { setDiff(new Date(data.targetDate) - Date.now()) });
	}, [])

	return (
		<div>
			<p>Diff is {diff}</p>
		</div>
	);
}