import React, { useState, useEffect } from 'react';

export default function Timer({ init }) {

	const [time, setTime] = useState(init);
	const [seconds, setSeconds] = useState();
	const [minutes, setMinutes] = useState();
	const [hours, setHours] = useState();
	const [days, setDays] = useState();
	const [months, setMonths] = useState();
	const [years, setYears] = useState();

	const [loaded, isLoaded] = useState(false);

	useEffect(() => {
		setInterval(() => {
			setTime(t => t - 1000)
		}, 1000);
	}, [])

	useEffect(() => {
		setSeconds(Math.floor(time / 1000) % 60);
		setMinutes(Math.floor(time / (60 * 1000)) % 60);
		setHours(Math.floor(time / (60 * 60 * 1000)) % 24);
		setDays(Math.floor(time / (24 * 60 * 60 * 1000)));
		isLoaded(true);
	}, [time])

	return (
		loaded &&
		<div>
			{days > 0 && <p> {days} days</p>}
			<p>{hours} : {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}</p>
		</div>
	);
}