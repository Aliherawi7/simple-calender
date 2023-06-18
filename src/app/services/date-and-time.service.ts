import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateAndTimeService {

  constructor(


  ) { }

  getWeekdayAbbreviation(weekdayNumber: number) {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays[weekdayNumber];
  }

  convertHourTo12Hour(hour: number) {
    let hour12;
    const meridiem = (hour >= 12) ? 'PM' : 'AM';

    if (hour === 0) {
      hour12 = 12;
    } else if (hour > 12) {
      hour12 = hour - 12;
    } else {
      hour12 = hour;
    }

    return `${hour12} ${meridiem}`;
  }

  convert12HourTo24Hour(time: string) {
    let hour = '';

    const meridiem = time.split(" ")[1];
    const hourNumber = Number.parseInt(time.split(':')[0]);

    if (meridiem == 'AM' && hourNumber == 12) {
      hour = `00:${time.split(':')[1].split(' ')[0]}`;
    } else if (meridiem == "AM") {
      hour = time.split(' ')[0];
    } else if (meridiem == 'PM' && hourNumber == 12) {
      hour = time.split(" ")[0];
    } else if (meridiem == 'PM') {
      hour = (hourNumber + 12) + time.split(":")[1].split(" ")[0]
    }
    return hour
  }

  getMonthName(num: number): String {
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    return month[num]

  }

  getDateFormatted(date: Date): string {
    return this.getMonthName(date.getMonth()) + " " + date.getDate() + " " + date.getFullYear()
  }

  getTimesArray(): string[] {
    let hours: string[] = []
    for (let i = 0; i < 24; i++) {
      if (i == 0) {

      }
      hours.push(this.convertHourTo12Hour(i))
    }
    return hours;
  }
}
