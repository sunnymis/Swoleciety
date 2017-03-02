export default class DateService {

  static getCurrentWeek() {
    return this.getWeekStartForDay(new Date(Date.now()));
  }

  static getWeekStartForDay(day) {
    let dayToProcess = day;
    if (day.length === 6) {
      dayToProcess = this.convertFormattedDateToRealDate(day);
    } else if (day instanceof Date === false) {
      console.error('ERROR: getWeekStartForDay argument must be type Date or formatted 6 digit string MMDDYY');
      return null;
    }
    const date = dayToProcess.getDate();
    const theDay = dayToProcess.getDay();
    const weekStart = new Date(dayToProcess.setDate(date - theDay)).getDate();
    const month = dayToProcess.getMonth() + 1;
    const year = dayToProcess.getFullYear().toString().substr(2, 3);
    let formattedDate = `${month}${weekStart}${year}`;
    if (month < 10) {
      formattedDate = `0${formattedDate}`;
    }
    return formattedDate;
  }

  static getNextWeek(week) {
    const currentWeek = this.convertFormattedDateToRealDate(week);
    return new Date(currentWeek.setDate(currentWeek.getDate() + 7));
  }

  static getPreviousWeek(week) {
    const currentWeek = this.convertFormattedDateToRealDate(week);
    return new Date(currentWeek.setDate(currentWeek.getDate() - 7));
  }

  static getNextDay(formattedDate) {
    let day = parseInt(formattedDate.substr(2, 2), 10) + 1;
    if (day < 10) {
      day = `0${day}`;
    }
    return day;
  }

  static getPrevDay(formattedDate) {
    let day = parseInt(formattedDate.substr(2, 2), 10) - 1;
    if (day < 10) {
      day = `0${day}`;
    }
    return day;
  }

  static getDayFromFormattedDate(formattedDate) {
    const realDate = this.convertFormattedDateToRealDate(formattedDate);
    return this.getDayName(realDate);
  }

  static getMonthFromFormattedDate(formattedDate) {
    const realDate = this.convertFormattedDateToRealDate(formattedDate);
    return this.getMonthName(realDate);
  }

  static getDayName(date) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'];
    return weekdays[date.getDay()];
  }

  static getMonthName(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
  }

  static convertFormattedDateToRealDate(formattedDate) {
    const month = parseInt(formattedDate.substr(0, 2), 10) - 1;
    const date = formattedDate.substr(2, 2);
    const year = `20${formattedDate.substr(4, 2)}`;
    return new Date(year, month, date);
  }

  static convertRealDateToFormattedDate(realDate) {
    const date = realDate.getDate();
    const thisMonth = realDate.getMonth() + 1;
    const thisYear = realDate.getFullYear().toString().substr(2, 3);
    let formattedDate = `${thisMonth}${date}${thisYear}`;
    if (thisMonth < 10) {
      formattedDate = `0${formattedDate}`;
    }
    return formattedDate;
  }

}
