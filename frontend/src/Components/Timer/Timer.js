import React, { useState, useEffect } from 'react';

export default function Timer({ init }) {

	const [time, setTime] = useState(init);	
	const [seconds, setSeconds] = useState();
	const [minutes, setMinutes] = useState();
	const [hours, setHours] = useState();

	useEffect( () => {
		setInterval(() => {
			setTime(t => t - 1000)
		}, 1000);
	}, [])
	
	useEffect( () => {
		setSeconds(Math.floor(time / 1000) % 60);
		setMinutes(Math.floor(time / 60000) % 60);
		setHours(Math.floor(time / 360000) % 24);
	}, [time])

	return (
		<p>{hours} : {minutes} : {seconds}</p>
	);
}