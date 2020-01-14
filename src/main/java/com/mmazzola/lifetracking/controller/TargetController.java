package com.mmazzola.countdown.controller;

import java.time.Clock;
import java.time.Instant;
import java.util.Calendar;
import java.util.Date;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TargetController {
	@GetMapping(path = "/api/time", produces = MediaType.APPLICATION_JSON_VALUE)
	public TargetDTO getTarget() {
		Calendar cal = Calendar.getInstance();
		cal.setTime(Date.from(Instant.now(Clock.systemUTC())));
		cal.add(Calendar.MONTH, 3);
		return new TargetDTO(cal.getTime().toString());
	}

	private class TargetDTO {

		private String targetDate;

		public TargetDTO(String targetDate) {
			this.targetDate = targetDate;
		}

		public String getTargetDate() {
			return targetDate;
		}
	}
}
